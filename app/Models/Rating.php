<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\{ Discussion, User };

class Rating extends Model
{
    protected $table = 'ratings';

    protected $fillable = [
        'discussion_id', 'user_id', 'rating'
    ];

    protected $dates    = ['deleted_at'];

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function discussion(){
        return $this->belongsTo(Discussion::class, 'discussion_id');
    }
}
