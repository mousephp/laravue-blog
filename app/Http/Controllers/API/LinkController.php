<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Link;
use App\Http\Requests\LinkRequest;
use Illuminate\Support\Str;
use Log;
use Exception;
use App\Models\Tag;

class LinkController extends Controller
{
    protected $link;

    public function __construct(Link $link)
    {
        $this->link = $link;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $links = $this->link->all();

        return response()->json([
            'links'   => $links,
            'success' => true,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $link = $this->link->create($request->all());

            return response()->json([
                'link'    => $link,
                'success' => true,
                'message' => $link ? 'Thêm dữ liệu thành công' : "Thêm dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Link  $link
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Link  $link
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $link = $this->link->findOrFail($id)->update($request->all());

            return response()->json([
                'link'     => $link,
                'success'  => true,
                'message'  => $link ? 'Cập nhật dữ liệu thành công' : "Cập nhật dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Link  $link
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $link = $this->link->findOrFail($id)->delete();

            return response()->json([
                'success' => true,
                'message' => $link ? 'Xóa dữ liệu thành công' : "Xóa dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }
}
