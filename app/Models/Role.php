<?php

namespace App\Models;

use App\Models\User;
use App\Models\Permission;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Role extends Model
{
	use SoftDeletes;

    protected $table = 'roles';

    protected $dates = ['deleted_at'];

    protected $fillable = ['name', 'description', 'status'];

    public function user() {
        return $this->belongsTo(User::class);
    }

    protected $hidden = ['pivot', 'created_at', 'updated_at'];

    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }
}
