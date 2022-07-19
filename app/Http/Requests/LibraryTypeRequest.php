<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LibraryTypeRequest extends FormRequest
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
        $id = request('id') ?: 'NULL';

        return [
            'name' =>'required|min:3|max:50|unique:library_types,name,'.$id
        ]
        +
        ($this->isMethod('POST') ? $this->createRules() : $this->updateRules());
    }
 
    public function createRules(): array
    {
        return [
            'status' => 'required|in:active,inactive',
        ];
    }
 
    public function updateRules(): array
    {
        return [
            'status' => 'required|in:active,inactive',
        ];
    }
}
