<?php 

namespace App\Repositories\Eloquents;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Repositories\Contracts\LikeRepositoryInterface;
use App\Models\LikeNews;
use App\Models\News;
use Illuminate\Support\Facades\DB;
use Auth;

class LikeRepository implements LikeRepositoryInterface
{
	protected $news;
	protected $like;

	function __construct(News $news, LikeNews $like)
	{
		$this->news = $news;
		$this->like = $like;
	}

    public function handleLike($request){
        $result = $this->news->findOrFail($request->new_id);

        if($result){
            $this->like->user_id = $request->user_id;
            $this->like->new_id = $request->new_id;
            $this->like->is_liked = 1;
            $this->like->save();

            return $this->like;
        }

        return false;
    }

    public function handleDislike($request){

    }

}




