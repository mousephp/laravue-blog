<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LinkRequest extends FormRequest
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
            'links'  => 'required|unique:links,link',
            'status' => 'required|in:active,inactive',
        ]
        +
        ($this->isMethod('POST') ? $this->createRules() : $this->updateRules());
    }

    public function createRules(): array
    {
        return [
            'name' => 'required|unique:links,name|min:3|max:50',
        ];
    }
 
    public function updateRules(): array
    {
        return [
            'name' => 'required|min:3|max:50|unique:links,name'.$this->links.',id',
        ];
    }
}
