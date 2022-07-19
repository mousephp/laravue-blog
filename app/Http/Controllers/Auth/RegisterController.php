<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Log;
use Exception;

class RegisterController extends Controller
{
    public function createAccount(Request $request)
    {
        $attr = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|min:5|confirmed'
        ]);

        try {   
            $user = User::create([
                'name' => $attr['name'],
                'email' => $attr['email'],
                'password' => bcrypt($attr['password']),
            ]);

            // return $this->success([
            //     'token' => $user->createToken('tokens')->plainTextToken
            // ]);

            $token = $user->createToken('tokens')->plainTextToken;

            return response()->json([
                'status_code' => 200,
                'access_token' => $token,
                'token_type' => 'Bearer',
            ]);

        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }
}
