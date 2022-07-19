<?php 

namespace App\Repositories\Contracts;
use App\Repositories\Contracts\RepositoryInterface;

interface LikeRepositoryInterface 
{
    public function handleLike(array $attributes);

    public function handleDislike(array $attributes);

}



