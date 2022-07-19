<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NewsRequest extends FormRequest
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
            'status'      => 'required|in:active,inactive',
            'quote'       => 'required|min:3|max:200',
            'content'     => 'required',
            'is_featured' => 'required',
            // 'tag_id'      => 'required',
            'user_id'     => 'required|exists:users,id',
            'cate_id'     => 'required|exists:categories,id',
        ]
        +
        ($this->isMethod('POST') ? $this->createRules() : $this->updateRules());
    }
 
    public function createRules(): array
    {
        return [
            'title' => 'required|unique:news,title|min:3|max:120',
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ];
    }
 
    public function updateRules(): array
    {
        return [
            'title' => 'required|min:3|max:120|unique:news,title,'.$this->news.',id',
            // 'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'photo' => 'required',
        ];
    }
}
