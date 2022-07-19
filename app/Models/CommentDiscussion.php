<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\User;

class CommentDiscussion extends Model
{
    use SoftDeletes;

    protected $table    = 'comment_discussions';
    protected $fillable = [
        'message', 'discussion_id', 'user_id', 'status'
    ];

    protected $dates = ['deleted_at'];

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
}
