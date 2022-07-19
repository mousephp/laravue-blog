<?php

namespace App\Observers;
use App\Models\Link;
use Illuminate\Support\Str;

class LinkObserver
{
    public function creating(Link $link): void
    {
        if ($link->slug) {
            return;
        }

        $slug = Str::slug($link->name, '-');

        $count = Link::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
        
        $link->slug = $count ? "{$slug}-{$count}" : $slug;
    }

    public function updating(Link $link): void
    {
        $slug = Str::slug($link->name, '-');

        $count = Link::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
        
        $link->slug = $count ? "{$slug}-{$count}" : $slug;
    }
}
