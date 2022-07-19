<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\CommentDiscussionRequest;
use App\Models\CommentDiscussion;
use App\Models\Discussion;
use App\Models\User;
use App\Events\CommentEvent;
use Auth;

class CommentDiscussionController extends Controller
{
    protected $comment;

    public function __construct(CommentDiscussion $comment)
    {
        $this->comment = $comment;
    }
    
    public function fetchComments($id)
    {
        $comments = $this->comment->where('discussion_id', $id)->get();

        return response()->json($comments, 200);
    }
   
    public function fetch($id)
    {
        $comment = $this->comment->where('discussion_id', $id)->get();

        return response()->json($comment, 200);
    }

    public function store(Request $request)
    {
        $createComment = [
            'message'       => $request->message,
            'discussion_id' => $request->discussion_id,
            'user_id'       => $request->author,
        ];

        $comment = $this->comment->create($createComment);

        event(new CommentEvent($comment));

        return response()->json('ok');
    }
}
