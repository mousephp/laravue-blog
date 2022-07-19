<template>
	<div class="content">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">                      
					<div class="card mb-3">
						<div class="card-header">
							<h3><i class="fa fa-pencil"></i> Chỉnh sửa</h3>
						</div>
							
						<div class="card-body">
							<form v-on:submit.prevent="update">
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label class="font-weight-bold">Tiêu đề</label>
										<input type="text" class="form-control" id="" aria-describedby="" placeholder="Nhập tiêu đề" v-model="discussion.title" :class="{ 'is-invalid' : errors.title }">
										<span v-if="errors.title" :class="['text text-danger']">{{ errors.title }}</span>
									</div>
								</div>
								
								<div class="col-md-6">
									<label class="col-form-label">Trạng thái</label>
									<div class="form-group">
										<select class="form-control select2" v-model='discussion.status' name="status" style="width: 100%;">
											<option value="active">active</option>
											<option value="inactive">inactive</option>
										</select>
										<span v-if="errors.status" :class="['text text-danger']">{{ errors.status }}</span>
									</div>
								</div>

								<div class="col-md-6">
									<div class="form-group">
										<label class="font-weight-bold">Nội dung</label>
										<ckeditor :editor="editor" v-model="discussion.content" :config="editorConfig" :class="{ 'is-invalid' : errors.content }"></ckeditor>
										<span v-if="errors.content" :class="['text text-danger']">{{ errors.content }}</span>
									</div>
								</div>

								<div class="col-md-6">
									<label for="example-text-input" class="col-sm-2 col-form-label">Type</label>
									<div class="form-group">
										<select class="form-control input-width" name="discussion_type_id" v-model='discussion.discussion_type_id'>
											<option v-for="(type,index) in discussion_types" :key="index" :value="type.id" :selected="type.id == discussion.discussion_type_id">{{ type.name }}</option>
										</select>
									</div>
								</div>

								<div class="col-md-12"></div>
								<!-- Lưu -->
								<div class="col-md-6">
									<button type="submit" class="btn btn-primary float-right"><span class="btn-label"><i class="fa fa-save"></i></span> Lưu lại</button>
								</div>
								<div class="col-md-6">
									<router-link :to="{ name: 'DiscussionList'}" class="btn btn-danger"><span class="btn-label"><i class="fa fa-times"></i></span>Hủy bỏ</router-link>
								</div>
								<!-- end lưu -->

							</div> <!-- end row -->

							</form>
						</div>  <!-- end card-body -->                        
					</div><!-- end card-->                  
				</div>
			</div>
		</div>
		<!-- END container-fluid -->
	</div>
	<!-- END content -->
</template>


<script>
	import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
	import { mapGetters } from 'vuex'

	export default {
		data(){
			return {
				errors: [],

				editor: ClassicEditor,
				editorData: '<p>Content of the editor.</p>',
				editorConfig: {}	
			}
		},
		beforeCreate(){
			this.$store.dispatch('Discussion/getDiscussion', this.$route.params.id)
			this.$store.dispatch('DiscussionType/getDiscussionTypes')
		},
		computed: {
			...mapGetters({discussion: 'Discussion/discussion'}),
			...mapGetters({discussion_types: 'DiscussionType/discussion_types'})
		},
		methods: {
			update(){
				this.$Progress.start();
				this.$store.dispatch('Discussion/editDiscussion', this.discussion).then((response) => {
					this.$router.push({name: 'DiscussionList'});
					this.errors = [];
					this.$Progress.finish();
					this.$notify({
						type: 'success', 
						title: 'Discussion',
						text: 'Sửa thành công!'
					});
				}).catch(error => {
					this.errors = error.response.data.errors;    
  				  	this.$Progress.fail();	
					this.$notify({
						type: 'error', 
						title: 'Discussion',
						text: 'Sửa không thành công!'
					});
				});
			},
		}
	}
</script>