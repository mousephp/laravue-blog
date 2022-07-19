<?php

use Illuminate\Database\Seeder;

class TpackTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tpacks')->insert([
            'text' => '',
            'title' => 'Các thành phần của mô hình TPACK',
            'content' => 'Trung tâm của khuôn mẫu TPACK là sự tương tác phức tạp giữa ba dạng kiến thức chính: Kiến thức công nghệ(TK), phương pháp sư phạm (PK)và nội dung chuyên môn(CK)',
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);

        DB::table('tpacks')->insert([
            'text' => 'CK',
            'title' => 'Kiến thức về nội dung chuyên môn',
            'content' => 'Kiến thức nội dung chuyên môn (Content Knowledge): là những kiến thức về các vấn đề thực tế được học hoặc giảng dạy.',
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);

        DB::table('tpacks')->insert([
            'text' => 'PCK',
            'title' => 'Kiến thức nội dung phương pháp',
            'content' => 'Kiến thức phương pháp sư phạm sử dụng trong lĩnh vực dạy-học (Pedagogical Content Knowledge)',
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);

        DB::table('tpacks')->insert([
            'text' => 'PK',
            'title' => 'Kiến thức phương pháp sư phạm',
            'content' => 'Kiến thức sư phạm (Pedagogical Knowledge): là kiến thức sâu về các quy trình, thói quen hoặc các phương pháp giảng dạy, học tập và cách thức để đạt được mục đích giáo dục, các giá trị và mục tiêu tổng thể.',
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);

        DB::table('tpacks')->insert([
            'text' => 'TCK',
            'title' => 'Kiến thức nội dung công nghệ',
            'content' => 'Kiến thức về các công cụ CNTT chuyên dùng trong lĩnh vực dạy-học (Technological Content Knowledge)',
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);

        DB::table('tpacks')->insert([
            'text' => 'TK',
            'title' => 'Kiến thức công nghệ',
            'content' => 'Kiến thức công nghệ (Technological Knowledge): là kiến thức về những công nghệ tiêu chuẩn như sách, phấn viết và tấm bảng đen, cũng như nhiều kỹ thuật tiên tiến hơn như Internet và video kĩ thuật số.',
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);
        DB::table('tpacks')->insert([
            'text' => 'TPK',
            'title' => 'Kiến thức phương pháp công nghệ',
            'content' => 'Kiến thức về các công cụ CNTT hỗ trợ những ý tưởng, phương pháp dạy-học cụ thể (Technological Pedagogical Knowledge)',
            'created_at' => date("Y-m-d"),
            'status' => 'active'
        ]);
    }
}
