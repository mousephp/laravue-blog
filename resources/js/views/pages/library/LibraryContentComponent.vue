<template>
    <div>
        <div v-if="!complete" class="pt-5" style="min-height: 50vh">
            <div class="loading-spinner"></div>
        </div>
    	<div v-if="complete">
        	<section id="scroll-position">
        		<div class="container mt-5 mb-5">
                    <div class="row" v-viewer>
                    	<div class="col-md-12">
                            <div class="col-md-12 pl-3 wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="900ms">
                                <div class="separator">
                                    <h1 class="one">
                                        <span class="title blog-title font-weight-bold">HÌNH ẢNH</span>
                                        <span><h5><a href="javascript:void(0)" class="create" v-on:click="CreateImage()">Đăng ảnh mới</a></h5></span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-3 wow fadeInLeft animated mt-3" data-wow-duration="500ms" data-wow-delay="400ms" v-for="(value, index) in images" :key="index">
                            <div class="card p-2">
                               <div class="card">
          							<a href="javascript:void(0)" :title="value.title">
                        				<img :src="'images/library/images/' + value.file_name" class="image card-img-top" height="150">
                    				</a>
        						</div>
                            </div> 
                        </div>
                        <div class="col-md-12 wow fadeInLeft animated mt-3" data-wow-duration="500ms" data-wow-delay="400ms">
                            <div class="section-row">
                                <pagination-image v-bind:pagination="pagination_image" v-on:click.native="getImages(pagination_image.current_page)" :offset="4"></pagination-image>
                            </div>
                        </div>
                    </div>
                </div>
        	</section>

        	<section style="background-color: teal" id="scroll-video" class="pt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 pl-3 wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="900ms">
                            <div class="separator">
                                <h1 class="two">
                                    <span class="title blog-title font-weight-bold">VIDEO</span>
                                    <span><h5><a href="javascript:void(0)" class="create" v-on:click="CreateVideo()">Đăng video mới</a></h5></span>
                                </h1>
                            </div>
                        </div>
                        <div class="col-md-12 wow fadeInLeft animated mt-3" data-wow-duration="500ms" data-wow-delay="400ms">
                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr class="table-warning d-flex">
                                        <th class="col-1">STT</th>
                                        <th class="col-sm-10">Video</th>
                                        <th class="col-sm-1">Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="table-light d-flex" v-for="(value, index) in videos" :key="index"> 
                                        <td class="col-1">{{ index + 1 }}</td>
                                        <td class="col-sm-10">{{ value.title }}</td>
                                        <td class="col-sm-1">
                                            <a :href="value.file_name" target="blank">Xem</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- <div class="col-md-1"></div> -->
                        <div class="col-md-12 wow fadeInLeft animated mt-3" data-wow-duration="500ms" data-wow-delay="400ms">
                            <div class="section-row">
                                <pagination-video v-bind:pagination="pagination_video" v-on:click.native="getVideos(pagination_video.current_page)" :offset="4"></pagination-video>
                            </div>
                        </div>
                        <div class="col-md-12 mb-5"></div>
                    </div>
                </div>
            </section>

            <section style="background-color: white" id="scroll-document" class="pt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 pl-3 wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="900ms">
                            <div class="separator">
                                <h1 class="one">
                                    <span class="title blog-title font-weight-bold" style="background: #fff">TÀI LIỆU</span>
                                    <span><h5><a href="javascript:void(0)" class="create" v-on:click="CreateDocument()" style="background: #fff">Đăng tài liệu mới</a></h5></span>
                                </h1>
                            </div>
                        </div>
                        <div class="col-md-12 wow fadeInLeft animated mt-3" data-wow-duration="500ms" data-wow-delay="400ms">
                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr class="table-primary d-flex">
                                        <th class="col-1">STT</th>
                                        <th class="col-sm-10">Tài liệu</th>
                                        <th class="col-sm-1">Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="table-light d-flex" v-for="(value, index) in documents" :key="index">
                                        <td class="col-1">{{ index + 1 }}</td>
                                        <td class="col-sm-10">{{ value.title }}</td>
                                        <td class="col-sm-1">
                                            <a :href="'/images/library/documents/' + value.file_name" target="blank">Xem</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-md-12 wow fadeInLeft animated mt-3" data-wow-duration="500ms" data-wow-delay="400ms">
                            <div class="section-row">
                                <pagination-document v-bind:pagination="pagination_document" v-on:click.native="getDocuments(pagination_document.current_page)" :offset="4"></pagination-document>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    	</div>
    </div>
</template>


<script>
    import PaginationImage from './PaginationImage.vue';
    import PaginationVideo from './PaginationVideo.vue';
    import PaginationDocument from './PaginationDocument.vue';
    
	export default {
		data() {
		    return {
                isLogin: localStorage.getItem('tpack.jwt') != null,
                users: null,
                images: {},
                videos: {},
                documents: {},
                complete: false,
                // counter: 0,
                pagination_image: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                pagination_video: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                pagination_document: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                offset: 4,
		    }
	  	},
        components: {
            PaginationImage: PaginationImage,
            PaginationVideo: PaginationVideo,
            PaginationDocument: PaginationDocument,
        },
		created(){
            this.users = JSON.parse(localStorage.getItem('tpack.user'))

            this.axios.get('/api/library/paginate/image').then((response) => {
                this.images = response.data.data
                this.complete = true
            }).catch((error) => {
                console.log(error)
            })

            this.axios.get('/api/library/paginate/video').then((response) => {
                // console.log(response.data)
                this.videos = response.data.data
                this.complete = true
            }).catch((error) => {
                console.log(error)
            })

            this.axios.get('/api/library/paginate/document').then((response) => {
                this.documents = response.data.data
                this.complete = true
            }).catch((error) => {
                console.log(error)
            })
        },
        mounted(){
             this.getImages(this.pagination_image.current_page);
             this.getVideos(this.pagination_video.current_page);
             this.getDocuments(this.pagination_video.current_page);
        },
		methods:{
            getImages (page) {
                axios.get('/api/library/paginate/image?page='+page)
                    .then((response) => {
                        this.images = response.data.data
                        this.pagination_image = response.data
                    })
            },

            getVideos (page) {
                axios.get('/api/library/paginate/video?page='+page)
                    .then((response) => {
                        this.videos = response.data.data
                        this.pagination_video = response.data
                    })
            },

            getDocuments (page) {
                axios.get('/api/library/paginate/document?page='+page)
                    .then((response) => {
                        this.documents = response.data.data
                        this.pagination_document = response.data
                    })
            },
            CreateImage(){
                if(this.isLogin){
                    if(this.users.email_verified_at == '' || this.users.email_verified_at == null || this.users.email_verified_at == undefined){
                        alertify.set('notifier','position', 'buttom-right');
                        alertify.error('Xin chào '+ this.users.name +'.\n Bạn cần xem thư đến trong '+ this.users.email +' để kích hoạt tài khoản trước khi đăng bài');
                    } else {
                        this.$router.push({ name: 'UserLibraryImageCreate'})
                    }
                } else {
                    alertify.set('notifier','position', 'buttom-right');
                    alertify.error('Bạn cần đăng nhập để thực hiện chức năng này');
                }
            },
            CreateVideo(){
                if(this.isLogin){
                    if(this.users.email_verified_at == '' || this.users.email_verified_at == null || this.users.email_verified_at == undefined){
                        alertify.set('notifier','position', 'buttom-right');
                        alertify.error('Xin chào '+ this.users.name +'.\n Bạn cần xem thư đến trong '+ this.users.email +' để kích hoạt tài khoản trước khi đăng bài');
                    } else {
                        this.$router.push({ name: 'UserLibraryVideoCreate'})
                    }
                } else {
                    alertify.set('notifier','position', 'buttom-right');
                    alertify.error('Bạn cần đăng nhập để thực hiện chức năng này');
                }
            },
            CreateDocument(){
                if(this.isLogin){
                    if(this.users.email_verified_at == '' || this.users.email_verified_at == null || this.users.email_verified_at == undefined){
                        alertify.set('notifier','position', 'buttom-right');
                        alertify.error('Xin chào '+ this.users.name +'.\n Bạn cần xem thư đến trong '+ this.users.email +' để kích hoạt tài khoản trước khi đăng bài');
                    } else {
                        this.$router.push({ name: 'UserLibraryDocumentCreate'})
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
    .image {
        cursor: pointer;
        height: 150px;
    }

    .blog-title {
        color: #231557; text-transform: uppercase;
    }

    .table-bordered > tbody > tr > td,
    .table-bordered > tbody > tr > th, 
    .table-bordered > tfoot > tr > td, 
    .table-bordered > tfoot > tr > th, 
    .table-bordered > thead > tr > td, 
    .table-bordered > thead > tr > th {
        border: 1px solid #ccc;
    }

    .separator h1.one .title {
        background: #f8fafc;
    }

    .separator h1.one .create {
        background: #f8fafc;
    }

    .separator h1.two {
        margin-top: 0;
    }

    .separator h1.two:before {
        content: "";
        display: block;
        border-top: solid 1px white;
        width: 100%;
        height: 1px;
        position: absolute;
        top: 50%;
        z-index: 1;
    }

    .separator h1.two .title {
        background: teal;
        padding: 0 20px;
        position: relative;
        z-index: 5;
        text-transform: uppercase;
        color: white;
    }

    .separator h1.two .create {
        background: teal;
        padding: 0 20px;
        position: relative;
        z-index: 5;
        float: right;
        bottom: 2.2em;
    }

    .separator h1.two a {
        text-decoration: none;
        display: inline-block;
        position: relative;
        font-family: Arial;
        font-weight: bold;
        padding: 0 0 5px 0;
        /*color: #e2e61a;*/
        color: white;
    }
    .separator h1.two a:hover{
        /*color: #e8ce0e;*/
        color: #e8ce0e;
    }
    .separator h1.two a:after {
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

    .separator h1.two a:hover:after {
        visibility: visible;
        -webkit-transform: scaleX(1);
        -ms-transform: scaleX(1);
        transform: scaleX(1);
    }

</style>