<template>
<div class="row">
	<div class="col-sm-8 offset-sm-2">
		<!--<h2 class="">THÊM TIN TỨC</h2>
		<hr>-->
		<div class='card'>
			<div class="card-body table-responsive p-0">
				<form @submit.prevent="create()" method="post" class="form-horizontal" enctype="multipart/form-data">
					<div class="form-group ">
						<label for="example-text-input" class="col-sm-2 col-form-label">Tiêu đề</label>
						<div class="col-sm-12">
							<input class="form-control" type="text" value="" id="example-text-input" name="title" placeholder="NHập Tiêu đề" v-model="news.title" :class="{ 'is-invalid' : errors.title }" >
							<span v-if="errors.title" :class="['text text-danger']">{{ errors.title }}</span>
						</div>
					</div>	

					<div class="form-group">
						<label for="exampleInputFile" class="col-sm-2 col-form-label">File input</label>
						<div class="col-sm-12">
							<input type="file" id="exampleInputFile" v-on:change="onChange">
						</div>
						<span v-if="errors.photo" :class="['text text-danger']">{{ errors.photo }}</span>
					</div>
					<div class="form-group ">
						<label for="example-text-input" class="col-sm-2 col-form-label">Tác giả</label>
						<div class="col-sm-12">
							<select class="form-control input-width" name="user" v-model="news.user_id" >
								<option disabled value="">Please select one</option>
								<option v-for="(user, index) in users" :value="user.id" :key="index">{{user.name}}</option>
							</select>
							<span v-if="errors.user_id" :class="['text text-danger']">{{ errors.user_id }}</span>
						</div>
					</div>	
	
					<div class="form-group ">
						<label for="example-text-input" class="col-sm-2 col-form-label">Quote</label>
						<div class="col-sm-12">				
							<ckeditor :editor="editor" v-model="news.quote" :config="{placeholder:'Quote'}" :class="{ 'is-invalid' : errors.quote }"></ckeditor>
						</div>
						<span v-if="errors.title" :class="['text text-danger']">{{ errors.title }}</span>
					</div>	

					<div class="form-group">
						<label for="example-text-input" class="col-sm-2 col-form-label">Nội dung</label>
						<div class="col-sm-12">
							<ckeditor :editor="editor" v-model="news.content" :config="{placeholder:'Nội dung'}" :class="{ 'is-invalid' : errors.content }"></ckeditor>					
						</div>
						<span v-if="errors.content" :class="['text text-danger']">{{ errors.content }}</span>
					</div>	
					<div class="form-group ">
						<label for="example-text-input" class="col-sm-2 col-form-label">Nổi bật</label>
						<div class="col-sm-12">
							<input type="radio" name="featured" value="1" v-model='news.is_featured'>có
							<input type="radio" name="featured" v-model='news.is_featured' value="0">Không
						</div>
					</div>	
					
					<div class="form-group ">
						<label for="example-text-input" class="col-sm-2 col-form-label">Thể loại</label>
						<div class="col-sm-12">
							<select class="form-control input-width" name="category" v-model='news.cate_id'>
								<option disabled value="">Please select one</option>
								<option v-for="(cate, index) in categories" :key="index" :value="cate.id" >{{ cate.name }}</option>
							</select>
							<span v-if="errors.cate_id" :class="['text text-danger']">{{ errors.cate_id }}</span>
						</div>
					</div>	

					
					<div class="form-group ">
						<label for="example-text-input" class="col-sm-2 col-form-label">Tags</label>
						<div class="col-sm-12">
							<select class="form-control input-width" name="tag" v-model='news.tag_id'>
								<option disabled value="">Please select one</option>
								<option v-for="(tag, index) in tags" :key="index" :value="tag.id" >{{ tag.name }}</option>
							</select>
							<span v-if="errors.tag_id" :class="['text text-danger']">{{ errors.tag_id }}</span>
						</div>
					</div>	
					
					<div class="form-group ">
						<label class="col-sm-2 col-form-label">Trạng thái</label>
						<div class="col-sm-12">
							<select class="form-control select2" v-model='news.status' name="status"  style="width: 100%;">
							<option value="active">active</option>
							<option value="inactive">inactive</option>
							</select>
						</div>
					</div>

					<div class="form-group text-center">
						<div class="col-sm-12">
							<button class="btn btn-lg btn-primary">Thêm</button>
							<button type="reset" class="btn btn-lg btn-danger">Hủy bỏ</button>
						</div>
					</div>	
				</form>
			</div>
		</div> 		
	</div>
</div>
</template>


<script>
	import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
	import { mapGetters } from 'vuex'

	export default {
		data () {
			return {
				news: {
					title: '',
					content: '',
					quote: '',
					is_featured: '1',
					cate_id: '',					
					user_id: '',
					status: 'active',
					photo: '',
					tag_id: '',
				},
				errors: [],

				editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                }
			}
		},
		beforeCreate (){
			this.$store.dispatch('fetch', this.categories);
			this.$store.dispatch('tag/fetch', this.tags);
			this.$store.dispatch('User/getUsers')
		},
		computed: {
			...mapGetters({categories: 'categories'}),
			...mapGetters({tags: 'tag/tags'}),
			...mapGetters({users: 'User/users'})
		},
		methods: {
			onChange(e) {
                this.news.photo = e.target.files[0];
            },
		    create() {
				this.$Progress.start();
				const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }

                let data = new FormData();
                data.append('photo', this.news.photo);
                data.append('title', this.news.title);
                data.append('content', this.news.content);
                data.append('quote', this.news.quote);
                data.append('is_featured', this.news.is_featured);
                data.append('cate_id', this.news.cate_id);
                data.append('user_id', this.news.user_id);
                data.append('status', this.news.status);
				data.append('tags', this.news.tag_id);

				this.$store.dispatch('News/addNews',data,config).then((response) => {	
					this.errors = [];
					this.$Progress.finish();
					this.$notify({
						type: 'success', 
						title: 'news',
						text: 'Thêm thành công!'
					});
				}).catch(error => {
					this.errors = error.response.data.errors;  
  				  	this.$Progress.fail();	
					this.$notify({
						type: 'error', 
						title: 'news',
						text: 'Thêm không thành công!'
					});			
				});
			},			

		}
  	}
</script>
     