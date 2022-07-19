<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use App\Models\News;

class Category extends Model
{
	use SoftDeletes;

    protected $table = 'categories';
    protected $dates = ['deleted_at'];

    protected $fillable = [
       'name', 'slug', 'status'
    ];

    public function news(){
        return $this->hasMany(News::class, 'cate_id', 'id')->where('status','active');
    }
    
    public function countNews(){
        return $this->hasMany(News::class, 'cate_id', 'id')->where('status', 'active')->count();
    }
    
}


//https://stackoverflow.com/questions/30582600/laravel-generate-slug-before-save