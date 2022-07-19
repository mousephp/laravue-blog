<template>
	<div>
		<div v-if="!complete" class="pt-5" style="min-height: 50vh">
            <div class="loading-spinner"></div>
        </div>

		<!-- section -->
		<div class="section mb-3" style="background: #ececec">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">
					<div class="col-md-8 p-4" style="border-radius: 0.5rem; background: #fff;border-width: 1px; border-style: solid; border-top-color: #dfdfdf; border-right-color: #d8d8d8; border-bottom-color: #cbcbcb;border-left-color: #d8d8d8;">
						<div class="row">
							<div class="col-md-12">
								<div class="section-title wow fadeInDown" data-wow-delay=".3s">
										<h2 class="text-uppercase font-weight-bold" style="color: #005c5c">{{ news.title }} 	
										<!--<span v-if="isLogin && (news.user_id == users.id)"><router-link :to="{ name: 'UserBlogEdit', params: {id: news.id}}" class="btn btn-success float-right">Chỉnh sửa</router-link></span>-->
										</h2>
										<div class="post-meta pt-2" style="font-size: 0.9em;">
											<a class="post-category cat-3" href="javascript:void(0)">
												 Tên danh mục:  <!--{{news.category.name}} -->
											</a>
											<span>
												<i class="fa fa-user-circle-o" aria-hidden="true"></i> 
												<router-link :to="{ name: 'Profile', params: {id: news.user_id}}" class="mr-2 link-item-normal">{{ news.title }}</router-link>
											</span>
											<span>
												<span style="font-weight: bold;" class="mr-2">·</span>
												<i class="fa fa-clock-o" aria-hidden="true"></i> 
												<span class="mr-2"> {{ convertDate(news.created_at) }}</span>
											</span>
											<span>
												<span style="font-weight: bold;" class="mr-2">·</span>
												<i class="fa fa-eye" aria-hidden="true"></i> 
												<span class="mr-2"> {{ news.view }}</span>
											</span>
											<span>
												<span style="font-weight: bold;" class="mr-2">·</span>
												<i class="fa fa-thumbs-up" style="color: #2793e6;" v-on:click="ClickLikeNews(isLikeNews = true)" v-if="isLikeNews" ></i>
												<i class="fa fa-thumbs-down" v-if="!isLikeNews" v-on:click="ClickLikeNews(isLikeNews = false)"></i>
												<span> {{ countLikeNews }}</span>
											</span>
										</div>
								</div>
							</div>
							<div class="col-md-12 wow fadeInDown animated mb-3 mt-2 pt-2" data-wow-duration="500ms" data-wow-delay="300ms" style="text-align:justify; border-top: 1px solid #ccc" v-html="news.content">								
							</div>


							<div class="col-md-12">
								<div class="section-row" style="border-top: 1px solid #ccc">
									<div class="post-author pt-3">
										<div class="media">
											<div class="media-left">
												<img class="media-object" :src="'images/users/' + news.photo" alt="" v-if="news.photo != null">
												<img class="media-object" :src="'images/users/author.png'" alt="" v-else>
											</div>
											<div class="media-body">
												<div class="media-heading">
													<a href="javascript:void(0)"> <h3>{{ news.name }}</h3></a>
\\
												</div>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- /author -->

							<!-- Comment -->
							<div class="col-md-12" style="font-size: 0.8em">
								<div class="jquery-comments">

									<!-- Thanh navbar comment -->
									<ul class="navigation">
										<div class="navigation-wrapper">
											<li class="active">Mới nhất</li>
										</div>
									</ul>


									<!-- create comment -->
									
								</div>
								<!-- end comments -->
							</div>
							<!-- end .col -->
							<!-- End Comment -->

						</div>
						<!-- end row -->
					</div>



					<!-- BÀI VIẾT XEM NHIỀU-->
 					<news-most></news-most>



				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		
		</div>

	<!-- /section -->
	</div>
</template>



<script>
    import NewsMost from './NewsMost.vue'; 

	export default {
		components: {
			NewsMost
		},
		data(){
            return {    
                isLogin: localStorage.getItem('token.sanctum') != null,
				users: null,
				countLikeNews: 0,
				isLikeNews: false,
				complete: false,
				news: {},
				// user_id: this.users.id,
				status_like: {
					user_id: '',
					new_id: ''
				}
            }
        },
        created(){				
			this.users = JSON.parse(localStorage.getItem('user'))
			// console.log('users:'+this.users.id)
			// console.log('isLogin:'+this.isLogin)		

			this.getNewsDetails();
			
			if(this.$store.state.ClientAuth.token){
				this.likeOrNotLike();
			}

			this.complete = true
        },
		watch: {
			// '$route' (to, from) {
			// 	this.getNewsDetails()				
			// },
			countLikeNews() {}			
		},
        methods:{
        	likeOrNotLike(){
				this.status_like.user_id = this.users.id
				this.status_like.new_id = this.$route.params.id

				axios.post("api/likenews/user/get-status-like", this.status_like ).then((response) =>{
					this.isLikeNews = response.data.status
					console.log("data-like:"+this.isLikeNews)
				}).catch((error) => {
					console.log(error)
				})
			},
			getNewsDetails(){
	        	this.axios.get(`/api/news/${this.$route.params.id}`).then((response) =>{		
					this.news = response.data.news
					this.checkSVG = response.data.blog.photo.indexOf('<svg') != -1
					if(!this.checkSVG){
						this.url = `images/blog/${this.news.photo}`
					}
					this.complete = true
				}).catch((error) => {
					console.log(error)
				})
				// this.getDataLikeBlog()
	        },
			pad(s){
                return (s < 10) ? '0' + s : s;
            },
            convertDate(inputFormat) {
              var d = new Date(inputFormat);
              return [this.pad(d.getDate()), this.pad(d.getMonth()+1), d.getFullYear()].join('/');
            },
			ClickLikeNews(isLike){
				// console.log("click like:"+isLike)
				if(this.$store.state.ClientAuth.token){
					this.status_like.user_id = this.users.id
					this.status_like.new_id = this.$route.params.id
						// console.log('dataPost:'+dataPost.new_id)
					axios.post("api/likenews/user/change", this.status_like).then((response) =>{
						console.log('dataPost:'+response.data.like)
						if (response.data.status) {
							this.$notify({
								type: 'success', 
								title: 'Like',
								text: 'Bạn đã like bài viết!'
							});
						} else {
							this.$notify({
								type: 'wanning', 
								title: 'Like',
								text: 'Bài viết đã được like trước đó!'
							});
						}
					}).catch((error) => {
						console.log('error:'+error)
					})
				}else{
					this.$notify({
						type: 'wanning', 
						title: 'Like',
						text: 'Bạn cần đăng nhập để like bài viết!'
					});
				}
			},
			getDataLikeBlog(){
				// this.axios.get(`/api/likenews/user/${this.users.id}/${this.$route.params.id}`).then((response)=>{
				this.axios.get(`/api/likenews/user/like/${this.$route.params.id}`).then((response)=>{
					this.countLikeNews = response.data.countLikeNews
				}).catch((error)=>{
					console.log(error)
				})
			}
        }
	}
</script>


<style scoped>
	.jquery-comments ul.navigation li.active:after {background: #2793e6 !important;}
    .jquery-comments ul.navigation ul.dropdown li.active {background: #2793e6 !important;}
    .jquery-comments .highlight-background {background: #2793e6 !important;}
    .jquery-comments .highlight-font {color: #2793e6 !important;}
    .jquery-comments .highlight-font-bold {color: #2793e6 !important;font-weight: bold;}
    .jquery-comments ul.main li.comment .wrapper .content p{
		margin: 0;
	}
    /*.jquery-comments .textarea-wrapper .textarea {
    	overflow: hidden;
    }*/
    .wrapper .content {
    	margin-top: 0px;
    }
    .fa-thumbs-up{
    	cursor: pointer;
    }
    .imgover-small {
		display:inline-block; 
		position:relative; 
		max-width:100%;
	}
	.imgover-small::before, .imgover-small::after {
		display:block; 
		position:absolute; 
		content:""; 
		text-align:center; 
		opacity:0; 
		transition: all .5s ease-in-out;
	}
	.imgover-small::before {
		top:0; 
		right:0; 
		bottom:0; 
		left:0;
	}
	.imgover-small::after {
		top:50%; 
		left:50%; 
		width:50px; 
		height:50px; 
		line-height:50px; 
		margin: -12px 0 0 -28px;
		font:normal normal normal 14px/1 FontAwesome; 
		font-weight:900; 
		content:"\f06e";
		font-size:20px;
	}
	.imgover-small:hover::before, .imgover-small:hover::after {
		opacity:1;
	}
	.imgover-small:hover::before {
		background:rgba(0,0,0,.55);
	}
	.imgover-small, .imgover-small:hover::after {
		/*color:#95103B;*/
		color:#02bdd5;
	}
	.blog-title {
        color: #005c5c; text-transform: uppercase;
    }
    .section .section-title {
    	margin-bottom: 0px;
    }
    
    .post {
    	margin-bottom: 0px;
    }
    .post.post-widget {
    	border-bottom: 1px solid #ccc;
    }
    .aside-widget{
    	margin-bottom: 0px;
    }
</style>