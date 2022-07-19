<?php

use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tags')->insert([
			['name' => 'trending', 'status' => 'inactive'],
			['name' => 'hot', 'status' => 'inactive'],
			['name' => 'girl', 'status' => 'inactive'],
			['name' => 'scandal', 'status' => 'inactive'],
		]);
    }
}
