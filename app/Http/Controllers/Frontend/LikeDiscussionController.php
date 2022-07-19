<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Discussion;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Log;
use Exception;
use DB;
use Hash;

class LikeDiscussionController extends Controller
{
    protected $user;
    
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function favoriteDiscussion(Discussion $discussion)
    {
        $favorite = Auth::user()->favorites()->attach($discussion->id);

        return response()->json(['data' => $favorite], 200);
    }

    public function unFavoriteDiscussion(Discussion $discussion)
    {
        $favorite = Auth::user()->favorites()->detach($discussion->id);

        return response()->json(['data' => $favorite], 200);
    }
}
