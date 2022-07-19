<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Rule;
use App\Http\Requests\RuleRequest;
use Illuminate\Support\Str;
use Log;
use Exception;

class RuleController extends Controller
{
    protected $rule;

    public function __construct(Rule $rule)
    {
        $this->rule = $rule;
    }

       /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rules = $this->rule->all();

        return response()->json([
            'rules'   => $rules,
            'success' => true,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RuleRequest $request)
    {
        try {
            $rule = $this->rule->create($request->all());

            return response()->json([
                'rule'     => $rule,
                'success'  => true,
                'message'  => $rule ? 'Thêm dữ liệu thành công' : "Thêm dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Link  $rule
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $rule = $this->rule->findOrFail($id);

        return response()->json($rule, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Link  $rule
     * @return \Illuminate\Http\Response
     */
    public function update(RuleRequest $request, $id)
    {
        try {
            $rule = $this->rule->findOrFail($id)->update($request->all());

            return response()->json([
                'rule'    => $rule,
                'success' => true,
                'message' => $rule ? 'Cập nhật dữ liệu thành công' : "Cập nhật dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    public function changeStatus(Request $request)
    {
        try {
            $rule = $this->rule->findOrFail($request->id);

            if($rule){
                if($rule->status === 'active'){
                    $rule->update(['status' => 'inactive']);
                }else{
                    $rule->update(['status' => 'active']);
                }

                return response()->json($rule, 200);
            }

            return response()->json([
                'success' => false
            ], 404);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Link  $rule
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $rule = $this->rule->findOrFail($id)->delete();

            return response()->json([
                'success' => true,
                'message' => $rule ? 'Xóa dữ liệu thành công' : "Xóa dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }
}
