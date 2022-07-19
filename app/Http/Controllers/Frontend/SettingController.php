<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Setting;
use Illuminate\Support\Facades\Cache;

class SettingController extends Controller
{
    public function __invoke()
    {
        //lấy giá trị cache data và lưu trữ chúng nếu cache data đó không tồn tại, bằng cách sử dụng phương thức remember
        $settings = Cache::rememberForever('settings', function () {
            return Setting::all();
        });

        $keyed = $settings->keyBy('name')->mapWithKeys(function ($item) {
            return [$item['name'] => $item['value']];
        });
        
        return response()->json(['data' => $keyed->all()], 200);
    }
}
