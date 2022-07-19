<?php 

namespace App\Repositories\Eloquents;
use Illuminate\Database\Eloquent\Model; 
use Auth;

class EloquentRepository 
{
	protected $model;
  
    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function all(){
        return $this->model->all();
    }

    public function create($attributes){
        return $this->model->create($attributes);
    }

    public function find($id){
        $result = $this->model->findOrFail($id); //return $this->model->where('id', $id)->first();
       
        return $result;
    }

    public function update($id, $request){
        $result = $this->model->findOrFail($id);

        if($result){
            $result->update($attributes);
            return $result;
        }

        return false;
    }

    public function delete($id){
        $result = $this->model->findOrFail($id);

        if($result){
            $result->delete($id);
            return true;
        }

        return false;
    }

}




