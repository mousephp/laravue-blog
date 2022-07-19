<?php

use Illuminate\Database\Seeder;

class LibraryTableSeeder extends Seeder
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
        	DB::table('libraries')->insert([
	            'library_type_id' => 1,
                'title' => $faker->realText(50),
                'slug' => $faker->slug,
	            'file_name' => $i . '.jpg',
                'user_id' => rand(1, 4),
	            'created_at' => date("Y-m-d"),
                'status' => 'active'
	        ]);
        }

        for ($i=1; $i <= 20; $i++) { 
        	DB::table('libraries')->insert([
	            'library_type_id' => 2,
                'title' => $faker->realText(50),
                'slug' => $faker->slug,
	            'file_name' => 'https://www.youtube.com/watch?v=yMQiHJsePOM',
                'user_id' => rand(1, 4),
	            'created_at' => date("Y-m-d"),
                'status' => 'active'
	        ]);
        }

        for ($i=1; $i <= 20; $i++) { 
            DB::table('libraries')->insert([
                'library_type_id' => 3,
                'title' => $faker->realText(50),
                'slug' => $faker->slug,
                'user_id' => rand(1, 4),
                'file_name' => $i . '.pdf',
                'created_at' => date("Y-m-d"),
                'status' => 'active'
            ]);
        }
    }
}
