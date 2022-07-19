<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Http\Requests\BaseRequest;

class DiscussionRequest extends BaseRequest
{
    // public $tableName = '';
    
    // public $tableTitle = 'discussions';

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
        return array_merge(parent::rules(), [
            'content'            => 'required',
            // 'user_id'            => 'required',
            'discussion_type_id' => 'required',
        ])
        +
        ($this->isMethod('POST') ? $this->createRules() : $this->updateRules());
        // ($this->isMethod('POST') ? $this->createRules($this->tableName, $this->tableTitle) : $this->updateRules($this->tableName, $this->tableTitle));
    }
 
    public function createRules(): array
    {
        return [
            'title' => 'required|unique:discussions,title|min:3|max:100',
        ];
    }
 
    public function updateRules(): array
    {
        return [
            'title' => 'required|min:3|max:100|unique:discussions,title,'.$this->discussion.',id',
        ];
    }
}
