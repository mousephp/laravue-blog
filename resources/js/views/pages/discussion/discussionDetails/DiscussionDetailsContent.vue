<template>
	<!-- section -->
	<div class="section">
		<div v-if="!complete" class="pt-5" style="min-height: 50vh">
            <div class="loading-spinner"></div>
        </div>
		<!-- container -->
		<div class="container" v-if="complete">
			<!-- row -->
			<div class="row">
				<div class="col-md-12">
					<div class="section-title wow fadeInDown" data-wow-delay=".3s" style="margin-bottom: 0px;">
						<h2>{{ discussion.title }} 
							<span><router-link :to="{ path: '/discussion/edit/' + discussion.id}" class="btn btn-success float-right">Chỉnh sửa</router-link>
							</span>
						</h2>
						<p v-html="discussion.content"></p>
						<p style="color: #999;">
							<span>
								<i class="fa fa-user-circle-o" aria-hidden="true"></i> 
								<router-link :to="{ name: 'ProfileUser', params: {id: discussion.user_id}}" class="mr-2">{{ discussion.user.name}} </router-link>
							</span>
							<span>
								<span style="font-weight: bold;" class="mr-2">·</span>
								<i class="fa fa-clock-o" aria-hidden="true"></i> 
								<span class="mr-2"> {{ convertDate(discussion.created_at) }}</span>
							</span>
							<span>
								<span style="font-weight: bold;" class="mr-2">·</span>
								<i class="fa fa-eye" aria-hidden="true"></i> 
								<span class="mr-2"> {{ discussion.view }}</span>
							</span>
							<!-- <span>
								<span style="font-weight: bold;" class="mr-2">·</span>
								<i class="fa fa-thumbs-up" style="color: #2793e6;" v-if="isLikeDiscussion" v-on:click="ClickLikeDiscussion(isLikeDiscussion)"></i>
								<i class="fa fa-thumbs-up" v-if="!isLikeDiscussion" v-on:click="ClickLikeDiscussion(isLikeDiscussion)"></i>
								<span> {{ countLikeDiscussion }}</span>
							</span> -->

							<favorite 
							:discussion="discussion.id"
							:favorited="discussion.favorited ? 'true' : 'false' "
							></favorite>
						</p>
					</div>
				</div>


				<div class="col-md-12" v-if="isLogged">
					<div class="jquery-comments pb-5">
						<!-- Thanh navbar comment -->
			         	<!--<ul class="comment-list">
							<Comment :key="comment.id" v-for="comment in comments" :comment="comment"></Comment>
						</ul>-->
						<!-- create comment -->

						<ul class="comment-list">
							<comment ></comment>
						</ul>

						<new-comment ></new-comment>
						
					</div>
			        <!-- end comments -->



					<!-- rating -->
					<div class="card">
						<div class="card-body">
							<h3 class="heading">User Rating</h3>
							<div class="star-rating">
								<star-rating v-model="rating" :increment="0.5" text-class="custom-text"></star-rating>
								<button @click="setRating()" class="btn btn-primary">Publish</button>
							</div>
							<h3 class="heading">Reviews</h3>
							<div class="review-rating">
								<div class="left-review">
									<div class="review-title">{{ totalrate }}</div>
									<div class="review-star">
										<star-rating :inline="true" :read-only="true" :show-rating="false" v-model="totalrate" :increment="0.1" :star-size="20" active-color="#000000"></star-rating>
									</div>
									<div class="review-people"><i class="fa fa-user"></i> {{ totaluser }} total</div>
								</div>
								<div class="right-review">
									<div class="row-bar">
										<div class="left-bar">5</div>
										<div class="right-bar">
											<div class="bar-container">
												<div class="bar-5" style="width: 0%;"></div>
											</div>
										</div>
									</div>
									<div class="row-bar">
										<div class="left-bar">4</div>
										<div class="right-bar">
											<div class="bar-container">
												<div class="bar-4" style="width: 0%;"></div>
											</div>
										</div>
									</div>
									<div class="row-bar">
										<div class="left-bar">3</div>
										<div class="right-bar">
											<div class="bar-container">
												<div class="bar-3" style="width: 0%;"></div>
											</div>
										</div>
									</div>
									<div class="row-bar">
										<div class="left-bar">2</div>
										<div class="right-bar">
											<div class="bar-container">
												<div class="bar-2" style="width: 0%;"></div>
											</div>
										</div>
									</div>
									<div class="row-bar">
										<div class="left-bar">1</div>
										<div class="right-bar">
											<div class="bar-container">
												<div class="bar-1" style="width: 0%;"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div><!--end rating -->


				</div>


				<!-- end .col -->
			</div>
			<!-- /row -->
		</div>
		<!-- /container -->
	
	</div>
	<!-- /section -->
</template>

<script>
// import {mapGetters} from 'vuex'
import Comment from '../../../../components/comments/Comments'
import NewComment from '../../../../components/comments/NewComment'
import Favorite from '../../../../components/pages/Favorite.vue'


export default {
	name: "Comments",
	components: {Comment, NewComment, Favorite},
	data(){
		return {
			discussion: {},
			// isLogin: localStorage.getItem('token') != null,
			isLikeDiscussion: false,
			countLikeDiscussion: 0,
			
			complete: false,

			rating: 0,
			totalrate: 0,
			totaluser: 0,

			isLogged: this.$store.state.ClientAuth.token
		}
	},
	
	created(){
		this.axios.get(`/api/discussion/user/${this.$route.params.discussion_type_id}/${this.$route.params.discussion_id}`).then((response) => {
			this.complete = true
			this.discussion = response.data;
			console.log("discussion-user:"+this.discussion.favorited)
		})

		this.getRating();
	},

	methods:{
		pad(s){
				return (s < 10) ? '0' + s : s;
		},
		convertDate(inputFormat) {
			var d = new Date(inputFormat);
			return [this.pad(d.getDate()), this.pad(d.getMonth()+1), d.getFullYear()].join('/');
		},

		// Star
		setRating() {
			if(this.rating == 0){
				swal('Failed', 'Anda gagal memberikan pernilaian', 'error');
			}else{
				this.axios.post('/api/rating/new', {'discussion':this.$route.params.discussion_id, 'user': this.$store.state.ClientAuth.user.id, 'rating':this.rating })
				// .then(res => res.json())
				.then(data => {
					swal('Thank you!', 'Terima kasih telah memberi rating', 'success');
				}).catch(err => {
					swal('Failed', 'Anda gagal memberikan pernilaian', 'error');
				});
			}
		},
		getRating(){
			this.axios.get(`http://127.0.0.1:8000/api/rating/${this.$route.params.discussion_id}`)
			// .then(res => res.json())
			.then(res => {
				var mydata = res.data;
				this.totaluser = mydata.length;
				var sum = 0;
				for(var i = 0; i < mydata.length; i++){
					sum += parseFloat(mydata[i]['rating']);
				}

				console.log('star:'+this.totaluser)

				var avg = sum/mydata.length
				this.totalrate = parseFloat(avg.toFixed(1));
				var bar1 = 0;
				var bar2 = 0;
				var bar3 = 0;
				var bar4 = 0;
				var bar5 = 0;

				for(var j = 0; j < mydata.length; j++){
					if(parseInt(mydata[j]['rating']) == '1'){
						bar1 += 1
					}
					if(parseInt(mydata[j]['rating']) == '2'){
						bar2 += 1
					}
					if(parseInt(mydata[j]['rating']) == '3'){
						bar3 += 1
					}
					if(parseInt(mydata[j]['rating']) == '4'){
						bar4 += 1
					}
					if(parseInt(mydata[j]['rating']) == '5'){
						bar5 += 1
					}
				}

				$('.bar-5').css('width', bar5+'%');
				$('.bar-4').css('width', bar4+'%');
				$('.bar-3').css('width', bar3+'%');
				$('.bar-2').css('width', bar2+'%');
				$('.bar-1').css('width', bar1+'%');
			})
			.catch(err => {
				console.log(err);
			});
		},
		showCurrentRating: function(rating) {
			this.currentRating = (rating === 0) ? this.currentSelectedRating : "Click to select " + rating + " stars"
		},
		setCurrentSelectedRating: function(rating) {
			this.currentSelectedRating = "You have Selected: " + rating + " stars";
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

	/* comments */
	 .comment-list {
        padding: 1em 0;
        margin-bottom: 15px;
    }


	/* Star Rating */
	* {
		box-sizing: border-box;
	}
	.fa {
		font-size: 25px;
	}
	.left-bar {
		float: left;
		width: 5%;
		margin-top:10px;
	}
	.right-bar {
		margin-top:10px;
		float: left;
		width: 95%;
	}
	.row-bar:after {
		content: "";
		display: table;
		clear: both;
	}
	.review-rating:after {
		content: "";
		display: table;
		clear: both;
	}
	.left-review {
		float: left;
		width: 30%;
		margin-top:10px;
		text-align: center;
	}
	.right-review {
		float: left;
		width: 70%;
		margin-top:10px;
	}
	.review-title{
		font-size: 56pt;
	}
	.review-star{
		margin: 0 0 10px 0;
	}
	.review-people .fa{
		font-size: 11pt;
	}
	.bar-container {
		width: 100%;
		background-color: #f1f1f1;
		text-align: center;
		color: white;
	}
	.bar-5 {height: 18px; background-color: #57bb8a;}
	.bar-4 {height: 18px; background-color: #9ace6a;}
	.bar-3 {height: 18px; background-color: #ffcf02;}
	.bar-2 {height: 18px; background-color: #ff9f02;}
	.bar-1 {height: 18px; background-color: #ff6f31;}
	.star-rating{
		text-align: center;
		margin:auto;
		width: 45%;
	}
	.star-rating .fa:hover{
		color: orange;
	}
	.heading {
		font-size: 25px;
		color: #999;
		border-bottom: 2px solid #eee;
	}
	@media (max-width: 400px) {
		.left-bar, .right-bar, .left-review, .right-review {
			width: 100%;
		}
	}
	.custom-text {
		font-weight: bold;
		font-size: 1.9em;
		border: 1px solid #cfcfcf;
		padding-left: 10px;
		padding-right: 10px;
		border-radius: 5px;
		color: #999;
		background: #fff;
	}
</style>
