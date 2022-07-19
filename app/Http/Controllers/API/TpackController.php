<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tpack;
use App\Http\Requests\TpackRequest;
use Illuminate\Support\Str;
use Log;
use Exception;

class TpackController extends Controller
{
    protected $tpack;

    public function __construct(Tpack $tpack)
    {
        $this->tpack = $tpack;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tpacks = $this->tpack->all();

        return response()->json([
            'tpacks'  => $tpacks,
            'success' => true,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TpackRequest $request)
    {
        try {
            $tpack = $this->tpack->create($request->all());

            return response()->json([
                'tpack'   => $tpack,
                'success' => true,
                'message' => $tpack ? 'Thêm dữ liệu thành công' : "Thêm dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Link  $tpack
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $tpack = $this->tpack->findOrFail($id);

        return response()->json(['tpack' => $tpack], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Link  $tpack
     * @return \Illuminate\Http\Response
     */
    public function update(TpackRequest $request, $id)
    {
        try {
            $tpack = $this->tpack->findOrFail($id)->update($request->all());
           
            return response()->json([
                'tpack'   => $tpack,
                'success' => true,
                'message' => $tpack ? 'Cập nhật dữ liệu thành công' : "Cập nhật dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Link  $tpack
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $tpack = $this->tpack->findOrFail($id)->delete();

            return response()->json([
                'success' => true,
                'message' => $tpack ? 'Xóa dữ liệu thành công' : "Xóa dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }
}
