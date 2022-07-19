<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CommentDiscussionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            // 'status'        => 'required|in:active,inactive',
            'message'       => 'required|min:2|max:200',
            'discussion_id' => 'required',
            'user_id'       => 'required',
        ];
    }
}
