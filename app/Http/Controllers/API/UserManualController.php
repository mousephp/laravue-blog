<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UserManual;
use Illuminate\Http\Request;
use App\Http\Requests\UserManualRequest;
use Illuminate\Support\Str;
use Log;
use Exception;

class UserManualController extends Controller
{
    protected $userManual;

    public function __construct(UserManual $userManual)
    {
        $this->userManual = $userManual;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $userManuals = $this->userManual->all();

        return response()->json($userManuals, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserManualRequest $request)
    {
        try {
            $userManual = $this->userManual->create($request->all());

            return response()->json([
                'userManual' => $userManual,
                'success'    => true,
                'message'    => $userManual ? 'Thêm dữ liệu thành công' : "Thêm dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Link  $userManual
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $userManual = $this->userManual->findOrFail($id);

        return response()->json([
            'success'    => true,
            'userManual' => $userManual
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Link  $userManual
     * @return \Illuminate\Http\Response
     */
    public function update(UserManualRequest $request, $id)
    {
        try {
            $userManual = $this->userManual->findOrFail($id)->update($request->all());
           
            return response()->json([
                'userManual' => $userManual,
                'success'    => true,
                'message'    => $userManual ? 'Cập nhật dữ liệu thành công' : "Cập nhật dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Link  $userManual
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $userManual = $this->userManual->findOrFail($id)->delete();

            return response()->json([
                'success'  => true,
                'message'  => $userManual ? 'Xóa dữ liệu thành công' : "Xóa dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }
}
