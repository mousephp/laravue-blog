<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;
use App\Http\Requests\ContactRequest;
use Illuminate\Support\Str;
use Log;
use Exception;

class ContactController extends Controller
{
    protected $contact;

    public function __construct(Contact $contact)
    {
        $this->contact = $contact;
    }

    public function index()
    {
        $contacts = $this->contact->all();

        return response()->json([
            'contacts' => $contacts,
            'success'  => true,
        ], 200);
    }

    function store(ContactRequest $request){
    	$status = $this->contact->create($request->all());

        return response()->json([
    		'status'  => $status,
    		'message' => $status ? 'Bạn đã gửi phản hồi thành công' : "Gửi phản hồi thất bại"
    	], true);
    }


}
