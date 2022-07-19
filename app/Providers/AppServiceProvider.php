<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Schema\Builder;

use App\Repositories\Eloquents\DiscussionRepository;
use App\Repositories\Contracts\DiscussionRepositoryInterface;

use App\Repositories\Eloquents\LikeRepository;
use App\Repositories\Contracts\LikeRepositoryInterface;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(DiscussionRepositoryInterface::class,DiscussionRepository::class);  
        $this->app->bind(LikeRepositoryInterface::class,LikeRepository::class);  

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Builder::defaultStringLength(191); 
    }
}
