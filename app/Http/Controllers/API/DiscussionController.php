<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Discussion;
use App\Models\Rating;
use App\Http\Requests\DiscussionRequest;
use Illuminate\Support\Str;
use Log;
use Exception;
use App\Http\Resources\DiscussionCollection;
use App\Repositories\Contracts\DiscussionRepositoryInterface;

class DiscussionController extends Controller
{
    protected $discussion;
    protected $rating;
    protected $model;

    public function __construct(DiscussionRepositoryInterface $discussion, Discussion $model, Rating $rating)
    {
        $this->discussion = $discussion;
        $this->rating     = $rating;
        $this->model      = $model;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $discussions =  $this->model->with(['discussionType','user'])->get();

        return response()->json([
            'discussions' => $discussions,
            'success'     => true,
        ], 200);
        
        // return new DiscussionCollection($discussions);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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

    /**
     * Display the specified resource.
     *
     * @param  \App\Link  $discussion
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $discussion = $this->model->findOrFail($id);

        return response()->json($discussion, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Link  $discussion
     * @return \Illuminate\Http\Response
     */
    public function update(DiscussionRequest $request, $id)
    {
        try {
            $discussion = $this->discussion->updateDiscussion($id, $request);

            return response()->json([
                'discussion' => $discussion,
                'success'    => true,
                'message'    => $discussion ? 'Cập nhật dữ liệu thành công' : "Cập nhật dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Link  $discussion
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $discussion = $this->discussion->delete($id);

            return response()->json([
                'success'  => true,
                'message'  => $discussion ? 'Xóa dữ liệu thành công' : "Xóa dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    public function rating(){
        $stars = $this->rating->with(['user', 'discussion'])->get();

        return response()->json(['stars' => $stars], 200);
    }
}
