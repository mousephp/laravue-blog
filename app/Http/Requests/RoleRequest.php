<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RoleRequest extends FormRequest
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
            'description' => 'nullable|string',
            'status' => 'required',
        ]
        +
        ($this->isMethod('POST') ? $this->createRules() : $this->updateRules());
    }

    public function createRules(): array
    {
        return [
            'name' => 'required|unique:roles,name',
        ];
    }
 
    public function updateRules(): array
    {
        return [
            'name' => 'required|unique:roles,name'.$this->role.',id',
        ];
    }
}
