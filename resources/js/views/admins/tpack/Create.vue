<template>
	<!-- Start content -->
	<div class="content">
		<div class="container-fluid">			
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">                      
					<div class="card mb-3">
						<div class="card-header">
							<h3><i class="fa fa-pencil"></i> Thêm</h3>
						</div>
							
						<div class="card-body">
							<form v-on:submit.prevent="create">
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Viết tắt</label>
											<input type="text" class="form-control" id="" aria-describedby="" placeholder="Nhập chữ viết tắt" v-model="tpack.text" :class="{ 'is-invalid' : errors.text }">
											<span v-if="errors.text" :class="['text text-danger']">{{ errors.text }}</span>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Tiêu đề</label>
											<input type="text" class="form-control" id="" aria-describedby="" placeholder="Nhập tiêu đề" v-model="tpack.title"  :class="{ 'is-invalid' : errors.title }">
											<span v-if="errors.title" :class="['text text-danger']">{{ errors.title }}</span>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Nội dung</label>
											<ckeditor :editor="editor" v-model="tpack.content" :config="{placeholder:'Nhập nội dung'}" :class="{ 'is-invalid' : errors.content }"></ckeditor>
											<span v-if="errors.content" :class="['text text-danger']">{{ errors.content }}</span>
										</div>
									</div>

									<div class="col-md-6">
										<label class="col-form-label">Trạng thái</label>
										<div class="form-group">
											<select class="form-control select2" v-model='tpack.status' name="status" style="width: 100%;">
												<option value="active">active</option>
												<option value="inactive">inactive</option>
											</select>
											<span v-if="errors.status" :class="['text text-danger']">{{ errors.status }}</span>
										</div>
									</div>

									<div class="col-md-6"></div>
									<!-- Lưu -->
									<div class="col-md-3"></div>
									<div class="col-md-6">
										<button type="submit" class="btn btn-primary float-right"><span class="btn-label"><i class="fa fa-save"></i></span> Lưu lại</button>
									</div>
									<div class="col-md-6">
										<router-link :to="{ name: 'TpackList'}" class="btn btn-danger"><span class="btn-label"><i class="fa fa-times"></i></span>Hủy bỏ</router-link>
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

	export default {
		data(){
			return {
				tpack:{
					title: '',
					text: '',
					content: '',
					status: 'inactive',
				},
				errors: [],

				editor: ClassicEditor,
				editorData: '<p>Content of the editor.</p>',
				editorConfig: {}
			}
		},
		methods: {
			create(){
				this.$Progress.start();
				this.$store.dispatch('Tpack/addTpack', this.tpack).then((response) => {
					this.$notify({
						type: 'success', 
						title: 'Tpack',
						text: 'Thêm thành công!'
					});
					this.$router.push({name: 'TpackList'});
					this.$Progress.finish();
				}).catch(error => {
					this.errors = error.response.data.errors;
  				  	this.$Progress.fail();
					this.$notify({
						type: 'error', 
						title: 'Tpack',
						text: 'Thêm không thành công!'
					});
				});
			}
		}
	}
</script>