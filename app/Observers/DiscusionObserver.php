<?php

namespace App\Observers;
use App\Models\Discussion;
use Illuminate\Support\Str;

class DiscusionObserver
{
    public function creating(Discussion $discussion): void
    {
        if ($discussion->slug) {
            return;
        }

        $slug = Str::slug($discussion->title, '-');

        $count = Discussion::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
        
        $discussion->slug = $count ? "{$slug}-{$count}" : $slug;
    }

    public function updating(Discussion $discussion): void
    {
        $slug = Str::slug($discussion->title, '-');

        $count = Discussion::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
        
        $discussion->slug = $count ? "{$slug}-{$count}" : $slug;
    }
}
