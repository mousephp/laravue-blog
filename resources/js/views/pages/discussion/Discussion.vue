<template>
<div>
    <section style="padding-bottom: 30px; background: #ececec" class="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="300ms" v-for="(value_type, index_type) in discussiontype" :key="index_type">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 pt-5">
                        <div class="large-12">
                            <div class="large-12 forum-category rounded top">
                                <div class="large-8 small-10 column lpad" style="padding: 10px 10px 10px 40px;">
                                <router-link :to="{ name: 'DiscussionTypeComponent', params: {discussion_type_id: value_type.id }}" class="name-discussion-type">{{ value_type.name }}</router-link>
                                </div>

                                <div class="large-4 small-2 column lpad ar">
                                    <a href="javascript:void(0)" class="create_discussion" v-on:click="createNewDiscussion()">Tạo thảo luận mới</a>                                                                
                                    <a v-on:click="toggleIcon(value_type.id)" v-bind:id="`discussion-${value_type.id}`">
                                    <i class="fa fa-caret-square-o-up"></i>
                                    </a>
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
                                <div style="display: none;">{{ loop = 0 }}</div>
                                <div class="large-12 forum-topic" v-for="(value, index) in discussions" :key="index" v-if="(value.discussion_type_id == value_type.id) && (++loop <= 5)">
                                    <div class="large-1 column lpad">
                                             <!-- -->
                                    </div>
                                    <div class="large-7 small-8 column lpad">                                
                                        <span class="overflow-control">
                                          <a href="javascript:void(0)" style="white-space: nowrap; width: 100%; overflow: hidden; text-overflow: '...';" class="link-item-discussion" v-on:click="incrementView(value.id, value_type.id)"><i class="fa fa-comments" style="color: #0d3f81"></i> {{ value.title }}</a>      
                                        </span>
                                        <span class="overflow-control">
                                        {{ value.content }}
                                        </span>
                                    </div>
                                    <div class="large-1 column lpad">
                                        <span class="center">{{ value.like }}</span>
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
                discussiontype: {},
                discussions: {},
                isLogin: localStorage.getItem('token') != null,
                users: null
            }
        },
        created(){
            // this.users = JSON.parse(localStorage.getItem('token.user'))
            // console.log('login:'+this.isLogin)
            
            this.getDiscussiontype();

            this.getDiscussion();
        },
        computed: {
            // activeDiscussionTypes: function () {
            //     return this.discussions.filter(function (value) {
            //         if(value.discussion_type_id == value_type.id){

            //         }
            //     })
            // }
        },
        methods:{
            getDiscussiontype(){
                this.axios.get('/api/discussiontype').then((response) => {
                    this.discussiontype = response.data
                }).catch((error) =>{
                    console.log(error)
                })
            },
            getDiscussion(){
                this.axios.get('/api/discussions').then((response) => {
                    this.discussions = response.data
                }).catch((error) =>{
                    console.log(error)
                })
            },
            incrementView(id, discussion_type_id){
                this.axios.get('/api/discussion/incrementview/' + id).then((response) =>{
                    this.$router.push({ name: 'DiscussionDetailsComponent', params: {discussion_type_id: discussion_type_id, discussion_id: id}})
                }).catch(error => {
                    console.error(error);
                })
            },
            convertDate(inputFormat) {
                var d = new Date(inputFormat);
                return [this.pad(d.getDate()), this.pad(d.getMonth()+1), d.getFullYear()].join('/');
            },
            pad(s){
                return (s < 10) ? '0' + s : s;
            },
            toggleIcon(index){
                var i = $('#discussion-' + index).find('i');
                i.hasClass('fa-caret-square-o-up') ? i.removeClass('fa-caret-square-o-up').addClass('fa-caret-square-o-down') : i.removeClass('fa-caret-square-o-down').addClass('fa-caret-square-o-up');
                $('#discussion-' + index).parent().parent().toggleClass('all').next().slideToggle();
                // console.log(index)
            },
            createNewDiscussion(){
                if(this.isLogin !== false){
                    // if(this.users.email_verified_at == '' || this.users.email_verified_at == null || this.users.email_verified_at == undefined){
                    //     this.$notify({
                    //         type: 'success', 
                    //         title: 'Discussion',
                    //         text: 'Xin chào '+ this.users.name +'.\n Bạn cần xem thư đến trong '+ this.users.email +' để kích hoạt tài khoản trước khi đăng bài'
                    //     });
                    // } else {
                    //     this.$router.push({ name: 'UserDiscussionCreate'})
                    // }
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


<style lang="css" scoped src="./style/DiscussionContent.css"></style>

