<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLikeNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('like_news', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger("new_id");
            $table->foreign('new_id')->references('id')->on('news');

            $table->unsignedBigInteger("user_id");
            $table->foreign('user_id')->references('id')->on('users');
            
            $table->boolean('is_liked')->default(false);

            $table->timestamps();
            $table->softDeletes();          
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('like_news');
    }
}
