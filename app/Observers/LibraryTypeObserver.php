<?php

namespace App\Observers;
use App\Models\LibraryType;
use Illuminate\Support\Str;

class LibraryTypeObserver
{
    public function creating(LibraryType $type): void
    {
        if ($type->slug) {
            return;
        }

        $slug = Str::slug($type->name, '-');

        $count = LibraryType::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
        
        $type->slug = $count ? "{$slug}-{$count}" : $slug;
    }

    public function updating(LibraryType $type): void
    {
        $slug = Str::slug($type->name, '-');

        $count = LibraryType::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
        
        $type->slug = $count ? "{$slug}-{$count}" : $slug;
    }
}
