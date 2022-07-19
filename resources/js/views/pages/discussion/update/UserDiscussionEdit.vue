<template>
	<div>
		<app-user-discussion-edit-breadcrumb-component></app-user-discussion-edit-breadcrumb-component>
		<div v-if="!complete" class="pt-5" style="min-height: 50vh">
            <div class="loading-spinner"></div>
        </div>

        <section style="padding-bottom: 40px; background: #ececec" class="pt-5 wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="300ms" v-if="complete">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">                      
                        <div class="card mb-3">
                            <div class="card-header">
                                <h3><i class="fa fa-pencil"></i> Chỉnh sửa</h3>
                            </div>
                                
                            <div class="card-body">
                            	<form v-on:submit.prevent="updateDiscussion">
	                                <div class="row">
	                                	<div class="col-md-6">
											<div class="form-group">
												<label class="font-weight-bold">Tiêu đề</label>
												<input type="text" class="form-control" id="" aria-describedby="" placeholder="Nhập tiêu đề" v-model="discussion.title" :class="{ 'is-invalid' : errors.title }">
												<span v-if="errors.title" :class="['text text-danger']">{{ errors.title }}</span>
											</div>
										</div>
	                                	<div class="col-md-6">
											<div class="form-group">
												<label class="font-weight-bold">Đề tài thảo luận</label>
												<select class="form-control input-width" name="discussion_type_id" v-model='discussion.discussion_type_id'>
													<option v-for="(type,index) in discussionTypes" :key="index" :value="type.id" :selected="type.id == discussion.discussion_type_id">{{ type.name }}</option>
												</select>
											</div>
										</div>
										<div class="col-md-12">
											<div class="form-group">
												<label class="font-weight-bold">Nội dung</label>
											    <ckeditor :editor="editor" v-model="discussion.content" :config="editorConfig" :class="{ 'is-invalid' : errors.content }"></ckeditor>
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
	import UserDiscussionEditBreadcrumbComponent from './UserDiscussionEditBreadcrumbComponent.vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

	export default {
		components:{
			appUserDiscussionEditBreadcrumbComponent: UserDiscussionEditBreadcrumbComponent
		},
		data(){
			return {
				complete: false,
				discussion: {},
				discussionTypes: {},
				user: null,

				errors: [],
				editor: ClassicEditor,
				editorData: '<p>Content of the editor.</p>',
				editorConfig: {}
			}
		},
		created(){
			this.loadDiscussionType()
			this.showDiscussion()
		},
		methods: {
			updateDiscussion(){
				this.$Progress.start();
				let uri = `http://127.0.0.1:8000/api/discussion/edit/${this.$route.params.id}`;
				this.axios.put(uri, this.discussion).then((response) => {
					this.$router.push({name: 'Discussion'});
					this.errors = [];
					this.$Progress.finish();
					this.$notify({
						type: 'success', 
						title: 'Discussion',
						text: 'Cập nhập thành công!'
					});
				}).catch(error => {
					this.errors = error.response.data.errors;    
  				  	this.$Progress.fail();	
					this.$notify({
						type: 'error', 
						title: 'Discussion',
						text: 'Cập nhập không thành công!'
					});
				});
			},

			loadDiscussionType(){
				this.axios.get('/api/discussiontype').then((response) => {
					this.discussionTypes = response.data
					this.complete = true
				}).catch((error) => {
					console.log(error)
				})
			},
			showDiscussion(){
				this.axios.get(`/api/discussion/show/${this.$route.params.id}`).then((response) =>{
					this.discussion = response.data
				}).catch(function(error){
					console.log(error)
				})
			}
		}
	}
</script>