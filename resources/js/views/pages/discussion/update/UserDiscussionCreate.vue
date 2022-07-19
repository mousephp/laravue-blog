<template>
	<div>
		<app-user-discussion-create-breadcrumb-component></app-user-discussion-create-breadcrumb-component>
		<div v-if="!complete" class="pt-5" style="min-height: 50vh">
            <div class="loading-spinner"></div>
        </div>
		<section style="padding-bottom: 40px; background: #ececec" class="pt-5 wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="300ms" v-if="complete">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">                      
                        <div class="card mb-3">
                            <div class="card-header">
                                <h3><i class="fa fa-plus" aria-hidden="true"></i> Tạo thảo luận mới</h3>
                            </div>
                                
                            <div class="card-body">
                            	<form v-on:submit.prevent="createDiscussion">
	                                <div class="row">
	                                	<div class="col-md-6">
											<div class="form-group">
												<label class="font-weight-bold">Tiêu đề</label>
												<input type="text" class="form-control" id="" aria-describedby="" placeholder="Nhập tiêu đề" v-model="discussion.title"  :class="{ 'is-invalid' : errors.title }">
												<span v-if="errors.title" :class="['text text-danger']">{{ errors.title }}</span>
											</div>
										</div>

										<div class="col-md-6">
											<label for="example-text-input" class="col-form-label">Đề tài thảo luận</label>
											<div class="form-group">
												<select class="form-control input-width" name="discussion_type_id" v-model='discussion.discussion_type_id'>
													<option disabled value="">Please select one</option>
													<option v-for="(type,index) in discussionTypes" :key="index" :value="type.id" >{{ type.name }}</option>
												</select>
												<span v-if="errors.discussion_type_id" :class="['text text-danger']">{{ errors.discussion_type_id }}</span>
											</div>
										</div>		

										<div class="col-md-12">
											<div class="form-group">
												<label class="font-weight-bold">Nội dung</label>
												<ckeditor :editor="editor" v-model="discussion.content" :config="{placeholder:'Nhập nội dung'}" :class="{ 'is-invalid' : errors.content }"></ckeditor>
												<span v-if="errors.content" :class="['text text-danger']">{{ errors.content }}</span>
											</div>
										</div>
										<!-- <div class="col-md-6"></div> -->
										<!-- Lưu -->
										<div class="col-md-3"></div>
										<div class="col-md-3">
											<button type="submit" class="btn btn-primary float-right"><span class="btn-label"><i class="fa fa-save"></i></span> Lưu lại</button>
										</div>
										<div class="col-md-6">
											<router-link :to="{ name: 'Discussion'}" class="btn btn-danger"><span class="btn-label"><i class="fa fa-times"></i></span>Hủy bỏ</router-link>
										</div>
										<!-- end lưu -->
	                                	
	                                </div> <!-- end row -->

                                </form>
                            </div>  <!-- end card-body -->                        
                        </div><!-- end card-->                  
                    </div>
				</div>
			</div><!-- container -->
    	</section>
	</div>
</template>

<script>
	import UserDiscussionCreateBreadcrumbComponent from './UserDiscussionCreateBreadcrumbComponent.vue';
	import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

	export default {
		components:{
			appUserDiscussionCreateBreadcrumbComponent: UserDiscussionCreateBreadcrumbComponent
		},
		data(){
			return {
				discussion: {},
				discussionTypes: {},
				user: null,
				complete: false,
				errors: [],

				editor: ClassicEditor,
				editorData: '<p>Content of the editor.</p>',
				editorConfig: {}
			}
		},
		created(){
			this.axios.get('/api/discussiontype').then((response) => {
				this.discussionTypes = response.data
				this.complete = true
			}).catch((error) => {
				console.log(error)
			})
		},
		methods: {
			createDiscussion(){
				this.$Progress.start();
				let uri = 'http://127.0.0.1:8000/api/discussion/create';
				this.axios.post(uri, this.discussion).then((response) => {
					this.$router.push({name: 'Discussion'});
					this.$Progress.finish();
					this.$notify({
						type: 'success', 
						title: 'Discussion',
						text: 'Thêm thành công!'
					});
				}).catch(error => {
					this.errors = error.response.data.errors;
  				  	this.$Progress.fail();
					this.$notify({
						type: 'error', 
						title: 'Discussion',
						text: 'Thêm không thành công!'
					});
				});
			}
		}
	}
</script>