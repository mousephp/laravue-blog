<template>
    <div id="highlight-blog">
        <div v-if="!complete" class="pt-5" style="min-height: 50vh">
            <div class="loading-spinner"></div>
        </div>
        <div class="container" v-if="complete">
            <div class="row">
                <div class="col-md-12 pl-3 wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="900ms">
                    <div class="separator">
                        <h1 class="one">
                            <span class="title blog-title font-weight-bold">Bài viết nổi bật</span>
                            <span><h5><a href="javascript:void(0)" class="create" v-on:click="CreateBlog()">Tạo bài viết mới</a></h5></span>
                        </h1>
                    </div>
                </div>
                <div class="col-md-4 col-xs-12 p-3 home-blog" v-for="(value, index) in blogs" :key="index">
                    <div class="card wow fadeInDown animated" data-wow-duration="500ms" :data-wow-delay="(datawowdelay * index) + 'ms'">
                        <a href="javascript:void(0)" class="imgover" v-if="!checkImageSVG(index)">
                            <img class="card-img-top" :src="`images/blog/${value.photo}`" alt="" style="height: 210px">
                        </a>
                        <a href="javascript:void(0)" class="imgover" v-if="checkImageSVG(index)" v-html="value.photo">
                        </a>
                        <div class="card-body">
                        
                            <router-link :to="{ name: 'BlogDetails', params: {id: value.id }}" :title="value.title" class="link-item-title">
                                <h4 class="font-weight-bold" v-on:click="incrementView(value.id)">{{value.title}}</h4>
                            </router-link>

                            <p class="home-blog-author">Đăng bởi <router-link class="blog-admin link-item-normal" :to="{ name: 'ProfileUser', params: {id: value.user_id}}">{{ value.user.name }}</router-link> ngày <span>{{ convertDate(value.created_at) }}</span></p>
                            <p class="card-text">{{ value.description }}</p>
                            <div class="blog-footer">
                                <a href="javascript:void(0)"><span class="fa fa-comment"></span>{{ value.countComment }} Bình luận</a>
                                <a href="javascript:void(0)" class="float-right"><span class="fa fa-thumbs-o-up"></span>{{ value.like }} Thích</a>
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
                blogs: {},
                datawowdelay: 150,
                isLogin: localStorage.getItem('tpack.jwt') != null,
                users: null,
                complete: false
            }
        },
        created(){
            this.axios.get('/api/news/bloghighlight').then((response) =>{
                this.blogs = response.data
                this.complete = true
            }).catch(error => {
                console.error(error);
            }) 
        },
        methods: {
            checkImageSVG(index){
                if(this.blogs.length > 0){
                    if('photo' in this.blogs[index]){
                        return this.blogs[index].photo.toString().indexOf('<svg') != -1
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
    
    .separator h1.one a{
        text-decoration: none;
        display: inline-block;
        position: relative;
        font-family: Arial;
        font-weight: bold;
        padding: 0 0 5px 0;
        /*color: #e2e61a;*/
        color: #005c5c;
    }
    .separator h1.one a:hover{
        /*color: #e8ce0e;*/
        color: #eb5055;
    }
    .separator h1.one a:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        left: 0;
        bottom: 0;
        visibility: hidden;
        background-color: #eb5055;
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

    .separator h1.one:before {
        content: "";
        display: block;
        border-top: solid 1px black;
        width: 100%;
        height: 1px;
        position: absolute;
        top: 50%;
        z-index: 1;
    }

    .separator h1.one .title {
        background: #ececec;
        padding: 0 20px;
        position: relative;
        z-index: 5;
        text-transform: uppercase;
        color: #005c5c;
    }

    .separator h1.one .create {
        background: #ececec;
        padding: 0 20px;
        position: relative;
        z-index: 5;
        float: right;
        bottom: 2.2em;
    }

    #highlight-blog {
        padding: 40px 0;
        /*background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);*/
        background: #ececec;
    }

    #highlight-blog .imgover {
        display:inline-block; 
        position:relative; 
        max-width:100%;
        overflow: hidden;

        background: #2f3238;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }
    #highlight-blog .imgover::before, .imgover::after {
        display:block; 
        position:absolute; 
        content:""; 
        text-align:center; 
        opacity:0; 
        transition: all .5s ease-in-out;
    }
    #highlight-blog .imgover::before {
        top:0; 
        right:0; 
        bottom:0; 
        left:0;
    }
    #highlight-blog .imgover::after {
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
    #highlight-blog .imgover:hover::before, .imgover:hover::after {
        opacity:1;
    }
    #highlight-blog .imgover:hover::before {
        background:rgba(0,0,0,.55);
    }
    #highlight-blog .imgover, #highlight-blog .imgover:hover::after {
        color:#02bdd5;
    }
    #highlight-blog a {
        text-decoration: none;
    }

    #highlight-blog .imgover img {
        -webkit-transition: opacity 1s,
         -webkit-transform 1s;
        transition: opacity 1s, transform 1s;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    #highlight-blog .imgover:hover img {
        -webkit-transform: scale3d(1.1,1.1,1);
        transform: scale3d(1.1,1.1,1);
        opacity: 0.4;
        transition: all .5s ease-in-out;
    }
    
    #highlight-blog .home-blog-author{
        font-size: 0.8em;
        font-style: italic;
    }

    #highlight-blog .blog-footer {
        display: inline; float: left;
        padding: 12px 0 0 0; 
        width: 100%;
        border-top: 1px solid #ccc;
    }
    #highlight-blog .blog-footer a {
        font-size: 0.8em;
        color: #005c5c;
    }
    #highlight-blog .blog-footer a span {
        border: 1px solid;
        border-radius: 50%; 
        display: inline-block; 
        margin-right: 3px; 
        padding: 4px 5px;
    }

    #highlight-blog .highlight-blog-title{
        color: black;
    }
</style>
