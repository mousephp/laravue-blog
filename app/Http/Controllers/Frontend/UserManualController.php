<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserManual;

class UserManualController extends Controller
{
    protected $userManual;

    public function __construct(UserManual $userManual)
    {
        $this->userManual = $userManual;
    }

    function show($id){
    	$usermanual = $this->userManual->findOrFail($id);

    	return response()->json($usermanual, 200);
    }

    function getList(){
        $usermanual = $this->userManual->all();

        return response()->json($usermanual, 200);
    }

}
