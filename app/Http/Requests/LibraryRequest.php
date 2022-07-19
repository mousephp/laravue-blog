<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LibraryRequest extends FormRequest
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
            'status'          => 'required|in:active,inactive',
            'user_id'         => 'required',
            'library_type_id' => 'required',
        ]
        +
        ($this->isMethod('POST') ? $this->createRules() : $this->updateRules());
    }
 
    public function createRules(): array
    {
        return [
            'title'     => 'required|min:3|max:100|unique:libraries,title',
            'file_name' => 'required',
        ];
    }
 
    public function updateRules(): array
    {
        return [
            'title'     => 'required|min:3|max:100|unique:libraries,title,'.$this->library.',id',
            'file_name' => 'required',
        ];
    }
}
