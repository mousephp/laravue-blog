<template>
	<div class="content-page">
		<!-- Start content -->
        <div class="content">
			<div class="container-fluid">
				<div class="row">
					<div class="col-xl-12">
						<div class="breadcrumb-holder">
							<h1 class="main-title float-left">Giới thiệu</h1>
							<ol class="breadcrumb float-right">
								<li class="breadcrumb-item">Admin</li>
								<li class="breadcrumb-item active">Giới thiệu</li>
								<li class="breadcrumb-item active">Chỉnh sửa</li>
							</ol>
							<div class="clearfix"></div>
						</div>
					</div>
				</div>
				<!-- end row -->
				
				<div class="row mb-5">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">                      
                        <div class="card mb-3">
                            <div class="card-header">
                                <h3><i class="fa fa-pencil"></i> Chỉnh sửa</h3>
                            </div>
                                
                            <div class="card-body">
                            	<form v-on:submit.prevent="update">
									<div class="row">
										<div class="col-md-12">
											<div class="form-group">

												<ckeditor :editor="editor" v-model="abouts.content" :config="editorConfig" :class="{ 'is-invalid' : errors.summary }"></ckeditor>

												<input name="image" type="file" id="upload" class="hidden">
											</div>
										</div>
										<!-- Lưu -->
										<div class="col-md-3"></div>
										<div class="col-md-3">
											<button type="submit" class="btn btn-primary float-right"><span class="btn-label"><i class="fa fa-save"></i></span> Lưu lại</button>
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
    </div>
	<!-- END content-page -->
</template>


<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
	data(){
		return {
			abouts: {},
			errors: [],
			editor: ClassicEditor,
			editorData: '<p>Content of the editor.</p>',
			editorConfig: {}
		}
	},
	created(){
		this.axios.get('/api/admins/abouts').then((response) => {
			this.abouts = response.data.abouts
		}).catch((error) => {
			console.log(error)
		})
	},
	
	methods: {
		update(){
			this.$Progress.start();
			let uri = `http://127.0.0.1:8000/api/admins/abouts/${this.$route.params.id}`;
			this.axios.put(uri, this.tag).then((response) => {
				this.$router.push({name: 'About'});
				this.errors = [];
				this.$Progress.finish();
				// this.$toastr.s("<font color='white'>Sửa thành công</font>");
			}).catch(error => {
				this.errors = error.response.data.errors;    
				this.$Progress.fail();	
				// this.$toastr.e("<font color='white'>Sửa thất bại</font>");
			});
		}
	}
}
</script>

<style scoped>
	.hidden{display:none;}
</style>