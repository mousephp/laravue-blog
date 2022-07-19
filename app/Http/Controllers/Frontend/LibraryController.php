<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Library;
use App\Http\Requests\LibraryRequest;
use Illuminate\Support\Str;
use Log;
use Exception;
use DB;

class LibraryController extends Controller
{
    protected $library;

    public function __construct(Library $library)
    {
        $this->library = $library;
    }
    
    public function imagePaginate(){
        $image = $this->library->where('library_type_id', '1')->orderBy('id', 'desc')->paginate(8);

        return response()->json($image);
    }

    public function videoPaginate(){
        $video = $this->library->where('library_type_id', '2')->orderBy('id', 'desc')->paginate(10);

        return response()->json($video);
    }

    public function documentPaginate(){
        $document = $this->library->where('library_type_id', '3')->orderBy('id', 'desc')->paginate(10); 

        return response()->json($document);
    }

}
