<template>
<div class="row">
	<div class="col-sm-8 offset-sm-2">
		<div class='card'>
			<div class="card-body table-responsive p-0">
				<form  v-on:submit.prevent="update" class="form-horizontal" enctype="multipart/form-data">
					<div class="form-group ">
						<label for="example-text-input" class="col-sm-2 col-form-label">Tiêu đề</label>
						<div class="col-sm-12">
							<input class="form-control" type="text" id="example-text-input" name="title" placeholder="Tiêu đề" v-model="news.title" :class="{ 'is-invalid' : errors.title }" >
							<span v-if="errors.title" :class="['text text-danger']">{{ errors.title }}</span>
						</div>
					</div>	

					<div class="form-group">
						<label for="exampleInputFile" class="col-sm-2 col-form-label">File input</label>
						<div class="col-sm-12">
							<input type="file" id="exampleInputFile" v-on:change="onChange" ref="editPostImage">
						</div>
						<img :src="`${news.photo}`" alt="Girl in a jacket" width="100" height="100">
						<span v-if="errors.photo" :class="['text text-danger']">{{ errors.photo }}</span>
					</div>
					<div class="form-group ">
						<label for="example-text-input" class="col-sm-2 col-form-label">Tác giả</label>
						<div class="col-sm-12">
							<select class="form-control input-width" name="user" v-model="news.user_id" >
								<option v-for="(user, index) in users" :value="user.id" :key="index" :selected="user.id == news.user_id">{{user.name}}</option>
							</select>							
						</div>
					</div>	
	
					<div class="form-group ">
						<label for="example-text-input" class="col-sm-2 col-form-label">Quote</label>
						<div class="col-sm-12">				
							<ckeditor :editor="editor" v-model="news.quote" :config="editorConfig" :class="{ 'is-invalid' : errors.quote }"></ckeditor>
						</div>
						<span v-if="errors.quote" :class="['text text-danger']">{{ errors.quote }}</span>
					</div>	

					<div class="form-group">
						<label for="example-text-input" class="col-sm-2 col-form-label">Nội dung</label>
						<div class="col-sm-12">
							<ckeditor :editor="editor" v-model="news.content" :config="editorConfig" :class="{ 'is-invalid' : errors.content }"></ckeditor>					
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
								 <option v-for="(cate,index) in categories" :key="index" :value="cate.id" :selected="cate.id == news.cate_id">{{ cate.name }}</option>
							</select>
							<span v-if="errors.cate_id" :class="['text text-danger']">{{ errors.cate_id }}</span>
						</div>
					</div>	
					<div class="form-group ">
						<label for="example-text-input" class="col-sm-2 col-form-label">Tags</label>
						<div class="col-sm-12">
							<select class="form-control input-width" name="tag" v-model='news.tag_id'>
								<option disabled value="">Please select one</option>
								<option v-for="(tag, index) in tags" :key="index" :value="tag.id" :selected="tag.id == news.tag_id">{{ tag.name }}</option>
							</select>
							<span v-if="errors.tag_id" :class="['text text-danger']">{{ errors.tag_id }}</span>
						</div>
					</div>	
					<div class="form-group ">
						<label class="col-sm-2 col-form-label">Trạng thái</label>
						<div class="col-sm-12">
							<select class="form-control select2" name="status" v-model="news.status">
								<option value="active" :selected="news.status == 'active'">active</option>
								<option value="inactive" :selected="news.status == 'inactive'">inactive</option>
							</select>
						</div>
					</div>

					<div class="form-group text-center">
						<div class="col-sm-12">
							<button type="submit" class="btn btn-lg btn-primary">Sửa</button>
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
				file: '',
				errors: [],
				editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {}
			}
		},

		beforeCreate (){
			this.$store.dispatch('News/getNewItem', this.$route.params.id);
			this.$store.dispatch('fetch', this.categories);
			this.$store.dispatch('tag/fetch', this.tags);
			this.$store.dispatch('User/getUsers')
		},
		computed: {
			...mapGetters({news: 'News/new_item'}),
			...mapGetters({categories: 'categories'}),
			...mapGetters({tags: 'tag/tags'}),
			...mapGetters({users: 'User/users'})
		},
		methods: {
			onChange(e) {
                this.news.photo = e.target.files[0];
            },
		    update() {
				this.$Progress.start();
				const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }

                let formData = new FormData();
                formData.append('new_id', this.$route.params.id);
                formData.append('photo', this.news.photo);
                formData.append('title', this.news.title);
                formData.append('content', this.news.content);
                formData.append('quote', this.news.quote);
                formData.append('is_featured', this.news.is_featured);
                formData.append('cate_id', this.news.cate_id);
                formData.append('user_id', this.news.user_id);
                formData.append('status', this.news.status);
				formData.append('tag_id', this.news.tag_id);
				formData.append('_method', 'PUT');

				this.$store.dispatch('News/editNews',formData,config).then((response) => {//khong thanh cong 'vuex'
					this.errors = [];
					this.$Progress.finish();
					this.$notify({
						type: 'success', 
						title: 'News',
						text: 'Sửa thành công!'
					});
				}).catch(error => {
					this.errors = error.response.data.errors;  
  				  	this.$Progress.fail();	
					this.$notify({
						type: 'error', 
						title: 'News',
						text: 'Sửa không thành công!'
					});			
				});
			},
		}
  	}

</script>
     


