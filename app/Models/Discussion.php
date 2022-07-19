<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use App\Models\{ DiscussionType, CommentDiscussion, User, LikeDiscussion };
use Illuminate\Support\Facades\Auth;

class Discussion extends Model
{
    use SoftDeletes;

    protected $table    = 'discussions';
    protected $fillable = [
        'title', 'slug', 'content', 'view', 'like', 'user_id', 'discussion_type_id', 'status'
    ];

    protected $dates = ['deleted_at'];
   
    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function discussionType(){
        return $this->belongsTo(DiscussionType::class, 'discussion_type_id');
    }

    public function comment(){
        return $this->hasMany(CommentDiscussion::class,'discussion_id','id')->with('user')->where('status','active')->orderBy('id','DESC');
    }

    public function countDiscussions(){
        $counts = Discussion::where('status', 'active')->count();

        if($counts){
            return $counts;
        }

        return 0;
    }

    public function favorited()
    {
        return (bool) LikeDiscussion::where('user_id', Auth::id())
                        ->where('discussion_id', $this->id)
                        ->first();
    }

    // public function favorites()
    // {
    //     return $this->belongsToMany(User::class, 'like_discussions', 'discussion_id', 'user_id')->withTimeStamps();
    // }
}
