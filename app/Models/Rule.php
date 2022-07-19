<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Rule extends Model
{
    use SoftDeletes;

    protected $table    = 'rules';
    protected $fillable = [
        'title', 'slug', 'content', 'status'
    ];

    protected $dates = ['deleted_at'];

    public function getRouteKeyName(){
        return 'slug';
    }  
}
