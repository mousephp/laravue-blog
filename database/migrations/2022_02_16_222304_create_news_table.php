<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('quote');
            $table->longText('content');
            $table->string('photo')->nullable();
            $table->string('photo_name')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->bigInteger('view')->unsigned()->default(0);
            $table->bigInteger('like')->unsigned()->default(0);

            $table->unsignedBigInteger("tag_ig");
            $table->foreign('tag_ig')->references('id')->on('tags');

            $table->unsignedBigInteger("cate_id");
            $table->foreign('cate_id')->references('id')->on('categories')->onDelete('cascade');

            $table->unsignedBigInteger("user_id");
            $table->foreign('user_id')->references('id')->on('users');

            $table->enum('status',['active','inactive'])->default('active');
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
        Schema::dropIfExists('news');
    }
}
