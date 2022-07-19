<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\NewsRequest;
use App\Models\{ Link, User, News };
use Auth;
use DB;
use Log;
use Exception;
use Storage;
use App\Traits\StorageImageTrait;
use File;
use App\Http\Controllers\ApiResponse\BaseController as BaseController;
use App\Http\Resources\NewsResource;
// use App\Http\Resources\NewsCollection as NewsCollection;
   
class NewsController extends BaseController
{
    use StorageImageTrait;

    protected $news;

    public function __construct(News $news)
    {
        $this->news = $news;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $news = $this->news->with(['category','tags','user'])->get();
   
        return response()->json([
            'news'    => $news,
            'success' => true,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(NewsRequest $request)
    {   
        try {
            DB::beginTransaction();          
            
            $dataUploadFeatureImage = $this->storageTraitUpload($request, 'photo', 'news');
            if (!empty($dataUploadFeatureImage)) {
                $photo_name = $dataUploadFeatureImage['file_name'];
                $photo      = $dataUploadFeatureImage['file_path'];
            }

            $news = $this->news->create(
                array_merge(
                    $request->validated(),
                    [
                        "photo_name" => $photo_name,
                        "photo" => $photo,
                    ]
                )
            );

            $news->tags()->attach($request->tags);
            
            DB::commit();
            return response()->json([
                'news'     => $news,
                'success'  => true,
                'message'  => $news ? 'Thêm dữ liệu thành công' : "Thêm dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\New  $new
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $news = $this->news->findOrFail($id);

        return response()->json($news, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\New  $new
     * @return \Illuminate\Http\Response
     */
    public function update(NewsRequest $request, $id)
    {
        try {
            DB::beginTransaction();   

            $data = $request->all();

            $news = $this->news->findOrFail($id); 

            $dataUploadFeatureImage = $this->storageTraitUpload($request, 'photo', 'news');

            if (!empty($dataUploadFeatureImage)) {
                //remove image
                $imagePath = public_path($this->news->findOrFail($id)->photo);
                if(File::exists($imagePath)){
                    unlink($imagePath);
                }
                
                $photo_name = $dataUploadFeatureImage['file_name'];
                $photo      = $dataUploadFeatureImage['file_path'];

                $data = array_merge(
                    $request->all(),
                    [
                        "photo_name" => $photo_name,
                        "photo" => $photo,
                    ]
                );
            }
       
            $news->update($data);

            // $news->tags()->sync($request->tags);

            DB::commit();
            return response()->json([
                'news'     => $news,
                'success'  => true,
                'message'  => $news ? 'Cập nhật dữ liệu thành công' : "Cập nhật dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\New  $new
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $news = $this->news->findOrFail($id)->delete();

            if (is_null($news)) {
                return $this->sendError('News not found.');
            }

            return $this->sendResponse([], 'News deleted successfully.');
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }
}
