<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Setting;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;

class SettingServiceProvider extends ServiceProvider
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
        // $minutes = 60;//Thời gian hết hạn 

        if(!App::runningInConsole()) {
            $settings = Cache::rememberForever('settings', function () {
                return Setting::all();
            });

            config()->set('settings', $settings->pluck('value', 'name')->all());
        }
    }
}
