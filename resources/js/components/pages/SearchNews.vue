<template>
<div id="blog" class="tab-pane fade">
    <div class="container">
        <hgroup class="mb20">
            <h2 class="lead"><strong class="text-danger">{{ listsearchnews.length }}</strong> kết quả đã được tìm thấy với từ khóa <strong class="text-danger">{{keyword}}</strong></h2>                               
        </hgroup>

        <section class="col-xs-12 col-sm-6 col-md-12">
            <article class="search-result row pt-2" v-for="(value, index) in listsearchnews" :key="index">
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
                                <router-link class="blog-admin link-item-normal" :to="{ name: 'ProfileUser', params: {id: value.user_id}}">{{ value.name }}</router-link>
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
</template>


