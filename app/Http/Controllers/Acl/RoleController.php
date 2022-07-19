<?php

namespace App\Http\Controllers\Acl;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\Permission;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use DB;
use Log;
use Exception;

class RoleController extends Controller
{
    public function index(Request $request) 
    {
        $user = auth()->user();

        if (!$user || $user->cannot('role.access')) {
            return response()->json([
                'success' => false,
                'response' => 'You are unauthorized to access this resource'
            ]);
        }

        $roles = Role::with('permissions')->orderBy('id', 'asc')->get();

        return response()->Json([
            'success' => true,
            'data' => $roles,
        ], 200);
    }

    public function permissionRoles(Request $request) {
        $permissions = Permission::all()->groupBy('group');

        $arr = [];

        foreach ($permissions as $key => $value) {
            if (count($value) <= 1) {
                $arr[] = [
                    "id" => $value->first()->id,
                    "name" => $value->first()->name,
                    "description" => $value->first()->description
                ];
            } else {
                $arr[] = [
                    "id" => $key,
                    "name" => $key,
                    "description" => "Toàn quyền",
                    "children" => $value
                ];
            }
        }

        return response()->json(["permissions" => $arr, 'success' => true], 200);
    }


    public function show($id) {
        if(Auth::user()->cannot('role.view')) {  
            return response()->json([
                'success' => false,
                'message' => 'You do not have access to view role details'
            ]);
        }

        $role = Role::with('permissions')->findOrfail($id);

        return response()->Json([
            'success' => true,
            'data' => $role,            
        ], 200);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:roles,name',
            'description' => 'nullable|string',
            'status' => 'required',
        ]);

        try {
            $role = Role::create($request->all());

            $role->permissions()->attach($request->permission);

            return response()->Json([
                'success' => true,
                'message' => 'New Role Created Successfully',
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }

    }


    public function update(Request $request, $id) {
        if(Auth::user()->cannot('role.update')) {
            return response()->json([
                'success' => false,
                'message' => 'You are not authorized to Edit role',
            ]);
        }
        
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:roles,name',
            'description' => 'nullable|string',
            'status' => 'required',
        ]);

        $permIds = $request->data['permIds'];

         try {
            DB::beginTransaction();

            $role = Role::findOrFail($id);

            $role->permissions()->attach($permIds);
            // $role->permissions()->sync($request->permission);   

            return response()->Json([
                'success' => true,
                'message' => ['Permission has been ' . $request->data['type'] . ' Successfully'],
            ], 200);
        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    public function destroy($id) {
        if(Auth::user()->cannot('delete')) {
            return response()->json([
                'success' => false,
                'message' => 'You do not have permission to delete role',
            ]);
        }

        try {
            $role = Role::findOrfail($id)->delete();

            return response()->Json([
                'success' => true,
                'message' => $role->name . ' Deleted Successfully',
            ], 200);      
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }
}
