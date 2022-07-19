<?php

use Illuminate\Database\Seeder;

class DiscussionTypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
     
        DB::table('discussion_types')->insert([
            'name' => 'Kiến thức về nội dung chuyên môn (CK)',
            'slug' => $faker->slug,
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);
        DB::table('discussion_types')->insert([
            'name' => 'Kiến thức phương pháp sư phạm (PK)',
            'slug' => $faker->slug,
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);
        DB::table('discussion_types')->insert([
            'name' => 'Kiến thức công nghệ (TK)',
            'slug' => $faker->slug,
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);
        DB::table('discussion_types')->insert([
            'name' => 'Kiến thức nội dung phương pháp (PCK)',
            'slug' => $faker->slug,
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);
        DB::table('discussion_types')->insert([
            'name' => 'Kiến thức nội dung công nghệ (TCK)',
            'slug' => $faker->slug,
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);
        DB::table('discussion_types')->insert([
            'name' => 'Kiến thức phương pháp công nghệ (TPK)',
            'slug' => $faker->slug,
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);
    }
}
