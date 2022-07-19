<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Log;
use Exception;

class LoginController extends Controller
{
    public function signin(Request $request)
    {
        $attr = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:5',
            // 'device_name' => 'required'
        ]);
        try {    
            if (!Auth::attempt($attr)) {
                return response()->json([
                    'status' => 'fails',
                    'message' => 'Unauthorized'
                ], 401);
            }

            $token = auth()->user()->createToken('token')->plainTextToken;

            return response()->json([
                'user' => Auth::user(),
                'status_code' => 200,
                'access_token' => $token,
                'token_type' => 'Bearer',
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }
}
