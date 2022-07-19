<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tpack extends Model
{
    use SoftDeletes;

    protected $table    = 'tpacks';
    protected $fillable = [
        'text', 'title', 'content', 'status'
    ];

    protected $dates = ['deleted_at'];
}
