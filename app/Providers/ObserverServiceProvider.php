<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Tag;
use App\Models\Category;
use App\Models\Discussion;
use App\Models\DiscussionType;
use App\Models\Library;
use App\Models\LibraryType;
use App\Models\Link;
use App\Models\News;
use App\Models\Rule;
use App\Observers\TagObserver;
use App\Observers\CategoryObserver;
use App\Observers\DiscusionObserver;
use App\Observers\DiscussionTypeObserver;
use App\Observers\LibraryObserver;
use App\Observers\LibraryTypeObserver;
use App\Observers\LinkObserver;
use App\Observers\NewsObserver;
use App\Observers\RuleObserver;

class ObserverServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Tag::observe(TagObserver::class);
        Category::observe(CategoryObserver::class);
        Discussion::observe(DiscusionObserver::class);
        DiscussionType::observe(DiscussionTypeObserver::class);
        Library::observe(LibraryObserver::class);
        LibraryType::observe(LibraryTypeObserver::class);
        Link::observe(LinkObserver::class);
        News::observe(NewsObserver::class);
        Rule::observe(RuleObserver::class);
    }
}
