<?php

use Illuminate\Database\Seeder;

class DiscussionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        for ($i = 1; $i <= 20; $i++) { 
        	DB::table('discussions')->insert([
                'title' => $faker->realText(40),
                'slug' => $faker->slug,   
                'content' => $faker->realText(1000),
                'user_id' => rand(1, 4),
                'discussion_type_id' => rand(1, 6),
                'created_at' => date("Y-m-d", strtotime((0 - rand(1,10)) . ' days' )),
                'status' => 'active'
            ]);
        }

        DB::table('discussions')->insert([
            'title' => 'Tìm cách đo TPK hoặc TCK',
            'content' => 'Xin chào tất cả mọi người! :) tôi là một sinh viên tiến sĩ và tôi sẽ sử dụng tpack trong luận án của tôi. Cụ thể là mình đang tìm cách đo tpk hoặc tck (bên kia sử dụng quy mô tpack gốc). Ai có thể giới thiệu bài viết cho tôi để đọc được không? Tôi chỉ tìm thấy một vài người. Cảm ơn!',
            'user_id' => rand(1, 4),
            'discussion_type_id' => 6,
            'created_at' => date("Y-m-d", strtotime((0 - rand(1,10)) . ' days' )),
            'status' => 'active'
        ]);

        DB::table('discussions')->insert([
            'title' => 'Tìm cách đo TPK hoặc TCK',
            'content' => 'Xin chào tất cả mọi người! :) tôi là một sinh viên tiến sĩ và tôi sẽ sử dụng tpack trong luận án của tôi. Cụ thể là mình đang tìm cách đo tpk hoặc tck (bên kia sử dụng quy mô tpack gốc). Ai có thể giới thiệu bài viết cho tôi để đọc được không? Tôi chỉ tìm thấy một vài người. Cảm ơn!',
            'user_id' => rand(1, 4),
            'discussion_type_id' => 5,
            'created_at' => date("Y-m-d", strtotime((0 - rand(1,10)) . ' days' )),
            'status' => 'active'
        ]);

        DB::table('discussions')->insert([
            'title' => 'So sánh của tpack trên 2 quốc gia',
            'content' => 'Có hứng thú với tpack không? Đây là một sự so sánh của tpack trên 2 quốc gia. Nếu bạn quan tâm đến việc trở thành một phần của dự án nghiên cứu tpack quốc tế lớn hơn, xin vui lòng liên hệ với tôi. https://onlinelibrary.wiley.com/doi/abs/10.1111/bjet.12707',
            'user_id' => rand(1, 4),
            'discussion_type_id' => 3,
            'created_at' => date("Y-m-d", strtotime((0 - rand(1,10)) . ' days' )),
            'status' => 'active'
        ]);
    }
}
