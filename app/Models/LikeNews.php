<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class LikeNews extends Model
{
    use SoftDeletes;

    protected $table    = 'like_news';
    protected $fillable = [
        'new_id', 'user_id',  'is_liked', 'status'
    ];

    protected $dates = ['deleted_at'];
}
