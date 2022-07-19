<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\{ Setting, Link, User, News, Discussion };
use Log;
use Exception;
use DB;

class HomeController extends Controller
{
    protected $user;
    protected $setting;
    protected $link;
    protected $news;
    protected $discussion;

    public function __construct(User $user, Setting $setting, Link $link, News $news, Discussion $discussion)
    {
        $this->discussion = $discussion;
        $this->setting    = $setting;
        $this->link       = $link;
        $this->news       = $news;
        $this->user       = $user;
    }
    
    public function index()
    {
        $countNews = $this->news->countPosts();
        $countMembers = $this->user->countMembers();
        $countDiscussions = $this->discussion->countDiscussions();

        return response()->json([
            'countNews' => $countNews,
            'countMembers' => $countMembers,
            'countDiscussions' => $countDiscussions
        ], 200);
    }

    public function chart()
    {
        $discussions = Discussion::where('status','=','active')->orderBy('created_at', 'ASC')->get();

        return response()->json($discussions, 200);
    }


}
