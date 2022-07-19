<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\LibraryType;
use App\Http\Requests\LibraryTypeRequest;
use Illuminate\Support\Str;
use Log;
use Exception;

class LibraryTypeController extends Controller
{
    protected $libraryType;

    public function __construct(LibraryType $libraryType)
    {
        $this->libraryType = $libraryType;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $libraryTypes = $this->libraryType->all();

        return response()->json([
            'libraryTypes' => $libraryTypes,
            'success'      => true,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LibraryTypeRequest $request)
    {
        try {
            $libraryType = $this->libraryType->create($request->all());

            return response()->json([
                'libraryType' => $libraryType,
                'success'     => true,
                'message'     => $libraryType ? 'Thêm dữ liệu thành công' : "Thêm dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\DiscussionType  $libraryType
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $libraryType = $this->libraryType->findOrFail($id);

        return response()->json($libraryType, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\DiscussionType  $libraryType
     * @return \Illuminate\Http\Response
     */
    public function update(LibraryTypeRequest $request, $id)
    {
        try {
            $libraryType         = $this->libraryType->findOrFail($id)->update($request->all());

            return response()->json([
                'libraryType' => $libraryType,
                'success'     => true,
                'message'     => $libraryType ? 'Cập nhật dữ liệu thành công' : "Cập nhật dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\DiscussionType  $libraryType
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $libraryType = $this->libraryType->findOrFail($id)->delete();

            return response()->json([
                'success'  => true,
                'message'  => $libraryType ? 'Xóa dữ liệu thành công' : "Xóa dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }
}