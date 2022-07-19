<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use App\Models\{ User, LibraryType };

class Library extends Model
{
    use SoftDeletes;

    protected $table    = 'libraries';
    protected $fillable = [
        'library_type_id', 'title', 'slug', 'file_name', 'user_id', 'status'
    ];

    protected $dates = ['deleted_at'];

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function libraryType() {
        return $this->belongsTo(LibraryType::class, 'library_type_id');
    }
}
