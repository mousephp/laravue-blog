<?php

use Illuminate\Database\Seeder;

class LibraryTypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        
        DB::table('library_types')->insert([
            'name' => 'Hình ảnh',
            'slug' => $faker->slug,
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);

        DB::table('library_types')->insert([
            'name' => 'Video',
            'slug' => $faker->slug,
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);

        DB::table('library_types')->insert([
            'name' => 'Văn bản',
            'slug' => $faker->slug,
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);
    }
}
