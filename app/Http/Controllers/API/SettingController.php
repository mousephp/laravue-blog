<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\SettingRequest;
use Illuminate\Support\Str;
use App\Models\{ Setting, Link };
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use Log;
use Exception;

class SettingController extends Controller
{
    protected $setting;
    protected $link;

    public function __construct(Setting $setting, Link $link)
    {
        $this->setting = $setting;
        $this->link    = $link;
    }

    public function __invoke(SettingRequest $request)
    {
        Cache::forget('settings');

        foreach ($request->all() as $key => $value) {
            DB::table('settings')
                ->where('name', $key)
                ->update(['value' => $value]);
        }
        
        return response()->noContent();
    }

}
