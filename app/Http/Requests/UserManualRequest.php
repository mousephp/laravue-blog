<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserManualRequest extends FormRequest
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
            'status'  => 'required|in:active,inactive',
            'content' => 'required',
        ]
        +
        ($this->isMethod('POST') ? $this->createRules() : $this->updateRules());
    }
 
    public function createRules(): array
    {
        return [
            'title' => 'required|unique:user_manuals,title|min:3|max:120',
        ];
    }
 
    public function updateRules(): array
    {
        return [
            'title' => 'required|min:3|max:120|unique:user_manuals,title,'.$this->user_manual.',id',
        ];
    }
}
