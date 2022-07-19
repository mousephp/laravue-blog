<?php

namespace App\Traits;

use Illuminate\Support\Str;
use Storage;
use Illuminate\Database\Eloquent\Model;	

trait SlugTrait
{
    public function createSlug(Model $model){
        if ($model->slug) {
            return;
        }
        
        $slug = Str::slug($model->name, '-');
    
        $count = Model::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
    
        $model->slug = $count ? "{$slug}-{$count}" : $slug;
    }

    public function updateSlug(Model $model){
        $slug = Str::slug($model->name, '-');
    
        $count = Model::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
    
        $model->slug = $count ? "{$slug}-{$count}" : $slug;
    }

}
