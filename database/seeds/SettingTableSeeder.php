<?php

use Illuminate\Database\Seeder;

class SettingTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('settings')->insert([
            'header' => 'Mô hình TPACK',
            'header_animation' => 'Kiến thức về nội dung giảng dạy,Kiến thức phương pháp,Kiến thức công nghệ',
            'header_content' => ' Lý thuyết TPACK được sử dụng để đo những chuyển biến trong tư duy của giáo viên / giảng viên về ICT trong giáo dục.<br> Ba mảng kiến thức khi kết hợp lại với nhau sẽ tạo một mô hình tổng hợp <br>về năng lực cần có của giáo viên',
            'email' => 'tpack@gmail.com',
            'address' => '123 TP Huế',
            'phone' => '0974433226',
            'fax' => 'Đang cập nhật',
            'facebook' => 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=450&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId',
            'twitter' => 'https://twitter.com/tranquangtan',
            'linkedin' => 'https://www.linkedin.com/in/quangtantran/',
            'youtube' => 'https://www.youtube.com/channel/UCYEP60iTAKDptILG-sJkQfg?view_as=subscriber',
            'video_youtube_intro' => 'https://www.youtube.com/watch?v=yMQiHJsePOM',
            'link_serve_nodejs' => 'localhost:3000',
            'created_at' => date("Y-m-d"),
        ]);
    }
}
