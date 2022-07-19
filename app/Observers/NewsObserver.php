<?php

namespace App\Observers;
use App\Models\News;
use Illuminate\Support\Str;

class NewsObserver
{
    public function creating(News $news): void
    {
        if ($news->slug) {
        return;
        }

        $slug = Str::slug($news->title, '-');

        $count = News::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
        
        $news->slug = $count ? "{$slug}-{$count}" : $slug;
    }

    public function updating(News $news): void
    {
        $slug = Str::slug($news->title, '-');

        $count = News::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
        
        $news->slug = $count ? "{$slug}-{$count}" : $slug;
    }
}
