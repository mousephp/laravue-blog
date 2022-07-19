<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Role;
use Illuminate\Auth\Access\HandlesAuthorization;

class RolePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        $perms = $user->role->permissions->all();

        foreach($perms as $perm) {
            if($perm->name == 'Roles-all') {
                return true;
            }
        }

        return false; 
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Role  $role
     * @return mixed
     */
    public function view(User $user, Role $role)
    {
        $perms = $user->role->permissions->all();

        foreach($perms as $perm) {
            if($perm->name == 'Roles-view') {
                return true;
            }
        }

        return false;   
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        $perms = $user->role->permissions->all();

        foreach($perms as $perm) {
            if($perm->name == 'Roles-create') {
                return true;
            }
        }

        return false;   
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Role  $role
     * @return mixed
     */
    public function update(User $user, Role $role)
    {
        $perms = $user->role->permissions->all();

        foreach($perms as $perm) {
            if($perm->name == 'Roles-edit') {
                return true;
            }
        }

        return false;  
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Role  $role
     * @return mixed
     */
    public function delete(User $user, Role $role)
    {
        $perms = $user->role->permissions->all();

        foreach($perms as $perm) {
            if($perm->name == 'Roles-delete') {
                return true;
            }
        }

        return false;    
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Role  $role
     * @return mixed
     */
    public function restore(User $user, Role $role)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Role  $role
     * @return mixed
     */
    public function forceDelete(User $user, Role $role)
    {
        //
    }

    public function edit_or_delete_super_admin(User $user, Role $role) 
    {
        if($role->name == 'Super Admin') {
            return false;
        }
        
        return true;
    }
}
