<template>
    <div>
        <div v-if="!complete" class="pt-5" style="min-height: 50vh">
            <div class="loading-spinner"></div>
        </div>
    	<section style="padding-bottom: 40px; background: #ececec" class="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="300ms" v-if="complete">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 pt-5">
                        <div class="large-12">
                            <div class="large-12 forum-category rounded top">
                                <div class="large-8 small-10 column lpad" style="padding: 10px 10px 10px 40px;">
                                    Thảo luận mới nhất
                                </div>
                                <div class="large-4 small-2 column lpad ar">
                                    <a href="javascript:void(0)" class="create_discussion" v-on:click="createNewDiscussion()">Tạo thảo luận mới</a>
                                    <a data-connect><i class="fa fa-caret-square-o-up"></i></a>
                                </div>
                            </div>

                            <div class="toggleview">
                                <div class="large-12 forum-head">
                                    <div class="large-8 small-8 column lpad">
                                        ...
                                    </div>
                                    <div class="large-1 column lpad">
                                        Thích
                                    </div>
                                    <div class="large-1 column lpad">
                                        Xem
                                    </div>
                                    <div class="large-2 small-4 column lpad">
                                        ...
                                    </div>
                                </div>
                                <div class="large-12 forum-topic" v-for="(value, index) in newdiscussion" :key="index" style="background: #fff">
                                    <div class="large-1 column lpad">
                                        <i class="fa fa-comments" style="color: #0d3f81"></i>
                                    </div>
                                    <div class="large-7 small-8 column lpad">
                                        <span class="overflow-control">
                                        
                                            <a href="javascript:void(0)" style="white-space: nowrap; width: 100%; overflow: hidden; text-overflow: '...';" class="link-item-discussion" v-on:click="incrementView(value.id, value.discussion_type_id)">{{ value.title }}</a>

                                            <!--<router-link :to="{ name: 'DiscussionDetailsComponent', params: {id: value.id }}" class="btn btn-success btn-sm">
                                                {{ value.title }}
                                            </router-link>-->

                                        </span>
                                            <span class="overflow-control">
                                        {{ value.content }}
                                        </span>
                                    </div>
                                    <div class="large-1 column lpad">
                                        <span class="center">{{ value.countLikeDiscussion }}</span>
                                    </div>
                                    <div class="large-1 column lpad">
                                        <span class="center">{{ value.view }}</span>
                                    </div>
                                    <div class="large-2 small-4 column pad">
                                        <span>{{ convertDate(value.created_at) }}</span>
                                        <span><router-link :to="{ name: 'Profile', params: {id: value.id_user}}" style="white-space: nowrap; width: 100%; overflow: hidden; text-overflow: '...';" class="link-item-discussion">{{ value.name }}</router-link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                    <!-- end col-md-12 -->
                </div>
            </div><!-- container -->
    	</section>
    </div>
</template>


<script>
	export default {
        data(){
            return {
                newdiscussion: {},
                complete: false,
                isLogin: this.$store.state.ClientAuth.token !== null,
                users: null
            }
        },
		mounted (){
			$(document).ready( function() {
                $('a[data-connect]').click( function() {
                    var i = $(this).find('i');
                    i.hasClass('fa-caret-square-o-up') ? i.removeClass('fa-caret-square-o-up').addClass('fa-caret-square-o-down') : i.removeClass('fa-caret-square-o-down').addClass('fa-caret-square-o-up');
                    $(this).parent().parent().toggleClass('all').next().slideToggle();
                });
            });
		},
        created(){
            this.users = JSON.parse(localStorage.getItem('tpack.user'))
            
            this.axios.get('/api/newdiscussion').then((response) => {
                this.newdiscussion = response.data.newdiscussion
                this.complete = true
            }).catch((error) =>{
                console.log(error)
            })
        },
        methods:{
            convertDate(inputFormat) {
                var d = new Date(inputFormat);
                return [this.pad(d.getDate()), this.pad(d.getMonth()+1), d.getFullYear()].join('/');
            },
            pad(s){
                return (s < 10) ? '0' + s : s;
            },
            incrementView(id, discussion_type_id){
                this.axios.get('/api/discussion/incrementview/' + id).then((response) =>{
                    this.$router.push({ name: 'DiscussionDetailsComponent', params: {discussion_type_id: discussion_type_id, discussion_id: id}})
                }).catch(error => {
                    console.error(error);
                })
            },
            createNewDiscussion(){
                if(this.isLogin !== false){
                    this.$router.push({ name: 'UserDiscussionCreate'})
                } else {
                    this.$notify({
                        type: 'error', 
                        title: 'Discussion',
                        text: 'Bạn cần đăng nhập để thực hiện chức năng này'
                    });
                }
            }
        }
	}
</script>


<style lang="css" scoped src="./style/DiscussionNew.css"></style>

