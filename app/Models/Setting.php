<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Setting extends Model
{  
    use SoftDeletes;

    protected $table    = 'settings';
    protected $fillable = [
        'header', 'header_animation', 'header_content', 'email', 'address', 'phone', 'fax', 'facebook', 'twitter', 'linkedin', 'youtube', 'video_youtube_intro', 'link_serve_nodejs', 'status'
    ];

    protected $dates = ['deleted_at'];
    
}
