<?php

use Illuminate\Database\Seeder;

class LinkTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        DB::table('links')->insert([
            'name' => 'Tpack',
            'slug' => $faker->slug,
            'link' => 'http://tpack.org/',
            'status' => 'active'
            // 'created_at' => now(),
        ]);

        DB::table('links')->insert([
            'name' => 'Group Facebook',
            'slug' => $faker->slug,
            'link' => 'https://www.facebook.com/groups/47147628001/',
            'status' => 'active'
            // 'created_at' => now(),
        ]);

        DB::table('links')->insert([
            'name' => 'Learntechlib',
            'slug' => $faker->slug,
            'link' => 'https://www.learntechlib.org',
            'status' => 'active'
            // 'created_at' => now(),
        ]);

        DB::table('links')->insert([
            'name' => 'Quickshout',
            'slug' => $faker->slug,
            'link' => 'https://quickshout.blogspot.com',
            'status' => 'active'
            // 'created_at' => now(),
        ]);
    }
}
