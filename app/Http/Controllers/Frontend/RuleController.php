<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{ Rule, UserManual };

class RuleController extends Controller
{
    protected $rule;
    protected $userManual;

    public function __construct(Rule $rule, UserManual $userManual)
    {
        $this->rule       = $rule;
        $this->userManual = $userManual;
    }

    function index(){
    	$rule       = $this->rule->all();
    	$usermanual = $this->userManual->all();

    	return response()->json([
    		'rule'       => $rule,
    		'usermanual' => $usermanual
    	], 200);
    }

    function show($slug){
    	$rule = $this->rule->where('slug',$slug)->first();

    	return response()->json($rule, 200);
    }

    function getList(){
        $rule = $this->rule->all();

        return response()->json($rule, 200);
    }

}
