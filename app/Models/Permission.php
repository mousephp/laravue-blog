<?php

namespace App\Models;

use App\Models\Role;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Permission extends Model
{
	use SoftDeletes;

    protected $table = 'permissions';
    
    protected $dates = ['deleted_at'];

    protected $fillable = ['name', 'group', 'description', 'status'];

    protected $hidden = ['pivot'];

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    // public function roles() {
    //     return $this->belongsToMany(Role::class, 'permission_roles', 'permission_id', 'role_id')->orderBy('name', 'asc');
    // }
}
