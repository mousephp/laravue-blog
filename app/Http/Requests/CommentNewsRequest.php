<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CommentNewsRequest extends FormRequest
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
        if ($this->isMethod('post')) {
            return $this->createRules();
        } elseif ($this->isMethod('put')) {
            return $this->updateRules();
        }
    }
 
    public function createRules(): array
    {
        return [
            'status'  => 'required|in:active,inactive',
            'message' => 'required|min:2|max:200',
            'news_id' => 'required',
            'user_id' => 'required',
        ];
    }
 
    public function updateRules(): array
    {
        return [
            'status'  => 'required|in:active,inactive',
            'message' => 'required|min:2|max:200',
            'news_id' => 'required',
            'user_id' => 'required',
        ];
    }
}
