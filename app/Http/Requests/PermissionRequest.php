<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PermissionRequest extends FormRequest
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
            'group'       => 'nullable|string',
            'status'      => 'required',
            'description' => 'required',
        ]
        +
        ($this->isMethod('POST') ? $this->createRules() : $this->updateRules());
    }

    public function createRules(): array
    {
        return [
            'name' => 'required|unique:permissions,name',
        ];
    }
 
    public function updateRules(): array
    {
        return [
            'name' => 'required|unique:permissions,name'.$this->permission.',id',
        ];
    }
}
