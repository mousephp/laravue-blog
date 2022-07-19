<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
 use Illuminate\Support\Str;

class DiscussionType extends Model
{
    use SoftDeletes;

    protected $table    = 'discussion_types';
    protected $fillable = [
        'name', 'slug', 'status'
    ];

    protected $dates = ['deleted_at'];

}
