<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Http\Requests\SetPasswordIdRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Log;
use Exception;

class AuthenticationController extends Controller
{
    public function changePassword(SetPasswordIdRequest $request){
        $data = $request->all(); 
        
        $user = Auth::user('api');

        if(\Hash::check($data['old_password'], $user->password))
        {
            $user = User::find(Auth::user('api')->id)->update(["password"=> bcrypt($request->new_password)]);

            $success['token'] =  Auth::user('api')->createToken('token')->accessToken;

            return response()->json(['success' => $success], 200);
        }
        
        return response()->json(['error'=>'Unauthorised'], 401);
    }


    // this method signs out users by removing tokens
    public function signout()
    {
        auth()->user()->tokens()->delete();

        return ['message' => 'Tokens Revoked', 200];
    }
    
    public function profile(Request $request)
    {
        return response()->json($request->user(), 200);
    }

    public function profileUser($id)
    {
        $user = User::where('id', $id)->first();

        return response()->json($user, 200);
    }


    public function refresh(Request $request)
    {
        $user = $request->user();

        $user->tokens()->delete();

        return response()->json(['access_token' => $user->createToken($user->name)->plainTextToken]);
    }
    

}
