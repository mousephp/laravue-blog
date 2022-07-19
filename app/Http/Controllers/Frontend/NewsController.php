<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{ News, Tag, Category };

class NewsController extends Controller
{
    protected $news;
    protected $category;
    protected $tag;

    public function __construct(News $news, Category $category, Tag $tag)
    {        
        $this->category = $category;
        $this->news     = $news;
        $this->tag      = $tag;
    }

    //mỗi lần truy cập vào 1 news sẽ tăng view lên 1+
    function incrementView($id){
        $news       = $this->news->findOrFail($id);
        $news->view = $news->view + 1;

        $status = $news->save();

        return response()->json([
            'status'  => $status,
            'message' => $status ? '++View' : "--View",
            'news'    => $news
        ]);
    }

    function showCategories(){
        $categories = $this->category->all();
        
        return $categories;
    }
   
    function showTags(){
        $tags = $this->tag->all();
         
        return $tags;
    }
   
    function showNewsWithId($id){
        $news = $this->news->with(['category', 'user'])->where('status', 'active')->where('id', $id)->first(); 

        return response()->json([
            'categories' => $this->showCategories(),
            'tags'       => $this->showTags(),
            'news'       => $news
        ], 200);
    }

    //BÀI VIẾT XEM NHIỀU
    function mostView(){ 
        $news = $this->news->with('user')->where('status', 'active')->orderBy('view', 'desc')->take(6)->get();

        return response()->json($news, 200);
    }

    function getNewsFeature(){
        $news = $this->news->with('user')->where('status', 'active')->where('is_featured', true)
            ->orderBy('news.id', 'desc')
            ->take(6)
            ->get();

        return response()->json($news, 200);
    }

    //BÀI VIẾT MỚI NHẤT
    function new(){
        $blognew = $this->news->with('user')->where('status', 'active')->orderBy('id', 'desc')->take(3)->get();

        return response()->json($blognew, 200);
    }

    function getNewsPaginate(){
        $news = $this->news->with('user')->where('status', 'active')->orderBy('id', 'desc')->paginate(6);

    	return response()->json($news, 200);
	}

}
