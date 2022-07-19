<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CommentDiscussion;
use App\Http\Requests\CommentDiscussionRequest;
use Illuminate\Support\Str;
use Log;
use Exception;

class CommentDiscussionController extends Controller
{
    protected $comment;

    public function __construct(CommentDiscussion $comment)
    {
        $this->comment = $comment;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $comments = $this->comment->all();

        return response()->json([
            'comments' => $comments,
            'success'  => true,
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CommentDiscussion  $commentDiscussion
     * @return \Illuminate\Http\Response
     */
    public function show(CommentDiscussion $commentDiscussion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CommentDiscussion  $commentDiscussion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CommentDiscussion $commentDiscussion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CommentDiscussion  $commentDiscussion
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $comment = $this->comment->findOrFail($id)->delete();

            return response()->json([
                'success'  => true,
                'message'  => $comment ? 'Xóa dữ liệu thành công' : "Xóa dữ liệu thất bại",
            ], 200);
        } catch (\Exception $exception) {
            Log::error('Error(loi): ' . $exception->getMessage() . ' --- Line : ' . $exception->getLine());
        }
    }
}
