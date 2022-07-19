<?php

namespace App\Observers;
use App\Models\Library;
use Illuminate\Support\Str;

class LibraryObserver
{
    public function creating(Library $library): void
    {
        if ($library->slug) {
            return;
        }

        $slug = Str::slug($library->title, '-');

        $count = Library::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
        
        $library->slug = $count ? "{$slug}-{$count}" : $slug;
    }

    public function updating(Library $library): void
    {
        $slug = Str::slug($library->title, '-');

        $count = Library::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
        
        $library->slug = $count ? "{$slug}-{$count}" : $slug;
    }
}
