<?php 

namespace App\Repositories\Eloquents;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Repositories\Contracts\DiscussionRepositoryInterface;
use App\Models\Discussion;
use Illuminate\Support\Facades\DB;
use Auth;

class DiscussionRepository extends EloquentRepository implements DiscussionRepositoryInterface
{
	protected $discussion;

	function __construct(Discussion $discussion)
	{
		parent::__construct($discussion);
		$this->discussion = $discussion;
	}

    public function pagination(){
        return $this->discussion->paginate(5);
    }

	public function updateDiscussion($id, $request){
        $result = $this->model->find($id);

        if($result){
            $result->title              = $request->title;
            $result->content            = $request->content;
            $result->user_id            = Auth::user()->id;          
            $result->status             = $request->status ? $request->status : 'inactive';
            $result->discussion_type_id = $request->discussion_type_id;
            $result->save();

            return $result;
        }

        return false;
    }

}




