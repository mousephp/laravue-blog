<?php

use Illuminate\Database\Seeder;

class CommentDiscussionTableSeeder extends Seeder
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
        	DB::table('comment_discussions')->insert([
	            'message' => $faker->realText(200),
	            'discussion_id' => rand(1, 5),
	            'user_id' => rand(1, 4),
	            'created_at' => date("Y-m-d"),
                'status' => 'active'
	        ]);
        }

        DB::table('comment_discussions')->insert([
            'message' => 'Bạn có thể thay đổi những người hiện có để phù hợp với bối cảnh của bạn không? Tôi đã thay đổi bản gốc archambault cho ngành nghề.',
            'discussion_id' => 21,
            'user_id' => rand(1, 4),
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);

        DB::table('comment_discussions')->insert([
            'message' => 'Tương tự với tess, tôi cũng đã thay đổi các câu hỏi cho bối cảnh dạy toán của tôi trong luận án của tôi. https://www.researchgate.net/publication/330913760_A_pre-service_mathematics_teachers_technological_pedagogical_content_knowledge_regarding_different_views_of_3-d_figures_in_geometry',
            'discussion_id' => 21,
            'user_id' => rand(1, 4),
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);

        DB::table('comment_discussions')->insert([
            'message' => 'Bạn có thể thay đổi những người hiện có để phù hợp với bối cảnh của bạn không? Tôi đã thay đổi bản gốc archambault cho ngành nghề.',
            'discussion_id' => 22,
            'user_id' => rand(1, 4),
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);

        DB::table('comment_discussions')->insert([
            'message' => 'Tương tự với tess, tôi cũng đã thay đổi các câu hỏi cho bối cảnh dạy toán của tôi trong luận án của tôi. https://www.researchgate.net/publication/330913760_A_pre-service_mathematics_teachers_technological_pedagogical_content_knowledge_regarding_different_views_of_3-d_figures_in_geometry',
            'discussion_id' => 22,
            'user_id' => rand(1, 4),
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);

        DB::table('comment_discussions')->insert([
            'message' => 'Xin chào, tôi đến từ indonesia và quan tâm đến việc trở thành một phần của dự án nghiên cứu tpack quốc tế lớn hơn. Đây là địa chỉ email của tôi: mailizar@unsyiah.ac.id. cảm ơn bạn',
            'discussion_id' => 23,
            'user_id' => rand(1, 4),
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);

        DB::table('comment_discussions')->insert([
            'message' => 'Tôi quan tâm',
            'discussion_id' => 23,
            'user_id' => rand(1, 4),
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);

        DB::table('comment_discussions')->insert([
            'message' => 'Xin chào, tôi đang ở nigeria và quan tâm. Luận án tiến sĩ của tôi cũng đang ở trên tpack.',
            'discussion_id' => 23,
            'user_id' => rand(1, 4),
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);
    }
}
