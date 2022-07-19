<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{
    protected $user;
    
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function myFavorites()
    {
        $myFavorites = Auth::user()->favorites();

        return response()->json([
            'myFavorites' => $myFavorites,
            'status' => true
        ],200);
    }
}
