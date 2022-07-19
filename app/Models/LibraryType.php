<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class LibraryType extends Model
{
    use SoftDeletes;

    protected $table    = 'library_types';
    protected $fillable = [
        'name', 'slug', 'status'
    ];

    protected $dates = ['deleted_at'];

}
