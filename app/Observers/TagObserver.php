<?php

namespace App\Observers;

use App\Models\Tag;
use Illuminate\Support\Str;
use App\Traits\SlugTrait;

class TagObserver
{
    use SlugTrait;

    /**
     * Handle the tag "created" event.
     *
     * @param  \App\Tag  $tag
     * @return void
     */
    public function creating(Tag $tag): void
    {
        if ($tag->slug) {
            return;
        }
        
        $slug = Str::slug($tag->name, '-');
    
        $count = Tag::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
    
        $tag->slug = $count ? "{$slug}-{$count}" : $slug;
    }


    /**
     * Handle the tag "updated" event.
     *
     * @param  \App\Tag  $tag
     * @return void
     */
    public function updating(Tag $tag): void
    {   
        $slug = Str::slug($tag->name, '-');
    
        $count = Tag::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
    
        $tag->slug = $count ? "{$slug}-{$count}" : $slug;
    }

    /**
     * Handle the tag "deleted" event.
     *
     * @param  \App\Tag  $tag
     * @return void
     */
    public function deleted(Tag $tag)
    {
        //
    }

    /**
     * Handle the tag "restored" event.
     *
     * @param  \App\Tag  $tag
     * @return void
     */
    public function restored(Tag $tag)
    {
        //
    }

    /**
     * Handle the tag "force deleted" event.
     *
     * @param  \App\Tag  $tag
     * @return void
     */
    public function forceDeleted(Tag $tag)
    {
        //
    }
}
