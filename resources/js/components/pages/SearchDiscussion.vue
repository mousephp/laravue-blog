<template>
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
                        <div class="large-12 forum-topic" v-for="(value, index) in listsearchdiscussions" style="background: #fff" :key="index">
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
                                    <router-link :to="{ name: 'ProfileUser', params: {id: value.user_id}}" style="white-space: nowrap; width: 100%; overflow: hidden; text-overflow: '...';" class="link-item-discussion">{{ value.name }}</router-link>
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
</template>