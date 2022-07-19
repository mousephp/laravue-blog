<template>
    <div id="new-blog" style="background: teal">
        <div class="container">
            <div class="row">
                <div class="col-md-12 pl-3 wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="900ms">
                    <div class="separator">
                        <h1 class="one">
                            <span class="title font-weight-bold">Bài viết mới nhất</span>
                            <span><h5><a href="javascript:void(0)" class="create" v-on:click="CreateBlog()">Tạo bài viết mới</a></h5></span>
                        </h1>
                    </div>
                </div>
                <div class="col-md-4 col-xs-12 p-3 home-blog" v-for="(value, index) in blognew" :key="index">
                    <div class="card wow fadeInDown animated" data-wow-duration="500ms" :data-wow-delay="(datawowdelay * index) + 'ms'">
                        <a href="javascript:void(0)" class="imgover" v-if="!checkImageSVG(index)">
                            <img class="card-img-top" :src="`images/blog/${value.photo}`" alt="" style="height: 210px">
                        </a>
                        <a href="javascript:void(0)" class="imgover" v-if="checkImageSVG(index)" v-html="value.photo"></a>
                        <div class="card-body">
                            <router-link :to="{ name: 'BlogDetails', params: {id: value.id }}" :title="value.title" class="link-item-title">
                                <h4 class="font-weight-bold" v-on:click="incrementView(value.id)">{{value.title}}</h4>
                            </router-link>
                            <p class="home-blog-author">Đăng bởi <router-link class="blog-admin link-item-normal" :to="{ name: 'ProfileUser', params: {id: value.user_id}}">{{value.user.name}}</router-link> ngày <span>{{ convertDate(value.created_at) }}</span></p>
                            <p class="card-text">{{ value.description }}</p>
                            <div class="blog-footer">
                                <a href="javascript:void(0)"><span class="fa fa-comment"></span>{{ value.like }} Bình luận</a>
                                <a href="javascript:void(0)" class="float-right"><span class="fa fa-thumbs-o-up"></span>{{ value.countLikeBlog }} Thích</a>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
        </div>
    </div>
</template>



<script>
    export default {
        data(){
            return {
                blognew: {},
                datawowdelay: 150,
                isLogin: localStorage.getItem('tpack.jwt') != null,
                users: null
            }
        },
        created(){
            this.users = JSON.parse(localStorage.getItem('tpack.user'))
            this.axios.get('/api/news/new').then((response) =>{
                this.blognew = response.data
            }).catch(error => {
                console.error(error);
            }) 
        },
        methods:{
            checkImageSVG(index){
                if(this.blognew.length > 0){
                    if('photo' in this.blognew[index]){
                        return this.blognew[index].photo.toString().indexOf('<svg') != -1
                    }
                }
                return false;
            },
            pad(s){
                return (s < 10) ? '0' + s : s;
            },
            convertDate(inputFormat) {
              var d = new Date(inputFormat);
              return [this.pad(d.getDate()), this.pad(d.getMonth()+1), d.getFullYear()].join('/');
            },
            incrementView(id){
                this.axios.get('/api/news/incrementview/' + id).then((response) =>{
                }).catch(error => {
                    console.error(error);
                })
            },
            CreateBlog(){
                if(this.isLogin){
                    if(this.users.email_verified_at == '' || this.users.email_verified_at == null || this.users.email_verified_at == undefined){
                        alertify.set('notifier','position', 'buttom-right');
                        alertify.error('Xin chào '+ this.users.name +'.\n Bạn cần xem thư đến trong '+ this.users.email +' để kích hoạt tài khoản trước khi đăng bài');
                    } else {
                        this.$router.push({ name: 'UserBlogCreate'})
                    }
                } else {
                    alertify.set('notifier','position', 'buttom-right');
                    alertify.error('Bạn cần đăng nhập để thực hiện chức năng này');
                }
            }
        }
    }
</script>



<style scoped>
    .separator h1 {
        position: relative;
        margin-top: 20px;
        text-align: center;
    }

    .separator h1.one {
        margin-top: 0;
    }

    .separator h1.one a {
        text-decoration: none;
        display: inline-block;
        position: relative;
        font-family: Arial;
        font-weight: bold;
        padding: 0 0 5px 0;
        /*color: #e2e61a;*/
        color: #fff;
    }
    .separator h1.one a:hover{
        color: #e8ce0e;
    }
    .separator h1.one a:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        left: 0;
        bottom: 0;
        visibility: hidden;
        background-color: #e8ce0e;
        /*background-color: #e8ce0e;*/
        color:#e8ce0e;
        -webkit-transition: all .1s ease;
        transition: all 0.3s ease;  
        -webkit-transform: scaleX(0);
        -ms-transform: scaleX(0);
        transform: scaleX(0);
    }

    .separator h1.one a:hover:after {
        visibility: visible;
        -webkit-transform: scaleX(1);
        -ms-transform: scaleX(1);
        transform: scaleX(1);
    }

    .separator h1.one:before {
        content: "";
        display: block;
        border-top: solid 1px #fff;
        width: 100%;
        height: 1px;
        position: absolute;
        top: 50%;
        z-index: 1;
    }

    .separator h1.one .title {
        /*background: #ececec;*/
        background: teal;
        padding: 0 20px;
        position: relative;
        z-index: 5;
        color: #fff;
        text-transform: uppercase;
    }

    .separator h1.one .create {
        /*background: #ececec;*/
        background: teal;
        padding: 0 20px;
        position: relative;
        z-index: 5;
        float: right;
        bottom: 2.2em;
    }

    #new-blog {
        padding: 40px 0;
        background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        /*background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898; 
        background-blend-mode: multiply,multiply;*/
    }
    #new-blog .imgover {
        display:inline-block; 
        position:relative; 
        max-width:100%;
        overflow: hidden;
        /*////////*/
        background: #2f3238;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }
    #new-blog .imgover::before, .imgover::after {
        display:block; 
        position:absolute; 
        content:""; 
        text-align:center; 
        opacity:0; 
        transition: all .5s ease-in-out;
    }
    #new-blog .imgover::before {
        top:0; 
        right:0; 
        bottom:0; 
        left:0;
    }
    #new-blog .imgover::after {
        top:50%; 
        left:50%; 
        width:50px; 
        height:50px; 
        line-height:50px; 
        margin:-25px 0 0 -25px; 
        font:normal normal normal 14px/1 FontAwesome; 
        font-weight:900; 
        content:"\f06e";
        font-size:28px;
    }
    #new-blog .imgover:hover::before, .imgover:hover::after {
        opacity:1;
    }
    #new-blog .imgover:hover::before {
        background:rgba(0,0,0,.55);
    }
    #new-blog .imgover, #new-blog .imgover:hover::after {
        color:#02bdd5;
    }
    #new-blog a {
        text-decoration: none;
    }

    #new-blog .imgover img {
        -webkit-transition: opacity 1s,
         -webkit-transform 1s;
        transition: opacity 1s, transform 1s;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    #new-blog .imgover:hover img {
        -webkit-transform: scale3d(1.1,1.1,1);
        transform: scale3d(1.1,1.1,1);
        opacity: 0.4;
        transition: all .5s ease-in-out;
    }
    
    #new-blog .home-blog-author{
        font-size: 0.8em;
        font-style: italic;
    }

    #new-blog .blog-footer {
        display: inline; float: left;
        padding: 12px 0 0 0; 
        width: 100%;
        border-top: 1px solid #ccc;
    }
    #new-blog .blog-footer a {
        font-size: 0.8em;
        color: #005c5c;
    }
    #new-blog .blog-footer a span {
        border: 1px solid;
        border-radius: 50%; 
        display: inline-block; 
        margin-right: 3px; 
        padding: 4px 5px;
    }

    #new-blog .new-blog-title{
        color: black;
    }
</style>
