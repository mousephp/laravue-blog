<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Library;
use App\Http\Requests\LibraryRequest;
use Illuminate\Support\Str;
use Log;
use Exception;
use DB;
use Storage;
use App\Traits\StorageImageTrait;

class LibraryController extends Controller
{
    use StorageImageTrait;

    protected $library;

    public function __construct(Library $library)
    {
        $this->library = $library;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $libraries = $this->library->with(['libraryType', 'user'])->get();

        return response()->json([
            'libraries' => $libraries,
            'success'   => true,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeImage($request)
    {
        $file_library = $this->uploadOne($request->file_name, '/public/library/image_library');

        $url = Storage::url($file_library);

        return $url;
    }

    public function storeVideo($request)
    {
        return $request->file_name;
    }

    public function storeDocument($request)
    {
        $documentName = time().$request->file_name->getClientOriginalName();

        $request->file_name->move(public_path('/public/library/documents'), $documentName);

        return $documentName;
    }

    public function store(LibraryRequest $request)
    {
        try {
            DB::beginTransaction();

            if ($request->image) {
                $file = $this->storeImage($request);
            } else if ($request->document) {
                $file = $this->storeDocument($request);
            } else {
                $file = $this->storeVideo($request);
            }

            if(!$file){
                return response()->json(['success' => false], 422);
            }

            $library = $this->library->create(
                array_merge($request->validated(), ["file_name" => $file])
            );

            DB::commit();
            return response()->json([
                'library' => $library,
                'status' => true,
                'message' => $library ? 'Thêm dữ liệu thành công' : "Thêm dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Link  $library
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $library = $this->library->findOrFail($id);

        return response()->json(['library' => $library], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Link  $library
     * @return \Illuminate\Http\Response
     */
    public function updateDocument($request, $library)
    {
        // return response()->json(['status' => file_exists('public/public/library/documents/'.$library->file_name)], 200);
        if (file_exists('public/public/library/documents/'.$library->file_name)) {
            unlink('public/public/library/documents/'.$library->file_name);
        }

        $documentName = time().$request->file_name->getClientOriginalName();

        $request->file_name->move(public_path('/public/library/documents'), $documentName);

        return $documentName;
    }

    public function updateImage($request, $library)
    {
        if ($library->file_name) {
            Storage::delete(Str::replaceFirst("storage", "public", $library->file_name));               
        }

        $file_library = $this->uploadOne($request->file_name, '/public/library/image_library');

        $url = Storage::url($file_library);
        
        return $url;
    }
    
    public function update(LibraryRequest $request, $id)
    {
        try {
            DB::beginTransaction();

            $library = $this->library->findOrFail($id);

            $file = $library->file_name;

            if(!$library){
                return response()->json(['status' => false], 500);
            }

            if ($request->image == 'photo' && $request->file('file_name')){
                $file = $this->updateImage($request, $library);
            } 
            
            if ($request->document == 'document' && $request->file('file_name')) {
                $file = $this->updateDocument($request, $library);
            } 
            
            if($request->video){
                $file = $this->storeVideo($request);
            }
            
            $library->update(
                array_merge($request->all(), ["file_name" => $file])
            );

            DB::commit();
            return response()->json([
                'library' => $library,
                'status' => true,
                'message' => $library ? 'Thêm dữ liệu thành công' : "Thêm dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Link  $library
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $library = $this->library->findOrFail($id)->delete();

            return response()->json([
                'success' => true,
                'message' => $library ? 'Xóa dữ liệu thành công' : "Xóa dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }
}
