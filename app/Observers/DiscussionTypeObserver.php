<?php

namespace App\Observers;
use App\Models\DiscussionType;
use Illuminate\Support\Str;

class DiscussionTypeObserver
{
    public function creating(DiscussionType $type): void
    {
        if ($type->slug) {
            return;
        }

        $slug = Str::slug($type->name, '-');

        $count = DiscussionType::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
        
        $type->slug = $count ? "{$slug}-{$count}" : $slug;
    }

    public function updating(DiscussionType $type): void
    {
        $slug = Str::slug($type->name, '-');

        $count = DiscussionType::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
        
        $type->slug = $count ? "{$slug}-{$count}" : $slug;
    }
}
