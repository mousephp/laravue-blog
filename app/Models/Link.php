<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Link extends Model
{
    use SoftDeletes;

    protected $table    = 'links';
    protected $dates    = ['deleted_at'];
    
    protected $fillable = [
         'name', 'slug','link', 'status'
    ];

}
