<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Rating;
use App\Http\Resources\RatingResource;

class RatingController extends Controller
{
    public function setRating(Request $request)
    {
        $starDiscussion = Rating::where('discussion_id', $request->discussion)->first();

        $starUser = Rating::where('user_id', $request->user)->first();

        $rating = '';

        if($starUser && $starDiscussion){
            $rating = $starUser->update(['rating' => $request->rating]);
        }

        if((!$starUser && !$starDiscussion) || ($starUser && !$starDiscussion)){
            $rating = Rating::create([
                'discussion_id' => $request->discussion,
                'user_id' => $request->user,
                'rating' => $request->rating
            ]);
        }

        return response()->json([
            'rating'   => $rating,
            'success'  => true,
            'message'  => $rating ? 'Thêm dữ liệu thành công' : "Thêm dữ liệu thất bại",
        ], 200);
    }

    public function getRating($id)
    {
        return RatingResource::collection(Rating::all()->where('discussion_id', $id));
    }
}
