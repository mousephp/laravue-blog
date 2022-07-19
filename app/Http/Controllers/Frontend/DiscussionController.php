<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contracts\DiscussionRepositoryInterface;
use App\Http\Requests\DiscussionRequest;
use Illuminate\Support\Str;
use App\Http\Resources\DiscussionCollection;
use App\Models\{ Discussion, DiscussionType };
use Log;
use Exception;
use DB;

class DiscussionController extends Controller
{
    protected $discussion;
    protected $discussionFace;
    protected $discussionType;

    public function __construct(DiscussionType $discussionType, Discussion $discussion, DiscussionRepositoryInterface $discussionFace)
    {
        $this->discussion     = $discussion;
        $this->discussionFace = $discussionFace;
        $this->discussionType = $discussionType;
    }

    //hiển thị danh sách dissussion theo danh mục (this->discussionTypeList)
    function index(){ //(same)
    	$discussion = $this->discussion
            ->with('user')
            ->where('status', 'active')
    		->select('discussions.id', 'discussions.title', 'discussions.content', 'discussions.user_id', 'discussions.discussion_type_id', 'discussions.created_at', 'view', 'like as countLikeDiscussion')
    		->orderBy('id', 'desc')
    		->get();

    	return response()->json($discussion, 200);
    }

    public function store(DiscussionRequest $request)
    {
        try {
            $discussion = $this->discussion->create($request->all());

            return response()->json([
                'discussion' => $discussion,
                'success'    => true,
                'message'    => $discussion ? 'Thêm dữ liệu thành công' : "Thêm dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    public function update(DiscussionRequest $request, $id)
    {
        try {
            $discussion = $this->discussionFace->updateDiscussion($id, $request);

            return response()->json([
                'discussion' => $discussion,
                'success'    => true,
                'message'    => $discussion ? 'Cập nhật dữ liệu thành công' : "Cập nhật dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }
    
    public function show($id)
    {
        $discussion = $this->discussion->findOrFail($id);

        return response()->json($discussion, 200);
    }
    
    //hiển thị danh mục dissussion
    function discussionTypeList(){
        $discussionTypes = $this->discussionType->all();

    	return response()->json($discussionTypes, 200);
    }

    //get content of discussion
    function userDiscussionWithType($discussion_type_id, $discussion_id){ //(same)
        $discussion = $this->discussion->with(['user', 'discussionType'])   //->with('favorited')
            ->where('discussions.discussion_type_id', $discussion_type_id)
            ->where('discussions.id', $discussion_id)
            ->first();

        return response()->json($discussion, 200);
    }

    //get discussion moi nhat
    function newDiscussion(){ //(same)
        $newdiscussion = $this->discussion->with('user')->where('status', 'active')->orderBy('id', 'desc')->take(10)->get();
        
        return response()->json([
            'newdiscussion' => $newdiscussion
        ], 200);
    }

    //mỗi lần truy cập vào 1 discussion sẽ tăng view lên 1+
    function incrementView($id){
        $discussion       = $this->discussion->findOrFail($id);
        $discussion->view = $discussion->view + 1;

        $status = $discussion->save();

        return response()->json([
            'status'     => $status,
            'message'    => $status ? '++View' : "--View",
            'discussion' => $discussion
        ]);
    }

    //hiển thị danh sách dissussion theo danh mục khi click vào danh mục
    function discussionPaginate($discussion_type_id){
        $discussion = $this->discussion->with(['user', 'discussionType'])
            ->where('discussions.discussion_type_id', $discussion_type_id)
            ->where('status', 'active')
            ->orderBy('discussions.id', 'desc')
            ->paginate(10);

        return response()->json($discussion, 200);
    }

}
