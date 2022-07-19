<?php

use Illuminate\Database\Seeder;

class CateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
			['name' => 'samsung', 'status' => 'active'],
			['name' => 'apple', 'status' => 'active'],
			['name' => 'nokia', 'status' => 'active'],
			['name' => 'xiaomi', 'status' => 'active'],
			['name' => 'huawei', 'status' => 'active'],
		]);
    }
}
