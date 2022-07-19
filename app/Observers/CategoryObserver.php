<?php

namespace App\Observers;
use App\Models\Category;
use Illuminate\Support\Str;

class CategoryObserver
{
    public function creating(Category $category): void
    {
        if ($category->slug) {
            return;
        }

        $slug = Str::slug($category->name, '-');

        $count = Category::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
        
        $category->slug = $count ? "{$slug}-{$count}" : $slug;
    }

    public function updating(Category $category): void
    {
        $slug = Str::slug($category->name, '-');

        $count = Category::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
        
        $category->slug = $count ? "{$slug}-{$count}" : $slug;
    }
}
