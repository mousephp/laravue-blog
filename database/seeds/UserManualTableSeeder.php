<?php

use Illuminate\Database\Seeder;

class UserManualTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        DB::table('user_manuals')->insert([
            'title' => 'Đăng ký tài khoản',
            'content' => $faker->text(2000),
            'created_at' => date("Y-m-d"),            
            'status' => 'active',
        ]);

        DB::table('user_manuals')->insert([
            'title' => 'Khôi phục tài khoản khi quên mật khẩu',
            'content' => $faker->text(2000),
            'created_at' => date("Y-m-d"),            
            'status' => 'active',
        ]); 

        DB::table('user_manuals')->insert([
            'title' => 'Quyền gửi bài vào forum',
            'content' => $faker->text(2000),
            'created_at' => date("Y-m-d"),            
            'status' => 'active',
        ]);

        DB::table('user_manuals')->insert([
            'title' => 'Vì sao đã đăng ký nhưng không gửi bài được?',
            'content' => $faker->text(2000),
            'created_at' => date("Y-m-d"),            
            'status' => 'active',
        ]);

        DB::table('user_manuals')->insert([
            'title' => 'Cách tạo bài viết mới',
            'content' => $faker->text(2000),
            'created_at' => date("Y-m-d"),            
            'status' => 'active',
        ]);

        DB::table('user_manuals')->insert([
            'title' => 'Cách tạo thảo luận mới',
            'content' => $faker->text(2000),
            'created_at' => date("Y-m-d"),            
            'status' => 'active',
        ]);

        DB::table('user_manuals')->insert([
            'title' => 'Trả lời một bài viết trên diễn đàn',
            'content' => $faker->text(2000),
            'created_at' => date("Y-m-d"),            
            'status' => 'active',
        ]);
    }
}
