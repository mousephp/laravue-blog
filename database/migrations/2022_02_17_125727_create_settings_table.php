<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            // $table->string('header');
            // $table->text('header_animation');
            // $table->text('header_content');
            // $table->string('email')->nullable();
            // $table->string('address')->nullable();
            // $table->string('phone')->nullable();
            // $table->string('fax')->nullable();
            // $table->text('facebook')->nullable();
            // $table->text('twitter')->nullable();
            // $table->text('linkedin')->nullable();
            // $table->text('youtube')->nullable();
            // $table->text('video_youtube_intro')->nullable();
            // $table->text('link_serve_nodejs')->nullable();
            // $table->enum('status',['active','inactive'])->default('active');

            $table->string('name');
            $table->text('value')->nullable();
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
        Schema::dropIfExists('settings');
    }
}
