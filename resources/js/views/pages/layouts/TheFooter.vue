<template>
	<div>
        <footer class="ct-footer">
            <section class="nb-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 wow fadeInLeft animated mt-5" data-wow-duration="500ms" data-wow-delay="400ms">
                            <div class="card pt-4 pb-4 pr-5 pl-5 mb-4">
                                <div class="card-block" style="min-height: 300px;">
                                    <!--Title-->
                                    <h3 class="text-center font-up font-bold pink-text pb-2" style="color: #005c5c"><strong>Facebook</strong></h3>
                                </div>
                            </div>                          
                        </div>

                        <div class="col-md-6 col-sm-6 wow fadeInLeft animated mt-5" data-wow-duration="500ms" data-wow-delay="400ms">
                            <div class="card pt-4 pb-4 pr-5 pl-5 mb-4">
                                <div class="card-block" style="min-height: 300px;">
                                    <!--Title-->
                                    <h3 class="text-center font-up font-bold pink-text pb-2"><strong style="color: #005c5c">YouTube</strong></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="container">
                <form name="contentForm" enctype="multipart/form-data" method="post" action="">
                    <div class="ct-footer-pre text-center-lg">
                        <div class="inner" style="width: 60%">
                            <span>Tham gia TPACK để nhận thông tin cập nhật, tin tức & sự kiện!</span>
                        </div>
                        <div class="inner" style="width: 40%">
                            <div class="form-group">
                                <input name="formfields[nl_email]" id="nl_email" class="validate[required]" placeholder="Nhập địa chỉ email của bạn" type="text" value=""> <label for="nl_email" class="sr-only">Email Address</label> <button type="submit" class="btn btn-motive">Gửi</button>
                            </div>
                        </div>
                    </div>
                </form>
                <ul class="ct-footer-list text-center-sm">
                    <li>
                        <img alt="logo" :src="'images/logo_big.png'" style="width: 40%;">
                    </li>
                    <li>
                        <h2 class="ct-footer-list-header">Địa chỉ</h2>
                        <address>
                            <span>
                                Địa chỉ: <a href="javascript:void(0)">{{ settings['address']}}</a><br>
                                Điện thoại: <a href="javascript:void(0)">{{ settings['phone']}}</a><br>
                                Email: <a href="javascript:void(0)">{{ settings['email']}}</a><br>
                                Fax: <a href="javascript:void(0)">{{ settings['fax']}}</a>
                            </span>
                        </address>
                    </li>
                    <li>
                        <h2 class="ct-footer-list-header">Menu</h2>
                        <ul>
                            <li class="nav-item active">
                                <router-link to="/about" class="nav-link">Giới thiệu<span class="sr-only">Home</span></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/news" class="nav-link active">Tin tức</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link active" to="/library">Thư viện</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/discussion" class="nav-link active">Thảo luận</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link active" to="/contact">Liên hệ</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 class="ct-footer-list-header">Hỗ trợ</h2>
                        <ul>
                            <li>
                                <router-link :to="{ path: '/support'}">Nội quy</router-link>
                            </li>
                            <li>
                                <router-link :to="{ path: '/support'}">Hỗ trợ, hướng dẫn</router-link>
                            </li>
                            <li>
                                <router-link :to="{ path: '/contact'}">Liên hệ quảng cáo</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 class="ct-footer-list-header">Liên kết</h2>
                        <ul>
                            <li v-for="(value, index) in linktb" :key="index">
                                <a :href="value.link" target="blank">{{value.name }}</a>
                            </li>                        
                        </ul>
                    </li>
                </ul>
            </div>
           <section id="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="300ms">
                            <p class="copyright">Bản quyền: <span>2019</span> Thiết kế và phát triển bởi <a href="" target="_blank">TPACK</a>.</p>
                        </div>
                        <div class="col-md-4 wow fadeInRight animated" data-wow-duration="500ms" data-wow-delay="300ms">
                            <ul class="faico float-right">
                                <li><a class="faicon-facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="faicon-twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="faicon-linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a class="faicon-google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section> 
        </footer>   
    </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
    data(){
        return {
            linktb: {}
        }
    },
    computed: {
        ...mapGetters({settings: 'setting/settings'}),
    },
    created(){
        this.$store.dispatch('setting/setSettings', this.settings);
        this.axios.get('/api/listhomeinfo').then((response) => {
            this.linktb = response.data.links
        }).catch((error) => {
            console.log(error)
        })
    }
}
</script>


<style scoped>
    a:active {
        text-decoration: none;
        color: inherit;
    }

    a {
        -webkit-transition: all .25s ease-in-out;
        transition: all .25s ease-in-out;
        font-weight: 300;
    }

    a:hover{
        color:red;
    }

    .ct-u-paddingTop10 {
        padding-top: 10px !important;
    }

    .ct-footer {
        background-color: #005c5c;
        /*padding-bottom: 70px;*/
        /*margin-top: 20px;*/
        position: relative;
    }

    .ct-footer-pre {
        width: 100%;
        padding-bottom: 50px;
        padding-top: 50px;
        border-bottom: 1px solid #555;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .ct-footer-pre span {
        /*font-family: 'Open Sans Condensed', sans-serif;*/
        color: #ebebeb;
        font-size: 24px;
    }

    .ct-footer-pre .form-group {
        position: relative;
        margin: 0;
    }

    .ct-footer-pre .form-group:before,
    .ct-footer-pre .form-group:after {
        content: '';
        display: table;
    }

    .ct-footer-pre .form-group:after {
        clear: both;
    }

    .ct-footer-pre .form-group input {
        border: 1px solid #00bff3;
        background-color: #333;
        color: #fff;
        height: 50px;
        padding: 0 30px;
        margin: 0 5px;
        border-radius: 0 !important;
    }

    .ct-footer-pre .form-group button {
        height: 50px;
        position: relative;
        width: 80px;
        padding: 0
    }

    .ct-footer-list {
        padding: 50px 0;
        list-style: none;
        padding-left: 0;
        display: table;
        width: 100%;
    /*    border-bottom: 1px solid #555;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);*/
    }

    .ct-footer-list>li .ct-footer-list-header {
        /*font-family: 'Open Sans Condensed', sans-serif;*/
        color: #00bff3;
        font-size: 24px;
    }

    .ct-footer-list>li ul {
        list-style: none;
        padding-left: 0;
    }

    .ct-footer-list>li ul li a {
        color: #fff;
    }

    .ct-footer-list>li ul li a:hover,
    .ct-footer-post a:hover {
        text-decoration: underline;
        color: #e8ce0e; ;
    }

    .ct-footer-post {
        background: #000;
        padding: 30px 0;
    }

    .ct-footer-post .inner-left,
    .ct-footer-post .inner-right {
        padding: 20px 0;
    }

    .ct-footer-post ul {
        list-style: none;
        padding-left: 0;
        margin: 0 -20px;
    }

    .ct-footer-post ul li {
        display: inline-block;
        margin: 0 20px;
    }

    .ct-footer-post a {
        color: #fff;
    }

    .ct-footer-post p {
        color: #fff;
    }

    .ct-footer-meta {
        padding-top: 30px;
    }

    .ct-footer-meta .ct-socials {
        padding: 20px 0;
    }

    .ct-footer-meta .ct-socials li {
        padding: 0 3px;
    }

    .ct-footer--with-button {
        padding-top: 150px;
    }

    address {
        color: #fff;
        display: inline-block;
    }

    address span {
        font-weight: 600;
    }

    address a {
        color: #fff;
    }

    address a:hover {
        text-decoration: underline;
    }

    .btn {
        /*font-family: 'Open Sans Condensed', sans-serif;*/
        border-radius: 0;
        border: none;
        text-transform: uppercase;
        color: #111;
        font-size: 20px;
        padding: 12px 30px;
    }

    .btn.btn-motive {
        background-color: #00bff3;
        -webkit-transition: all .25s ease;
        transition: all .25s ease;
    }

    .btn.btn-motive:hover,
    .btn.btn-motive:hover:active {
        background-color: #00bff3;
    }

    .btn.btn-violet {
        color: #fff;
        background-color: #4f4f99;
        -webkit-transition: all .25s ease;
        transition: all .25s ease;
    }

    .btn.btn-violet:hover {
        background-color: #37376b;
    }

    .btn.btn-violet:hover:active {
        background-color: #2f2f5b
    }

    .btn.btn-green {
        color: #fff;
        background-color: #43670f;
        -webkit-transition: all .25s ease;
        transition: all .25s ease;
    }

    .btn.btn-green:hover {
        background-color: #36520c;
    }

    .btn.btn-green:hover:active {
        background-color: #314a0b;
    }

    .btn.btn-red {
        color: #fff;
        background-color: #da2229;
        -webkit-transition: all .25s ease;
        transition: all .25s ease;
    }

    .btn.btn-red:hover {
        background-color: #ae1b21;
    }

    .btn.btn-red:hover:active {
        background-color: #9d181e
    }

    .btn.btn-white {
        background-color: #fff;
        -webkit-transition: all .25s ease;
        transition: all .25s ease;
    }

    .btn.btn-white:hover {
        background-color: #d9d9d9;
    }

    .btn.btn-white:hover:active {
        background-color: #c9c9c9
    }

    .btn.btn-large {
        padding: 20px 50px;
        font-size: 30px;
        white-space: normal;
    }

    .ct-mediaSection {
        background-attachment: fixed;
    }

    .ct-section_header--type1 {
        font-family: 'Open Sans Condensed', sans-serif;
        color: #000;
        font-size: 115px;
        text-transform: uppercase;
    }

    .ct-section_header--type2 small {
        font-family: 'coquette', fantasy;
        font-size: 58px;
        line-height: .7;
        display: block;
        font-weight: 700;
        position: relative;
        left: -12px;
    }

    .ct-section_header--type2 span {
        font-family: 'Bebas Neue';
        font-size: 115px;
        line-height: .8;
    }

    .ct-section_header--type2 img {
        display: inline-block;
        float: left;
        position: relative;
        top: 15px;
        padding-right: 3px;
    }

    .ct-section_header--type3 {
        text-align: center;
    }

    .ct-section_header--type3 small {
        font-family: 'coquette', fantasy;
        font-size: 50px;
        padding: 15px 0;
        font-weight: 700;
        color: #fff;
        background-image: url("/core/fileparse.php/16/urlt/../images/ribbon.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        display: block
    }

    .ct-section_header--type3 span {
        font-family: 'Bebas Neue';
        font-size: 150px;
        font-weight: 400;
        text-transform: uppercase;
        line-height: .85
    }

    .ct-section_header--type4 {
        text-align: center;
    }

    .ct-section_header--type4:before,
    .ct-section_header--type4:after {
        content: '';
        display: table
    }

    .ct-section_header--type4:after {
        clear: both
    }

    .ct-section_header--type4 small {
        font-family: 'coquette', fantasy;
        font-size: 50px;
        color: inherit;
        font-weight: 700;
        display: block
    }

    .ct-section_header--type4 span {
        font-family: 'nimbus-sans-condensed', sans-serif;
        font-weight: 400;
        font-weight: bold;
        font-size: 150px;
        text-transform: uppercase;
        display: block;
        line-height: .7
    }

    .ct-section_header+p {
        font-size: 30px;
        font-weight: 700;
        letter-spacing: -1.5px;
        text-align: center;
    }

    .ct-section_header--type4+p {
        font-family: 'nimbus-sans-condensed', sans-serif;
        font-weight: 400;
        font-size: 40px;
        font-weight: 700;
        line-height: 1;
    }


    /* Media Queries */

    @media (min-width:1200px) {
        .ct-footer-pre {
            display: table;
        }
        .ct-footer-pre>.inner {
            display: table-cell;
            vertical-align: middle;
        }
        .ct-footer-list>li {
            width: 20%;
            display: table-cell;
            vertical-align: top;
        }
        .ct-footer-list>li:last-child {
            width: 7%;
        }
    }

    @media (max-width:1199px) {
        .ct-footer-pre .form-group {
            padding-top: 15px
        }
    }

    @media (max-width: 1199px) {
        .ct-footer-list>li {
            display: inline-block;
            float: left;
        }
    }

    @media (min-width:992px) {
        .ct-footer-post .inner-left {
            float: left;
        }
        .ct-footer-post .inner-right {
            float: right;
        }
    }

    @media (max-width:991px) {
        .ct-footer-post {
            text-align: center;
        }
    }

    @media (min-width: 768px) and (max-width: 1199px) {
        .ct-footer-list>li {
            width: 33.3333%;
        }
    }

    @media (min-width:768px) {
        .ct-footer-post p {
            display: inline-block;
        }
        .ct-footer-post p+p {
            padding-left: 50px;
        }
    }

    @media (max-width:767px) {
        address {
            padding-top: 30px;
        }
    }

    @media (min-width: 480px) and (max-width:767px) {
        .ct-footer-list>li {
            width: 50%;
        }
    }

    @media (min-width:480px) {
        .ct-footer-pre .form-group button {
            top: -1px;
        }
        .ct-footer-pre .form-group input {
            width: 331px;
        }
    }

    @media (max-width:479px) {
        .ct-footer-pre .form-group input {
            float: left;
            width: 70%;
            margin: 0;
        }
        .ct-footer-pre .form-group button {
            float: left;
            width: 30%;
        }
        .ct-footer-list>li {
            width: 100%;
            text-align: center;
        }
        .ct-footer-list {
            padding: 20px 0;
        }
        .btn.btn-large {
            padding: 20px 10px;
            line-height: .9;
            font-size: 26px;
            letter-spacing: -.2px;
        }
        .ct-section_header--type1 {
            font-size: 60px;
            line-height: .8;
        }
        .ct-section_header+p {
            font-size: 22px;
        }
        .ct-section_header--type3 small {
            font-size: 25px;
        }
        .ct-section_header--type4 small {
            font-size: 40px;
        }
        .ct-section_header--type3 span {
            font-size: 90px;
        }
        .ct-section_header--type4 span {
            font-size: 80px;
        }
        .ct-section_header--type4+p {
            font-size: 28px;
        }
    }
    /*===============*/
    #footer {
        background: #fff;
        padding: 5px 0 25px 0;
        color: #555;
    }

    .cd-headline.slide .cd-words-wrapper {
        color: #02bdd5;
    }

    .nb-footer {
        /*background: #02bdd5;*/
        background: teal;
        padding-bottom: 30px;
    }

    .nb-footer .footer-single {
        margin-top: 30px;
    }

    .nb-footer .footer-title {
        display: block;
        margin: 10px 0 25px 0;
        border-bottom: 1px dotted white;
    }

    .nb-footer .footer-single a {
        text-decoration: none;
    }

    .nb-footer .footer-single h2 {
        color: white;
        /*font-size: 18px;*/
        display: inline-block;
        font-weight: bold;
        border-bottom: 3px solid #2A00FF;
        padding-bottom: 5px;
        margin-bottom: -2px;
        font-family: 'Roboto Condensed', sans-serif;
    }

    .nb-footer .footer-single li {
        border-top: solid 1px white;
    }

    .nb-footer .footer-single li:first-child {
        border-top: none;
    }

    .nb-footer .footer-single li a {
        color: white;
        padding: 6px 0px;
        display: block;
        transition: all 0.4s ease-in-out;
    }

    .nb-footer .footer-single li a:hover {
        color: blue;
    }

    .nb-footer .footer-single li a:hover i {
        color: blue;
    }

    .nb-footer .dummy-logo {
        margin-top: 11px;
        padding-bottom: 9px;
    }

    .nb-footer .dummy-logo .icon {
        margin-right: 10px;
        border-radius: 20px;
        margin-top: 5px;
    }

    .nb-footer .brand {
        background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    }

    .nb-footer .dummy-logo i {
        font-size: 50px;
        color: #fff;
        padding: 5px;
    }

    .nb-footer .dummy-logo p {
        color: #999;
        font-size: 12px;
    }

    .nb-footer .dummy-logo h2 {
        border-bottom: none;
        color: black;
        padding: 5px 0;
    }

    .nb-footer .btn-footer {
        border: 1px solid blue;
        margin-top: 10px;
        color: blue;
    }

    .nb-footer .btn-footer:hover {
        background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
        color: #fff;
        transition: all 0.4s ease-in-out;
    }

    .nb-footer .useful-links li a {
        text-transform: uppercase;
    }

    .nb-footer .footer-project a {
        font-size: 13px;
    }

    .nb-footer .footer-project img {
        margin-bottom: 20px;
        border: 1px solid #666;
        border-radius: 6px;
        padding: 1px;
        opacity: 0.7;
        transition: all 0.4s ease-in-out;
    }

    .nb-footer .footer-project img:hover {
        opacity: 1.0;
        cursor: pointer;
    }

    .nb-footer .footer-project .footer-title {
        margin-top: 0;
    }

    .nb-footer .footer-single p,
    .footer-single address {
        color: white;
        /*font-size: 14px;*/
        margin-top: 5px;
        /*line-height: 22px;*/
    }

    .footer-single address br {
        margin: 8px;
    }

    .footer-single address i {
        padding-right: 5px;
    }

    .footer-single address span {
        font-weight: bold;
    }


    /* ---------------------------
    /*Font Awesome Social Icons
    --------------------------- */

    .faico {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .faico li {
        display: inline-block;
        margin: 8px 5px 0 0;
        padding: 0;
        line-height: normal;
    }

    .faico li:last-child {
        margin-right: 0;
    }

    .faico a {
        display: inline-block;
        width: 36px;
        height: 36px;
        line-height: 36px;
        font-size: 18px;
        text-align: center;
        color: #02bdd5;
        border-radius: 50%;
    }

    .faicon-dribble:hover {
        background-color: #EA4C89;
        color: white;
    }

    .faicon-facebook:hover {
        background-color: #3B5998;
        color: white;
    }

    .faicon-google-plus:hover {
        background-color: #DB4A39;
        color: white;
    }

    .faicon-linkedin:hover {
        background-color: #0E76A8;
        color: white;
    }

    .faicon-twitter:hover {
        background-color: #00ACEE;
        color: white;
    }

    .faicon-vk:hover {
        background-color: #4E658E;
        color: white;
    }

    #footer .copyright {
        margin-bottom: 0;
        padding-top: 15px;
    }

    #footer .copyright a {
        color: #02bdd5;
    }

    #copyright a:hover {
        color: #e4e4e4 !important;
        text-decoration: none;
    }

    #copyright a {
        text-decoration: none;
    }
</style>

