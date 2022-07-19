<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class LikeDiscussion extends Model
{
    use SoftDeletes;

    protected $table    = 'like_discussions';
    protected $fillable = [
        'discussion_id', 'user_id', 'is_liked', 'status'
    ];

    protected $dates = ['deleted_at'];
}
