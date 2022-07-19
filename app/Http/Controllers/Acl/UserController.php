<?php

namespace App\Http\Controllers\Acl;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Http\Requests\SetPasswordIdRequest;
use Illuminate\Support\Facades\Gate;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Log;
use Exception;
use DB;
use Hash;

class UserController extends Controller
{
    protected $user;
    
    public function __construct(User $user)
    {
        $this->user = $user;
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(auth()->user()->cannot('user.access')){
            return response()->json([
                'success' => false,
                'message' => 'You are unauthorized to access this resource'
            ], 200);
        }

        return response()->json([
            'success' => true, 
            'data' => $this->user->all()
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request, User $user)
    {
        try {
            $status = $user->create($request->all());

            return response()->json($status, 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if(Auth::user()->cannot('user.show')){
            return response()->json([
                'success' => false,
                'message' => 'You are not authorized to create new role',
            ]);
        }

        $user = $this->user->findOrFail($id);

        return response()->json([
            'success' => true, 
            'data' => $user
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, $id)
    {
        if(Auth::user()->cannot('user.update')){
            return response()->json([
                'success' => false,
                'message' => 'You are not authorized to create new role',
            ]);
        }

        try {
            $status = $this->user->update($request->all());

            return response()->json($status, 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --Line : ' . $exception->getLine());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(Auth::user()->cannot('user.delete')){
            return response()->json([
                'success' => false,
                'message' => 'You are not authorized to create new role',
            ]);
        }

        try {
            $user = $this->user->findOrFail($id)->delete();

            return response()->json([
                'success'   => true,
                'message'  => $user ? 'Xóa dữ liệu thành công' : "Xóa dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }
}
