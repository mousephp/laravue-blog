<?php

namespace App\Http\Controllers\ApiResponse;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class BaseAuthorization extends Controller
{
  
    public function __invoke($authorization)
    {
      if(Auth::user()->cannot($authorization)) {
        return response()->json([
            'success' => false,
            'message' => 'You do not have access to view permission details'
        ]);     
      }

      return response()->json([
        'success' => true,
        'message' => 'You have access to view permission details'
      ]);
    }

}
