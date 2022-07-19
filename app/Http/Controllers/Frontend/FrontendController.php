<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\{ Setting, Link, News, Discussion };
use Log;
use Exception;
use DB;
use Cache;

class FrontendController extends Controller
{
    protected $setting;
    protected $link;
    protected $news;
    protected $discussion;

    public function __construct(Setting $setting, Link $link, News $news, Discussion $discussion)
    {
        $this->discussion = $discussion;
        $this->setting    = $setting;
        $this->link       = $link;
        $this->news       = $news;
    }

    function newsSearch($keyword){
        $news = $this->news
            ->with('user')
            ->where('status', 'active')
            ->select('news.id', 'quote', 'title', 'content', 'photo', 'news.created_at', 'is_featured', 'news.view', 'news.like')
            ->where('title', 'like', '%' . $keyword . '%')
            ->orderBy('id', 'desc')
            ->get();
        
        return $news;
    }
    
    function discussionsSearch($keyword){
        $discussions = $this->discussion
            ->with('user')
            ->where('status', 'active')
            ->select('discussions.id', 'discussions.title', 'discussions.content', 'discussions.user_id', 'discussions.discussion_type_id', 'discussions.created_at', 'view', 'like')
            ->where('title', 'like', '%' . $keyword . '%')
            ->orderBy('id', 'desc')
            ->get();
        
        return $discussions;
    }
    
    // HomeController
    function search($keyword){
        $news        = $this->newsSearch($keyword);
        $discussions = $this->discussionsSearch($keyword);

        return response()->json([
            'news'        => $news,
            'discussions' => $discussions,
        ], 200);
    }

    function listInfo(){
        $value = Cache::get('settings');
        
        $settings = $this->setting->first();
        $links    = $this->link->get();

        return response()->json([
            'value' => $value,
            'settings' => $settings,
            'links' => $links
        ], 200);
    }

}






