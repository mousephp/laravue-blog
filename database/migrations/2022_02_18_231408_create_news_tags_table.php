<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news_tags', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("tag_id");
            $table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
            
            $table->unsignedBigInteger("new_id");            
            $table->foreign('new_id')->references('id')->on('news')->onDelete('cascade');

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
        Schema::dropIfExists('news_tags');
    }
}
