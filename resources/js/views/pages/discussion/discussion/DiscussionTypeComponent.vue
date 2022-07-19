<template>
   <div>
        <div v-if="!complete" class="pt-5" style="min-height: 50vh">
            <div class="loading-spinner"></div>
        </div>

        <div style="background: #ececec" v-if="complete">
            <app-discussion-type-breadcrumb-component></app-discussion-type-breadcrumb-component>

            <div class="container">
                <div class="row">
                    <section class="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="300ms">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 pt-5">
                                    <div class="large-12">
                                        <div class="large-12 forum-category rounded top">
                                            <div class="large-8 small-10 column lpad" style="padding: 10px 10px 10px 40px;">
                                                {{ nameType }}
                                            </div>
                                            <div class="large-4 small-2 column lpad ar">
                                                <a data-connect>
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
                                            <div class="large-12 forum-topic" v-for="(value, index) in discussionsWithType" style="background: #fff" :key="index">
                                                <div class="large-1 column lpad">
                                                    <i class="fa fa-comments" style="color: #0d3f81"></i>
                                                </div>
                                                <div class="large-7 small-8 column lpad">
                                                    <span class="overflow-control">
                                                    <!-- <router-link :to="{ name: 'DiscussionDetailsComponent', params: {discussion_type_id: value.discussion_type_id, id_discussion: value.id}}" style="white-space: nowrap; width: 100%; overflow: hidden; text-overflow: '...';" class="link-item-discussion">{{ value.title }}</router-link> -->
                                                    <a href="javascript:void(0)" style="white-space: nowrap; width: 100%; overflow: hidden; text-overflow: '...';" class="link-item-discussion" v-on:click="incrementView(value.id, value.discussion_type_id)">{{ value.title }}</a>
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
                                                    <span><router-link :to="{ name: 'ProfileUser', params: {id: value.id_user }}" style="white-space: nowrap; width: 100%; overflow: hidden; text-overflow: '...';" class="link-item-discussion">{{ value.name }}</router-link></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                
                                </div>
                                <!-- end col-md-12 -->
                                
                                <div class="col-md-12 pt-5 wow fadeInLeft animated news-all" data-wow-duration="500ms" data-wow-delay="300ms">
                                    <div class="section-row">
                                        <pagination v-bind:pagination="pagination" v-on:click.native="getdiscussionWithType(pagination.current_page)" :offset="4"></pagination>
                                    </div>
                                </div>
                            </div>
                            
                        </div><!-- container -->
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DiscussionTypeBreadcrumbComponent from './DiscussionTypeBreadcrumbComponent.vue'
    import Pagination from '../../../../components/pages/Pagination.vue';

    export default {
        components :{
            appDiscussionTypeBreadcrumbComponent: DiscussionTypeBreadcrumbComponent,
            Pagination: Pagination
        },
        data(){
            return {
                discussion_type_id: 0,
                counter: 0,
                pagination: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                offset: 4,
                nameType: '',
                discussionsWithType: [],
                complete: false
            }
        },
        mounted (){
            this.getdiscussionPaginateWithPage(this.pagination.current_page);

            $(document).ready( function() {
                $('a[data-connect]').click( function() {
                    var i = $(this).find('i');
                    i.hasClass('fa-caret-square-o-up') ? i.removeClass('fa-caret-square-o-up').addClass('fa-caret-square-o-down') : i.removeClass('fa-caret-square-o-down').addClass('fa-caret-square-o-up');
                    $(this).parent().parent().toggleClass('all').next().slideToggle();
                });
            });
            
        },
        created(){
            this.getdiscussionPaginate();
        },
        methods:{
            getdiscussionPaginate(){
                this.discussion_type_id = this.$route.params.discussion_type_id
                this.axios.get(`/api/discussionpaginate/${this.$route.params.discussion_type_id}/paginate`).then((response) => {
                    this.nameType = response.data.data[0].name
                    this.discussionsWithType = response.data.data
                    this.complete = true
                }).catch((error) => {
                    console.log(error)
                })
            },
            getdiscussionPaginateWithPage (page) {
                this.axios.get('/api/discussionpaginate/' + this.discussion_type_id + '/paginate?page='+page)
                    .then((response) => {
                        this.nameType = response.data.data[0].name
                        this.discussionsWithType = response.data.data
                        this.pagination = response.data
                    })
            },
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
        }
    }
</script>


<style lang="css" scoped src="./../style/DiscussionType.css"></style>