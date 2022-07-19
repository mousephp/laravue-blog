<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentDiscussionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comment_discussions', function (Blueprint $table) {
            $table->id();
            $table->text('message');

            $table->text('replied_comment')->nullable();
            $table->unsignedBigInteger('parent_id')->nullable();
            
            $table->unsignedBigInteger('discussion_id')->unsigned();
            $table->foreign('discussion_id')->references('id')->on('discussions')->onDelete('cascade');

            $table->unsignedBigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users'); //->onDelete('cascade');

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
        Schema::dropIfExists('comment_discussions');
    }
}
