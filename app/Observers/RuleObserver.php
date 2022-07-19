<?php

namespace App\Observers;
use App\Models\Rule;
use Illuminate\Support\Str;

class RuleObserver
{
    public function creating(Rule $rule): void
    {
        if ($rule->slug) {
            return;
        }

        $slug = Str::slug($rule->title, '-');

        $count = Rule::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
        
        $rule->slug = $count ? "{$slug}-{$count}" : $slug;
    }

    public function updating(Rule $rule): void
    {
        $slug = Str::slug($rule->title, '-');

        $count = Rule::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
        
        $rule->slug = $count ? "{$slug}-{$count}" : $slug;
    }
}
