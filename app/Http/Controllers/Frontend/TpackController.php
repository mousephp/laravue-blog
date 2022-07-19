<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tpack;
use App\Http\Requests\TpackRequest;
use Illuminate\Support\Str;
use Log;
use Exception;

class TpackController extends Controller
{
    protected $tpack;

    public function __construct(Tpack $tpack)
    {
        $this->tpack = $tpack;
    }

    public function index()
    {
        $tpacks = $this->tpack->all();

        return response()->json([
            'tpacks'  => $tpacks,
            'success' => true,
        ], 200);
    }
}
