<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\About;

class AboutController extends Controller
{
    protected $about;

    public function __construct(About $about)
    {
        $this->about = $about;
    }

    function index()
    {
    	$abouts = $this->about->all()->first();

        return response()->json([
            'abouts'  => $abouts,
            'success' => true,
        ], 200);
    }

    function update(Request $request, $id)
    {
    	try {
            $about = $this->about->findOrFail($id)->update($request->all());

            return response()->json([
                'about'   => $about,
                'success' => true,
                'message' => $about ? 'Cập nhật dữ liệu thành công' : "Cập nhật dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }
}
