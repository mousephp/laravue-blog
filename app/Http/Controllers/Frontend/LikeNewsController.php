<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Repositories\Contracts\LikeRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\{ LikeNews, News };
use Auth;

class LikeNewsController extends Controller
{
    protected $news;
    protected $like;
    protected $likeNews;

    public function __construct(News $news, LikeNews $likeNews, LikeRepositoryInterface $like)
    {  
        $this->news     = $news;
        $this->like     = $like;
        $this->likeNews = $likeNews;
    }

    //đếm lượt like
    public function getLike($new_id){
        $countLikeNews = $this->likeNews->where('new_id',$new_id)->count();

        return response()->json([
            'countLikeNews' => $countLikeNews,
            'success'       => true,
            'isLikeNews'    => true//$isLikeNews == 1 ? true : false
        ], 200);
    }

    //kiểm tra xem bạn đã like bài viết này trưa và trả về
    function getStatusLike(Request $request){
        $like = $this->likeNews->where('user_id',$request->user_id)->where('new_id',$request->new_id)->select('is_liked')->first();

        if($like){
            return response()->json([
                'like'    => $like->is_liked,
                'status' => true,
                'message' => $like ? 'Like' : "Not Like",
            ], 200); 
        }

        return 0;
    }

    //kích hoạt like 
    function addLike($request){
        // $this->likeNews->user_id  = $request->user_id;
        // $this->likeNews->new_id   = $request->new_id;
        // $this->likeNews->is_liked = 1;
        //$status = $this->likeNews->save();

        $news = [
            'user_id'  => $request->user_id,
            'new_id'   => $request->new_id,
            'is_liked' => 1
        ];

        $status = $this->likeNews->create($news);      

        return $status;
    }

    //sử lú logic cho like
    function change(Request $request){
    	$res = filter_var((string)$request->isLike, FILTER_VALIDATE_BOOLEAN)? true : false;

        $isLike = $this->likeNews->where('user_id',$request->user_id)->where('new_id',$request->new_id)->select('is_liked')->first();

        if($isLike){ 
    		$news = $this->likeNews->where('user_id',$request->user_id)->first();
            
            return response()->json([
                'status'  => false
            ], 200);
    	} else { 
    		$like = $this->addLike($request);

            return response()->json([
                'status'  => true,
                'like'    => $like
            ], 200);
    	}
    }
}
