<template>
    <div>
        <section class="global-page-header">
            <div class="container wow fadeInDown" data-wow-delay=".3s">
                <div class="row">
                    <div class="col-md-12">
                        <div class="block">
                            <h2>Tìm kiếm</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="ss-style-zigzag">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="600ms">
                        <ol class="breadcrumb mt-2">
                            <li class="breadcrumb-item"><router-link :to="{path: '/'}"><i class="fa fa-home"></i> Trang chủ</router-link></li>
                            <li class="breadcrumb-item active">Tìm kiếm</li>
                        </ol>
                    </div>
                    <div class="col-md-4 wow fadeInRight animated" data-wow-duration="500ms" data-wow-delay="600ms">
                        <form class="form-inline">
                            <input class="form-control mr-sm-2 mt-3" type="search" placeholder="Nhập từ khóa">
                            <button class="btn btn-primary mt-3" type="button" v-on:click="search()">Tìm kiếm</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
            <div class="section mb-5">
            <div v-if="!complete" class="pt-5" style="min-height: 50vh">
                <div class="loading-spinner"></div>
            </div>
            <!-- container -->
            <div class="container py-4" style="border-radius: 0.5rem; background: #fff;border-width: 1px; border-style: solid; border-top-color: #dfdfdf; border-right-color: #d8d8d8; border-bottom-color: #cbcbcb;border-left-color: #d8d8d8;" v-if="complete">
                <!-- row -->
                <div class="row">
                    <div class="col-md-12 wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="300ms">
                        <h2 class="pb-4"><b>KẾT QUẢ TÌM KIẾM</b></h2>
                        <ul id="tabsJustified" class="nav nav-tabs">
                            <li class="nav-item"><a href="" data-target="#blog" data-toggle="tab" class="nav-link text-uppercase">Tin tức</a></li>
                            <li class="nav-item"><a href="" data-target="#discussion" data-toggle="tab" class="nav-link text-uppercase">Thảo luận</a></li>
                        </ul>
                        <br>
                        <div id="tabsJustifiedContent" class="tab-content">
                            
                        <!--<app-search-news-component></app-search-news-component>                       
                        <app-search-discussion-component></app-search-discussion-component>-->



                            <div id="blog" class="tab-pane fade">
                                <div class="container">
                                    <hgroup class="mb20">
                                        <h2 class="lead"><strong class="text-danger">{{ listsearchnews.length }}</strong> kết quả đã được tìm thấy với từ khóa <strong class="text-danger">{{keyword}}</strong></h2>                               
                                    </hgroup>

                                    <section class="col-xs-12 col-sm-6 col-md-12">
                                        <article class="search-result row pt-2" v-for="(value, index) in listsearchnews"  :key='index'>
                                            <div class="col-xs-12 col-sm-12 col-md-3">
                                                <a href="javascript:void(0)" title="" v-if="!checkImageSVG(index)">
                                                    <img :src="`images/blog/${value.photo}`" alt="" style="height: 140px; width: 250px" class="img-thumbnail" />
                                                </a>
                                                <a href="javascript:void(0)" title="" v-if="checkImageSVG(index)" v-html="value.photo">
                                                </a>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-2">
                                                <ul class="meta-search">
                                                    <li><i class="fa fa-calendar"></i> <span>{{convertDate(value.created_at)}}</span></li>
                                                    <li>
                                                        <i class="fa fa-user"></i> 
                                                        <span>
                                                            <router-link class="blog-admin link-item-normal" :to="{ name: 'profile', params: {id: value.user_id}}">{{ value.user }}</router-link>
                                                        </span>
                                                    </li>
                                                    <li><i class="fa fa-comment"></i> <span>{{ value.view }}</span></li>
                                                    <li><i class="fa fa-thumbs-o-up"></i> <span>{{ value.like }}</span></li>
                                                </ul>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-7 excerpet">
                                                <router-link :to="{ name: 'BlogDetails', params: {id: value.id }}" class="link-item-normal font-weight-bold">
                                                    <h3 class="post-title news-title" v-on:click="incrementView(value.id)">{{ value.title }}</h3>
                                                </router-link>
                                                <p>{{ value.description }}</p>
                                            </div>
                                            <span class="clearfix"></span>
                                        </article>
                                    </section>
                                </div>
                            </div>

                            <div id="discussion" class="tab-pane fade">
                                <div class="container">
                                    <hgroup class="mb20">
                                        <h2 class="lead"><strong class="text-danger">{{listsearchdiscussions.length}}</strong> kết quả đã được tìm thấy với từ khóa <strong class="text-danger">{{keyword}}</strong></h2>                               
                                    </hgroup>
                                    <div class="row" v-if="listsearchdiscussions.length > 0">
                                        <div class="col-md-12 pt-4">
                                            <div class="large-12">
                                                <div class="large-12 forum-category rounded top">
                                                    <div class="large-8 small-10 column lpad" style="padding: 10px 10px 10px 40px;">
                                                        Thảo luận
                                                    </div>
                                                    <div class="large-4 small-2 column lpad ar">
                                                        <i class="fa fa-caret-square-o-up"></i>
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
                                                    <div class="large-12 forum-topic" v-for="(value, index) in listsearchdiscussions" style="background: #fff" :key='index'>
                                                        <div class="large-1 column lpad">
                                                            <i class="fa fa-comments" style="color: #0d3f81"></i>
                                                        </div>
                                                        <div class="large-7 small-8 column lpad">
                                                           
                                                            <span class="overflow-control">
                                                            <a href="javascript:void(0)" style="white-space: nowrap; width: 100%; overflow: hidden; text-overflow: '...';" class="link-item-discussion" v-on:click="incrementViewDiscussion(value.id, value.discussion_type_id)">{{ value.title }}</a>
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
                                                            <span>
                                                                <router-link :to="{ name: 'profile', params: {id: value.user_id}}" style="white-space: nowrap; width: 100%; overflow: hidden; text-overflow: '...';" class="link-item-discussion">{{ value.name }}</router-link>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                        
                                        </div>
                                        <!-- end col-md-12 -->
                                    </div>
                                </div><!-- container -->
                            </div>


                        </div>

                    </div>
                </div>
                <!-- /row -->
            </div>
            <!-- /container -->
        </div>
    </div>
</template>

<script>
    // import SearchNewsComponent from './SearchNews.vue';
    // import SearchDiscussionComponent from './SearchDiscussion.vue';

    export default {
        // components: {
        //     appSearchNewsComponent: SearchNewsComponent,
        //     appSearchDiscussionComponent: SearchDiscussionComponent
        // },
        data() {
            return {
                listsearchnews: {},
                listsearchdiscussions: {},
                complete: false,
                keyword: '',
            }
        },
        created(){
            this.getData()
        },
        watch: {
            '$route' (to, from) {
                this.getData()                
            }
        },
        methods:{
            search(){
                this.complete = false
                var input = document.getElementsByTagName('input')[0].value.trim()
                if(input.length == 0){
                    alertify.set('notifier','position', 'top-center');
                    alertify.error('Bạn chưa nhập từ khóa. Vui lòng nhập lại');
                    this.complete = true
                } else {
                    this.$router.push({ name: 'Search', params: { tukhoa: input}})
                }
            },
            pad(s){
                return (s < 10) ? '0' + s : s;
            },
            convertDate(inputFormat) {
              var d = new Date(inputFormat);
              return [this.pad(d.getDate()), this.pad(d.getMonth()+1), d.getFullYear()].join('/');
            },
            checkImageSVG(index){
                if(this.listsearchnews.length > 0){
                    if('photo' in this.listsearchnews[index]){
                        return this.listsearchnews[index].photo.toString().indexOf('<svg') != -1
                    }
                }
                return false;
            },
            incrementView(id){
                this.axios.get('/api/news/incrementview/' + id).then((response) =>{
                }).catch(error => {
                    console.error(error);
                })
            },
            incrementViewDiscussion(id, discussion_type_id){
                this.axios.get('/api/discussion/incrementview/' + id).then((response) =>{
                    this.$router.push({ name: 'DiscussionDetailsComponent', params: {discussion_type_id: discussion_type_id, discussion_id: id}})
                }).catch(error => {
                    console.error(error);
                })
            },
            getData(){
                this.keyword = this.$route.params.keyword
                this.axios.get('/api/search/' + this.keyword).then((response) => {
                    this.listsearchnews = response.data.news
                    this.listsearchdiscussions = response.data.discussions
                    this.complete = true
                })
            }
        }
    }
</script>


<style lang="css" scoped src="./style/search.css"></style>
