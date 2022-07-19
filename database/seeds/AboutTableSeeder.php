<?php

use Illuminate\Database\Seeder;

class AboutTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('abouts')->insert([
            'content' => '<h2>GIỚI THIỆU</h2>
            <p>TPACK (Technological Pedagogical Content Knowledge) l&agrave; m&ocirc; h&igrave;nh x&aacute;c định<br />những ki&ecirc;́n thức m&agrave; người dạy c&acirc;̀n c&oacute; để c&oacute; thể giảng dạy hiệu quả với sự hỗ trợ của CNTT.</p>
            <p align="justify">&Yacute; tưởng về m&ocirc; h&igrave;nh n&agrave;y đ&atilde; nảy sinh tr&ecirc;n cơ sở của nhiều c&ocirc;ng tr&igrave;nh nghi&ecirc;n cứu, trong đ&oacute; c&oacute; m&ocirc; h&igrave;nh Pedagogical Content Knowledge (PCK) của Lee Shulman (1986). Rất nhiều c&ocirc;ng tr&igrave;nh nghi&ecirc;n cứu đ&atilde; n&ecirc;u ra rằng CNTT kh&ocirc;ng thể được xem l&agrave; một th&agrave;nh tố độc lập trong qu&aacute; tr&igrave;nh dạy-học. Hoạt động dạy-học hiệu quả c&acirc;̀n c&oacute; sự k&ecirc;́t hợp CNTT với phương ph&aacute;p sư phạm v&agrave; ki&ecirc;́n thức chuy&ecirc;n m&ocirc;n</p>
            <p align="justify">M&ocirc; h&igrave;nh TPACK g&ocirc;̀m c&oacute; 3 th&agrave;nh tố ch&iacute;nh đan xen lẫn nhau như sơ đ&ocirc;̀ dưới đ&acirc;y:<br /><br /></p>
            <div align="justify">
            <div style="text-align: center;"><img src="/images/intro/introTpack.png" alt=" " width="400" height="389" /></div>
            <br />
            <div>Ba th&agrave;nh tố ch&iacute;nh của TPACK được thể hiện bằng 3 v&ograve;ng tr&ograve;n, mỗi v&ograve;ng tr&ograve;n l&agrave; một mảng ki&ecirc;́n thức quan trọng của GV: ki&ecirc;́n thức về lĩnh vực dạy-học (CK &ndash;<br />Content Knowledge), ki&ecirc;́n thức về phương ph&aacute;p sư phạm (PK &ndash; Pedagogical Knowledge) v&agrave; ki&ecirc;́n thức về CNTT (TK &ndash; Technological Knowledge).</div>
            <div>Ba mảng ki&ecirc;́n thức khi k&ecirc;́t hợp lại với nhau sẽ tạo một m&ocirc; h&igrave;nh tổng hợp về năng lực c&acirc;̀n c&oacute; của GV gọi l&agrave; TPACK (Technological Pedagogical Content Knowledge). M&ocirc; h&igrave;nh TPACK cũng đề cập đ&ecirc;́n c&aacute;c dạng ki&ecirc;́n thức mới h&igrave;nh th&agrave;nh do sự tương t&aacute;c của 3 mảng ki&ecirc;́n thức tr&ecirc;n:</div>
            <div>1 - Ki&ecirc;́n thức phương ph&aacute;p sư phạm sử dụng trong lĩnh vực dạy-học (PCK &ndash; Pedagogical Content Knowledge).<br />2 - Ki&ecirc;́n thức về c&aacute;c c&ocirc;ng cụ CNTT chuy&ecirc;n dùng trong lĩnh vực dạy-học (TCK &ndash; Technological Content Knowledge).<br />3 - Ki&ecirc;́n thức về c&aacute;c c&ocirc;ng cụ CNTT hỗ trợ những &yacute; tưởng, phương ph&aacute;p dạy-học cụ thể (TPK &ndash; Technological Pedagogical Knowledge).</div>
            <div>Để việc ứng dụng CNTT v&agrave;o dạy-học c&oacute; hiệu quả, người GV c&acirc;̀n c&oacute; cả 3 mảng ki&ecirc;́n thức tr&ecirc;n, nhưng việc vận dụng, mức độ tham gia của từng khối ki&ecirc;́n thức<br />trong những ho&agrave;n cảnh, b&agrave;i học cụ thể phải linh hoạt.</div>
            <div>&nbsp;</div>
            <div><strong>Sử dụng m&ocirc; h&igrave;nh TPACK</strong></div>
            <div>M&ocirc; h&igrave;nh TPACK l&agrave; một khung l&yacute; thuy&ecirc;́t gi&uacute;p c&aacute;c nh&agrave; gi&aacute;o dục v&agrave; quản l&yacute; thi&ecirc;́t k&ecirc;́ những hệ thống dạy-học v&agrave; đ&agrave;o tạo hiệu quả hơn.</div>
            <div>Trước h&ecirc;́t, m&ocirc; h&igrave;nh TPACK chỉ ra sự k&eacute;m hiệu quả của những m&ocirc; h&igrave;nh đ&agrave;o tạo m&agrave; GV chỉ đơn giản tập trung v&agrave;o một loại năng lực n&agrave;o đ&oacute;. M&ocirc; h&igrave;nh n&agrave;y ch&iacute;nh l&agrave; cơ sở cho việc ph&acirc;n t&iacute;ch ki&ecirc;́n thức, năng lực GV v&agrave; từ đ&oacute; c&oacute; những giải ph&aacute;p đ&agrave;o tạo GV đ&aacute;p ứng y&ecirc;u c&acirc;̀u dạy-học của th&ecirc;́ kỉ 21. Ngo&agrave;i ra, TPACK cũng tạo cơ sở để GV thi&ecirc;́t k&ecirc;́ những hoạt động học tập hiệu quả hơn. TPACK đ&atilde; chỉ ra l&agrave; việc học đạt hiệu quả cao nhất khi th&acirc;̀y tr&ograve; c&ugrave;ng sử dụng sức mạnh của CNTT để kh&aacute;m ph&aacute; tri thức trong m&ocirc;i trường học tập c&oacute; gắn k&ecirc;́t chặt chẽ với thực tiễn.</div>
            <div>&nbsp;</div>
            <div>TPACK c&oacute; thể hỗ trợ GV thi&ecirc;́t k&ecirc;́ v&agrave; đ&aacute;nh gi&aacute; một hoạt động học tập hiệu quả bằng c&aacute;ch n&ecirc;u ra những c&acirc;u hỏi li&ecirc;n quan đ&ecirc;́n c&aacute;c th&agrave;nh tố của m&ocirc; h&igrave;nh TPACK, như:</div>
            <ol>
            <li>&Yacute; tưởng dạy-học trong hoạt động học tập n&agrave;y c&oacute; gắn với mục ti&ecirc;u của b&agrave;i học kh&ocirc;ng? (CK)</li>
            <li>Phương ph&aacute;p sư phạm n&agrave;o hỗ trợ tốt nhất cho &yacute; tưởng dạy-học n&agrave;y? (PCK)</li>
            <li>C&aacute;c c&ocirc;ng cụ CNTT c&acirc;̀n được sử dụng như th&ecirc;́ n&agrave;o để gi&uacute;p người học lĩnh hội ki&ecirc;́n thức hiệu quả nhất? (TCK)</li>
            <li>Với phương ph&aacute;p sư phạm m&agrave; GV muốn sử dụng th&igrave; c&ocirc;ng cụ CNTT n&agrave;o sẽ hỗ trợ hiệu quả nhất? (TPK)</li>
            <li>GV c&acirc;̀n bi&ecirc;́t c&ocirc;ng cụ CNTT n&agrave;o để triển khai hoạt động học tập n&agrave;y? (TK)</li>
            <li>Tất cả c&aacute;c y&ecirc;́u tố tr&ecirc;n c&acirc;̀n được phối hợp th&ecirc;́ n&agrave;o để hoạt động học tập đạt hiệu quả cao nhất? (TPACK)</li>
            </ol>
            </div>',
            'status' => 'active',
            'created_at' => date("Y-m-d"),
        ]);
    }
}
