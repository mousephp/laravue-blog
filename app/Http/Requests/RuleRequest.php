<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RuleRequest extends FormRequest
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
            'title' => 'required|unique:rules,title|min:3|max:120',
        ];
    }
 
    public function updateRules(): array
    {
        return [
            'title' => 'required|min:3|max:120|unique:rules,title,'.$this->rule.',id',
        ];
    }
}
