<?php

namespace App\Http\Controllers\Acl;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\Permission;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Log;
use Exception;

class PermissionController extends Controller
{
    public function index(Request $request) {
        $permissions = Permission::with('roles')->orderBy('id', 'desc')->get();

        if ($request->user()->can('Permissions-all')) {
            return response()->Json([
                'success' => true,
                'data' => $permissions,
            ], 200);
        }
    
        return response([
            'success' => false,
            'message' => 'You don\'t have permission to create task!' 
        ], 200);     
    }

    public function show($id) {       
        $permission = Permission::with('roles')->findOrFail($id);

        return response()->Json([
            'success' => true,
            'data' => $permission,            
        ], 200);
    }

    public function store(Request $request) {
        if(Auth::user()->cannot('permission.create')) {
            return response()->json([
                'success' => false,
                'message' => 'You are not authorized to create new permission',
            ]);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:permissions,name',
            'group' => 'nullable|string',
            'status' => 'required',
            'description' => 'required',
        ]);

        try {
            $newPermission = Permission::create($request->all());

            return response()->Json([
                'success' => true,
                'message' => 'New Permission Created Successfully',
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    public function update(Request $request, $id) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:permissions,name',
            'group' => 'nullable|string',
            'status' => 'required',
            'description' => 'required',
        ]);

        try {
            $permission = Permission::findOrFail($id)->update($request->all());

            return response()->Json([
                'success' => true,
                'message' => 'The Permission Has Been Updated Successfully',
            ], 200);         
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    public function destroy($id) {
        if(Auth::user()->cannot('permission.delete')) {
            return response()->json([
                'success' => false,
                'message' => 'You don\'t have permission to delete task!' 
            ]);
        }

        try {
            $permission = Permission::findOrfail($id)->delete();

            return response()->Json([
                'success' => true,
                'message' => $permission->name . ' Deleted Successfully',
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }
}
