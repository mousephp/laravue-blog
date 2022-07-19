<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use App\Models\{ User, Category, Tag, CommentNews, LikeNews };

class News extends Model
{
    use SoftDeletes;

    protected $table    = 'news';
    protected $fillable = [
        'title', 'slug', 'quote', 'content', 'photo', 'photo_name', 'is_featured', 'status', 'cate_id', 'user_id', 'tag_id'
    ];

    protected $dates = ['deleted_at'];

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function tags() {
        return $this->belongsToMany(Tag::class, 'news_tags', 'new_id', 'tag_id')->select(['name']);
    }

    public function category() {
        return $this->belongsTo(Category::class, 'cate_id', 'id');
    }
    
    public function comment(){
        return $this->hasMany(CommentNews::class,'new_id','id')->with('user')->where('status','active')->orderBy('id','DESC');
    }
    
    public function likes(){
        return $this->hasMany(LikeNews::class,'new_id','id');
    }
    
    public function countPosts(){
        $counts = News::where('status', 'active')->count();

        if($counts){
            return $counts;
        }

        return 0;
    }
}
