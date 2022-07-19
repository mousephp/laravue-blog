<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\About;

class AboutController extends Controller
{
    protected $about;

    public function __construct(About $about)
    {
        $this->about = $about;
    }

    function index()
    {
    	$abouts = $this->about->first();

        return response()->json([
            'abouts'  => $abouts,
            'success' => true,
        ], 200);
    }
}
