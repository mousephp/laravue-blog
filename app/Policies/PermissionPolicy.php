<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Permission;
use Illuminate\Auth\Access\HandlesAuthorization;

class PermissionPolicy
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
            if($perm->name == 'Permissions-all') {
                return true;
            }
        }

        return false;     
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Permission  $permission
     * @return mixed
     */
    public function view(User $user, Permission $permission)
    {
        $perms = $user->role->permissions->all();

        foreach($perms as $perm) {
            if($perm->name == 'Permissions-view') {
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
            if($perm->name == 'Permissions-create') {
                return true;
            }
        }

        return false; 
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Permission  $permission
     * @return mixed
     */
    public function update(User $user, Permission $permission)
    {
        $perms = $user->role->permissions->all();

        foreach($perms as $perm) {
            if($perm->name == 'Permissions-edit') {
                return true;
            }
        }

        return false;      
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Permission  $permission
     * @return mixed
     */
    public function delete(User $user, Permission $permission)
    {
        $perms = $user->role->permissions->all();

        foreach($perms as $perm) {
            if($perm->name == 'Permissions-delete') {
                return true;
            }
        }

        return false;      
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Permission  $permission
     * @return mixed
     */
    public function restore(User $user, Permission $permission)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Permission  $permission
     * @return mixed
     */
    public function forceDelete(User $user, Permission $permission)
    {
        //
    }
}
