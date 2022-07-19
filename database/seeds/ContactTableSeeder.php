<?php

use Illuminate\Database\Seeder;

class ContactTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        
        for ($i=1; $i <= 20; $i++) { 
        	DB::table('contacts')->insert([
	            'name' => $faker->name,
	            'email' => $faker->unique()->safeEmail,
	            'phone' => $faker->phoneNumber,
	            'company' => $faker->company,
	            'content' => $faker->text(2000),
	            'created_at' => date("Y-m-d"),
                'status' => 'active'
	        ]);
        }
    }
}
