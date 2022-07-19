<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DiscussionType;
use App\Http\Requests\DiscussionTypeRequest;
use Illuminate\Support\Str;
use Log;
use Exception;

class DiscussionTypeController extends Controller
{
    protected $discussionType;

    public function __construct(DiscussionType $discussionType)
    {
        $this->discussionType = $discussionType;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $discussionTypes = $this->discussionType->all();

        return response()->json([
            'discussionTypes' => $discussionTypes,
            'success'         => true,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DiscussionTypeRequest $request)
    {
        try {
            $discussionType = $this->discussionType->create($request->all());

            return response()->json([
                'discussionType' => $discussionType,
                'success'        => true,
                'message'        => $discussionType ? 'Thêm dữ liệu thành công' : "Thêm dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\DiscussionType  $discussionType
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $discussionType = $this->discussionType->findOrFail($id);

        return response()->json($discussionType, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\DiscussionType  $discussionType
     * @return \Illuminate\Http\Response
     */
    public function update(DiscussionTypeRequest $request, $id)
    {
        try {
            $discussionType = $this->discussionType->findOrFail($id)->update($request->all());

            return response()->json([
                'discussionType' => $discussionType,
                'success'        => true,
                'message'        => $discussionType ? 'Cập nhật dữ liệu thành công' : "Cập nhật dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\DiscussionType  $discussionType
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $discussionType = $this->discussionType->findOrFail($id)->delete();

            return response()->json([
                'success'  => true,
                'message'  => $discussionType ? 'Xóa dữ liệu thành công' : "Xóa dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }
}
