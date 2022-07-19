<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserManual extends Model
{
    use SoftDeletes;

    protected $table    = 'user_manuals';
    protected $fillable = [
        'title', 'content', 'status'
    ];

    protected $dates = ['deleted_at'];
}
