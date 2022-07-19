<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Notifications\ResetPasswordNotification;
use Illuminate\Support\Facades\Hash;
use App\Models\Discussion;
use App\Models\Role;
use App\Traits\HasPermissionsTrait;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    use HasPermissionsTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'is_admin'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    
    public function countMembers(){
        $counts = User::count();

        if($counts){
            return $counts;
        }

        return 0;
    }

    /**
     * Override the mail body for reset password notification mail.
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new \App\Notifications\MailResetPasswordNotification($token));
    }

    public function favorites()
    {
        return $this->belongsToMany(Discussion::class, 'like_discussions', 'user_id', 'discussion_id')->withTimeStamps();
    }

    public function role() {
        return $this->hasOne(Role::class, 'user_id');
    }

    public function permission() {
        return $this->roles()->with('permissions')->get();
    }
}
