<template>
	<!-- Start content -->
	<div class="content">
		<div class="container-fluid">			
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">                      
					<div class="card mb-3">
						<div class="card-header">
							<h3><i class="fa fa-pencil"></i>Thêm Library</h3>
						</div>
							
						<div class="card-body">
							<form v-on:submit.prevent="create">
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Tiêu đề</label>
											<input type="text" class="form-control" name="title" aria-describedby="" placeholder="Nhập tiêu đề" v-model="library.title"  :class="{ 'is-invalid' : errors.title }">
											<span v-if="errors.title" :class="['text text-danger']">{{ errors.title }}</span>
										</div>
									</div>
									
									<div class="col-md-6">
										<label class="col-form-label">Trạng thái</label>
										<div class="form-group">
											<select class="form-control select2" v-model='library.status' name="status" style="width: 100%;">
												<option value="active">active</option>
												<option value="inactive">inactive</option>
											</select>
											<span v-if="errors.status" :class="['text text-danger']">{{ errors.status }}</span>
										</div>
									</div>

									<div class="col-md-6">
										<label for="example-text-input" class="col-form-label">User</label>
										<div class="form-group">
											<select class="form-control input-width" name="library" v-model='library.user_id'>
												<option disabled value="">Please select one</option>
												<option v-for="(user,index) in users" :key="index" :value="user.id" >{{ user.name }}</option>
											</select>
											<span v-if="errors.user_id" :class="['text text-danger']">{{ errors.user_id }}</span>
										</div>
									</div>	


									<!--  -->
									<div class="col-md-6 text-center">
										<a href="javascript:void(0)" class="btn btn-success" v-on:click="videoHandle()"><span class="btn-label"><i class="fa fa-save"></i></span> Video</a>

										<a href="javascript:void(0)" class="btn btn-success" @click="documentHandle()"><span class="btn-label"><i class="fa fa-save"></i></span> Documen</a>

										<a href="javascript:void(0)" class="btn btn-success" @click="photoHandle()"><span class="btn-label"><i class="fa fa-save"></i></span> Photo</a>

										<br>
										<span v-if="errorLibrary" :class="['text text-danger']">{{ errorLibrary }}</span>
									</div>

									<div class="col-md-6" v-if="document">
										<div class="form-group">
											<label>Document</label>
											<input type="file" class="form-control" id="file" v-on:change="onFileDocumentChange()"/>
											<span v-if="errorDocument" :class="['text text-danger']">{{ errorDocument }}</span>
										</div>
									</div>
									<div class="col-md-6" v-if="video">
										<label class="col-form-label">Video</label>
										<div class="form-group">
											<input type="text" name="video_library" class="form-control" id="" placeholder="Nhập Link Video" v-model='library.file_name' :class="{ 'is-invalid' : errors.video }">
											<span v-if="errors.file_name" :class="['text text-danger']">{{ errors.file_name }}</span>
										</div>
									</div>
									<div class="col-md-6" v-if="photo">
										<label for="exampleInputFile" class="col-form-label">Photo</label>
										<div class="form-group">
											<input type="file" id="fileImage" class="form-control" name="image_library" v-on:change="onFileImageChange">
										</div>
										<span v-if="errorImage" :class="['text text-danger']">{{ errorImage }}</span>
									</div>
									<!--  -->


									<div class="col-md-12"></div>
									<!-- Lưu -->
									<div class="col-md-6">
										<button type="submit" class="btn btn-primary float-right"><span class="btn-label"><i class="fa fa-save"></i></span> Lưu lại</button>
									</div>
									<div class="col-md-6">
										<router-link :to="{ name: 'LibraryList'}" class="btn btn-danger"><span class="btn-label"><i class="fa fa-times"></i></span>Hủy bỏ</router-link>
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
	import { mapGetters } from 'vuex'

	export default {
		data(){
			return {
				library:{
					status: 'inactive',
					title: '',				
					user_id: '',
					photo: '',
					library_type_id: 2
				},
				// libraryTypes: '',
				// users: '',
				errors: [],
				errorLibrary: '',

				video: false,
				document: false,
				photo: false,

				errorImage: '',
				errorDocument: '',
 				file: '',
			}
		},
		// created(){
		// 	this.loadLibraryType();
		// 	this.loadUserType();
		// },
		beforeCreate (){
			this.$store.dispatch('LibraryType/getLibraryTypes', this.library_types);
			this.$store.dispatch('User/getUsers')
		},
		computed: {
			...mapGetters({library_types: 'LibraryType/library_types'}),
			...mapGetters({users: 'User/users'})
		},
		methods: {
			videoHandle(){
				this.video = true

				this.document = false
				this.photo = false
			},
			documentHandle(){
				this.document = true

				this.photo = false
				this.video = false
			},
			photoHandle(){
				this.photo = true

				this.video = false
				this.document = false
			},

			onFileImageChange(e) {               
				var fileInput = document.getElementById('fileImage');
			    var filePath = fileInput.value;
				var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
			    if(!allowedExtensions.exec(filePath)){
			        fileInput.value = '';
					this.errorImage = 'Vui lòng đăng tài liệu với đuôi .jpg|\.jpeg|\.png';
				}else{
					if (fileInput.files && fileInput.files[0]) {
			            this.library.photo = e.target.files[0];
			        }
				}
			},
			onFileDocumentChange(){
				var fileInput = document.getElementById('file');
			    var filePath = fileInput.value;
			    var allowedExtensions = /(\.doc|\.docx|\.pdf|\.txt|\.ppt|\.pptx)$/i;
			    if(!allowedExtensions.exec(filePath)){
					this.errorDocument = 'Vui lòng đăng tài liệu với đuôi .doc/.docx/.txt/.pdf/.ppt/.pptx';
			        fileInput.value = '';
			    }else{
			        //Image preview
			        if (fileInput.files && fileInput.files[0]) {
			            var reader = new FileReader();
			            reader.readAsDataURL(fileInput.files[0]);
			            this.file = fileInput.files[0]
			        }
			    }
			},

			createLibraryDocument(){
				const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
				let formData = new FormData();
                formData.append('file_name', this.file);
                formData.append('title', this.library.title);
                formData.append('user_id', this.library.user_id);
                formData.append('status', this.library.status);
                formData.append('library_type_id', this.library.library_type_id = 3);
                formData.append('document', this.document);

				// let uri = 'http://127.0.0.1:8000/api/admins/libraries';
				this.$store.dispatch('Library/addLibrary', formData, config).then((response) => {
					if(response.data.status){
						this.$notify({
							type: 'success', 
							title: 'Library',
							text: 'Thêm thành công!'
						});
						this.$router.push({ name: 'LibraryList'})
					} else {
						this.$notify({
							type: 'error', 
							title: 'Library',
							text: 'Thêm không thành công!'
						});
					}
					this.errors = []
				}).catch((error) => {
					this.errors = error.response.data.errors;  
  				  	this.$Progress.fail();	
				})
			},
			createLibraryImage(){
				const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }

				let formData = new FormData();
                formData.append('file_name', this.library.photo);
                formData.append('title', this.library.title);
                formData.append('user_id', this.library.user_id);
                formData.append('status', this.library.status);
                formData.append('library_type_id', this.library.library_type_id = 1);
                formData.append('image', this.photo);

				// let uri = 'http://127.0.0.1:8000/api/admins/libraries';
				this.$store.dispatch('Library/addLibrary', formData, config).then((response) => {	
					this.$router.push({name: 'LibraryList'});
					this.errors = [];
					this.$Progress.finish();
				}).catch(error => {
					this.errors = error.response.data.errors;  
  				  	this.$Progress.fail();				
				});
			},
			createLibraryVideo(){
				// let uri = 'http://127.0.0.1:8000/api/admins/libraries';
				this.$store.dispatch('Library/addLibrary', this.library).then((response) => {
					this.$router.push({name: 'LibraryList'});
					this.$Progress.finish();
				}).catch(error => {
					this.errors = error.response.data.errors;
					this.$Progress.fail();
				});
			},

			create(){
				this.$Progress.start();
				
				if(this.video === true){
					this.createLibraryVideo()
				}
				if(this.document === true){
					this.createLibraryDocument()
				}
				if(this.photo === true){
					this.createLibraryImage()
				}	
				
				if(!this.video && !this.document && !this.photo){
					this.errorLibrary = 'Bạn chưa chọn loại file'
				}
			},
		}
	}
</script>