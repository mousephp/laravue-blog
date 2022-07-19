<template>
<div class="col-md-4">
    <!-- <app-blog-all-right-component></app-blog-all-right-component> -->
    <div class="container" style="border-radius: 0.5rem; background: #fff;border-width: 1px; border-style: solid; border-top-color: #dfdfdf; border-right-color: #d8d8d8; border-bottom-color: #cbcbcb;border-left-color: #d8d8d8;">
    <div class="row">
        <div class="col-md-12">
            <!-- post widget -->
            <div class="aside-widget wow fadeInRight animated" data-wow-duration="500ms" data-wow-delay="300ms">
                <div class="section-title pt-4" style="border-bottom: 1px solid #ccc">
                    <h2><b class="blog-title">BÀI VIẾT XEM NHIỀU</b></h2>
                </div>

                <div class="container">
                    <div class="post post-widget pt-4 pb-4" v-for="(value, index) in blogMostView"  :key="index">
                        <a class="post-img imgover-small" href="javascript:void(0)" v-if="!checkImageSVGMostView(index)">
                            <img v-bind:src="`images/blog/${value.photo}`" alt="" style="max-height: 200px">
                        </a>
                        <a class="post-img imgover" href="javascript:void(0)" v-if="checkImageSVGMostView(index)" v-html="value.photo" style="max-height: 100px; max-width: 100px;border-right: 8px solid black;border-bottom: 8px solid black;">
                        </a>
                        <div class="post-body">
                            <router-link :to="{ name: 'BlogDetails', params: { id: value.id }}">
                                <h3 class="post-title link-item-normal font-weight-bold">{{ value.title }}</h3>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>					
            <!-- /post widget -->

            <!-- catagories -->
            <div class="aside-widget wow fadeInRight animated" data-wow-duration="500ms" data-wow-delay="600ms">
                <div class="section-title">
                    <h2>Danh mục</h2>
                </div>
                <div class="category-widget">
                    <ul v-for="(value, index) in categories" :key="index">
                        <li><a class="cat-3">{{value.name}}<span>{{value.countNews}}</span></a></li>
                    </ul>
                </div>
            </div>
            <!-- /catagories -->
            
            <!-- tags -->
            <div class="aside-widget wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="900ms">
                <div class="section-title">
                    <h2>Hashtag</h2>
                </div>
                <div class="tags-widget">
                    <ul  v-for="(value, index) in tags" :key="index">
                        <li><a class="cat-3">{{value.name}}</a></li>										
                    </ul>
                </div>
            </div>
            <!-- /tags -->

            </div>
        </div>
    </div>
</div>
</template>


<script>
	export default {
		data(){
            return {
                categories: {},
                tags: {},
				blogMostView: {},
            }
        },
        created(){
			this.getDataMostView();
        },
        methods:{
        	getDataMostView(){
                this.axios.get(`/api/news/${this.$route.params.id}`).then((response) =>{
					this.tags = response.data.tags		
                    this.categories = response.data.categories		
				}).catch((error) => {
					console.log(error)
				})
	        },
        	checkImageSVGMostView(index){
				if(this.blogMostView.length > 0){
					if('photo' in this.blogMostView[index]){
						return this.blogMostView[index].photo.toString().indexOf('<svg') != -1
					}
				}
				return false;
			}
        }
	}
</script>
