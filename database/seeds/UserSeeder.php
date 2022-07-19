<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
			[
				'name' => 'admin',
				'email' => 'admin@gmail.com',
				'password' => bcrypt('123456'),
				'created_at' => now(),
				'updated_at' => now(),
				'email_verified_at' => now(),
			],
			[
				'name' => 'dev',
				'email' => 'dev@gmail.com',
				'password' => bcrypt('123456'),
				'created_at' => now(),
				'updated_at' => now(),
				'email_verified_at' => now(),
			],
			[
				'name' => 'user',
				'email' => 'user@gmail.com',
				'password' => bcrypt('123456'),
				'created_at' => now(),
				'updated_at' => now(),
				'email_verified_at' => now(),
			],
			[
				'name' => 'test',
				'email' => 'test@gmail.com',
				'password' => bcrypt('123456'),
				'created_at' => now(),
				'updated_at' => now(),
				'email_verified_at' => now(),
			],
		]);
    }
}
