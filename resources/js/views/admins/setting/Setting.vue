<template>
	<!-- Start content -->
	<div class="content">
		<div class="container-fluid">	
		<div class="row mb-3">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">
				<div class="card mb-3">
					<div class="card-header">
						<h3><i class="fa fa-book"></i> Thông tin đầu trang<button type="button" class="btn btn-success float-right" v-if="!showheaderinfo" v-on:click="showHeader()"><span class="btn-label"><i class="fa fa-pencil"></i></span> Chỉnh sửa</button></h3>
					</div>
						
					<div class="card-body">
						<form v-on:submit.prevent="update">
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
									<label class="font-weight-bold">Tiêu đề</label>
									<input type="text" class="form-control" aria-describedby="" placeholder="Nhập tiêu đề" required="" v-model="settings['header']" readonly="" v-if="!showheaderinfo">
									<input type="text" class="form-control" aria-describedby="" placeholder="Nhập tiêu đề" required="" v-model="settings['header']" v-if="showheaderinfo">
								</div>
								<div class="form-group">
									<label class="font-weight-bold">Nội dung</label>
									<textarea class="form-control" rows="12" v-model="settings['header_content']" readonly="" v-if="!showheaderinfo"></textarea>
									<textarea class="form-control" rows="12" v-model="settings['header_content']" v-if="showheaderinfo"></textarea>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="font-weight-bold">Danh sách trong phần hiệu ứng</label>
									<p>
										<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
										Xem danh sách
										</button>
									</p>
									<div class="collapse" id="collapseExample">
										<div class="card card-body">
											<input type="text" class="form-control" v-model="contentanimation">
											<button type="button" class="btn btn-primary mt-2 mb-2" disabled="" v-if="!showlistani"> THÊM </button>
											<button type="button" class="btn btn-primary mt-2 mb-2" v-if="showlistani" v-on:click="addAnimation()"> THÊM </button>
											<ul class="list-group" v-for="(value, index) in objheaderanimation" :key="index">
												<li class="list-group-item">
													<div class="row">
														<div class="col-md-10">
															<input type="text" class="form-control" v-model="value.val" v-if="!showlistani" readonly="">
															<input type="text" class="form-control" v-model="value.val" v-if="showlistani">
														</div>
														<div class="col-md-2">
															<button type="button" class="btn btn-danger btn-small" disabled="" v-if="!showlistani" v-on:click="removeElement(index)"><i class="fa fa-times"></i></button>
															<button type="button" class="btn btn-danger btn-small" v-if="showlistani" v-on:click="removeElement(index)"><i class="fa fa-times"></i></button>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<!-- Lưu -->
							<div class="col-md-3"></div>
							<div class="col-md-3">
								<button type="submit" class="btn btn-primary float-right" v-if="showheaderinfo"><span class="btn-label"><i class="fa fa-save"></i></span> Lưu lại</button>
							</div>
							<div class="col-md-6">
								<a href="javascript:void(0)" class="btn btn-danger" v-if="showheaderinfo" v-on:click="showHeader()"><span class="btn-label"><i class="fa fa-times"></i></span>Hủy bỏ</a>
							</div>
							<!-- end lưu -->
						</div> <!-- end row -->

						</form>
					</div>  <!-- end card-body -->                        
				</div><!-- end card-->                  
			</div>
		</div>
		<!-- end row -->
		
		<div class="row mb-3">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">
				<div class="card mb-3">
					<div class="card-header">
						<h3><i class="fa fa-book"></i> Thông tin liên hệ<button type="button" class="btn btn-success float-right" v-if="!showcontactinfo" v-on:click="showContact()"><span class="btn-label"><i class="fa fa-pencil"></i></span> Chỉnh sửa</button></h3>
					</div>
						
					<div class="card-body">
						<form v-on:submit.prevent="update">
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
									<label class="font-weight-bold">Email</label>
									<input type="email" class="form-control" aria-describedby="" placeholder="Nhập email" required="" v-model="settings['email']" readonly="" v-if="!showcontactinfo">
									<input type="text" class="form-control" aria-describedby="" placeholder="Nhập email" required="" v-model="settings['email']" v-if="showcontactinfo">
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="font-weight-bold">Điện thoại</label>
									<input type="text" class="form-control" aria-describedby="" placeholder="Nhập số điện thoại" required="" v-model="settings['phone']" readonly="" v-if="!showcontactinfo">
									<input type="text" class="form-control" aria-describedby="" placeholder="Nhập số điện thoại" required="" v-model="settings['phone']" v-if="showcontactinfo">
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="font-weight-bold">Địa chỉ</label>
									<input type="text" class="form-control" aria-describedby="" placeholder="Nhập địa chỉ" required="" v-model="settings['address']" readonly="" v-if="!showcontactinfo">
									<input type="text" class="form-control" aria-describedby="" placeholder="Nhập địa chỉ" required="" v-model="settings['address']" v-if="showcontactinfo">
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="font-weight-bold">Fax</label>
									<input type="text" class="form-control" aria-describedby="" placeholder="Nhập fax" required="" v-model="settings['fax']" readonly="" v-if="!showcontactinfo">
									<input type="text" class="form-control" aria-describedby="" placeholder="Nhập fax" required="" v-model="settings['fax']" v-if="showcontactinfo">
								</div>
							</div>
							<!-- Lưu -->
							<div class="col-md-3"></div>
							<div class="col-md-3">
								<button type="submit" class="btn btn-primary float-right" v-if="showcontactinfo"><span class="btn-label"><i class="fa fa-save"></i></span> Lưu</button>
							</div>
							<div class="col-md-6">
								<a href="javascript:void(0)" class="btn btn-danger" v-if="showcontactinfo" v-on:click="showContact()"><span class="btn-label"><i class="fa fa-times"></i></span>Hủy bỏ</a>
							</div>
							<!-- end lưu -->
						</div> <!-- end row -->

						</form>
					</div>  <!-- end card-body -->                        
				</div><!-- end card-->                  
			</div>
		</div>
		<!-- end row -->
		
		<div class="row mb-3">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">
				<div class="card mb-3">
					<div class="card-header">
						<h3><i class="fa fa-book"></i> Liên kết mạng xã hội<button type="button" class="btn btn-success float-right" v-if="!showsocialinfo" v-on:click="showSocial()"><span class="btn-label"><i class="fa fa-pencil"></i></span> Chỉnh sửa</button></h3>
					</div>
						
					<div class="card-body">
						<form v-on:submit.prevent="update">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label class="font-weight-bold">Facebook</label>
									<input type="text" class="form-control" aria-describedby="" placeholder="Nhập địa chỉ facebook" required="" v-model="settings['facebook']" readonly="" v-if="!showsocialinfo">
									<input type="text" class="form-control" aria-describedby="" placeholder="Nhập địa chỉ facebook" required="" v-model="settings['facebook']" v-if="showsocialinfo">
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="font-weight-bold">Twitter</label>
									<input type="text" class="form-control" aria-describedby="" placeholder="Nhập địa chỉ twitter" required="" v-model="settings['twitter']" readonly="" v-if="!showsocialinfo">
									<input type="text" class="form-control" aria-describedby="" placeholder="Nhập địa chỉ twitter" required="" v-model="settings['twitter']" v-if="showsocialinfo">
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="font-weight-bold">Linkedin</label>
									<input type="text" class="form-control" aria-describedby="" placeholder="Nhập địa chỉ linkedin" required="" v-model="settings['linkedin']" readonly="" v-if="!showsocialinfo">
									<input type="text" class="form-control" aria-describedby="" placeholder="Nhập địa chỉ linkedin" required="" v-model="settings['linkedin']" v-if="showsocialinfo">
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="font-weight-bold">Youtube</label>
									<input type="text" class="form-control" aria-describedby="" placeholder="Nhập địa chỉ youtube" required="" v-model="settings['youtube']" readonly="" v-if="!showsocialinfo">
									<input type="text" class="form-control" aria-describedby="" placeholder="Nhập địa chỉ youtube" required="" v-model="settings['youtube']" v-if="showsocialinfo">
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="font-weight-bold">Link video youtube</label>
									<input type="text" class="form-control" aria-describedby="" placeholder="Nhập link youtube giới thiệu tpack" required="" v-model="settings['video_youtube_intro']" readonly="" v-if="!showsocialinfo">
									<input type="text" class="form-control" aria-describedby="" placeholder="Nhập link youtube giới thiệu tpack" required="" v-model="settings['video_youtube_intro']" v-if="showsocialinfo">
								</div>
							</div>
							<!-- Lưu -->
							<div class="col-md-3"></div>
							<div class="col-md-3">
								<button type="submit" class="btn btn-primary float-right" v-if="showsocialinfo"><span class="btn-label"><i class="fa fa-save"></i></span> Lưu lại</button>
							</div>
							<div class="col-md-6">
								<a href="javascript:void(0)" class="btn btn-danger" v-if="showsocialinfo" v-on:click="showSocial()"><span class="btn-label"><i class="fa fa-times"></i></span>Hủy bỏ</a>
							</div>
							<!-- end lưu -->
						</div> <!-- end row -->

						</form>
					</div>  <!-- end card-body -->                        
				</div><!-- end card-->                  
			</div>
		</div>
		<!-- end row -->

		<div class="row mb-3">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">
				<div class="card mb-3">
					<div class="card-header">
						<h3><i class="fa fa-book"></i> Website liên kết</h3>
					</div>
						
					<div class="card-body">
						<table class="table table-bordered">
							<thead>
								<tr>
									<th>STT</th>
									<th>Tên trang web</th>
									<th>Link</th>
									<th>Tùy chọn</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(value, index) in links" :key="index">
									<td>{{index + 1}}</td>
									<td>{{value.name}}</td>
									<td>{{value.link}}</td>
									<td>
									<button type="button" class="btn btn-danger btn-small" style="display: block; margin-left: auto; margin-right: auto;" v-on:click="deleteLink(value.id, index)"><span><i class="fa fa-times"></i></span></button>
									</td>
								</tr>
							</tbody>
						</table>
						
					</div>  <!-- end card-body -->
					<div class="card-footer">
						<form v-on:submit.prevent="update">
							<div class="row">
								<div class="col-md-3">
									<div class="form-group">
										<label class="font-weight-bold">Tên trang web</label>
										<input type="text" class="form-control" aria-describedby="" placeholder="Nhập tên trang web" required="" v-model="website_name">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label class="font-weight-bold">Link trang web</label>
										<input type="text" class="form-control" aria-describedby="" placeholder="Nhập link trang web" required="" v-model="website_link">
									</div>
								</div>
								<div class="col-md-3">
									<button type="submit" class="btn btn-primary btn-small mt-4"><span class="btn-label"><i class="fa fa-plus"></i></span>Thêm trang liên kết</button>
								</div>
							</div>
						</form>
					</div>                   
				</div><!-- end card-->
			</div>       
		</div>
		<!-- end row -->

		<div class="row mb-5">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">
				<div class="card mb-3">
					<div class="card-header">
						<h3><i class="fa fa-book"></i> Server NodeJS<button type="button" class="btn btn-success float-right btn-small" v-if="!showcontactinfo" v-on:click="showLinkNode()"><span class="btn-label btn-small"><i class="fa fa-pencil"></i></span> Chỉnh sửa</button></h3>
					</div>
						
					<div class="card-body">
						<form v-on:submit.prevent="update">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label class="font-weight-bold">Đường dẫn liên kết</label>
									<input type="text" class="form-control" id="" aria-describedby="" placeholder="Nhập liên kết" required="" v-model="settings.link_serve_nodejs" readonly="" v-if="!showlinknodejs">
									<input type="text" class="form-control" id="" aria-describedby="" placeholder="Nhập đường dẫn liên kết" required="" v-model="settings.link_serve_nodejs" v-if="showlinknodejs">
								</div>
							</div>
							<!-- Lưu -->
							<div class="col-md-3"></div>
							<div class="col-md-3">
								<button type="submit" class="btn btn-primary float-right" v-if="showlinknodejs"><span class="btn-label"><i class="fa fa-save"></i></span> Lưu</button>
							</div>
							<div class="col-md-6">
								<a href="javascript:void(0)" class="btn btn-danger" v-if="showlinknodejs" v-on:click="showLinkNode()"><span class="btn-label"><i class="fa fa-times"></i></span>Hủy bỏ</a>
							</div>
							<!-- end lưu -->
						</div> <!-- end row -->

						</form>
					</div>  <!-- end card-body -->                        
				</div><!-- end card-->                  
			</div>
		</div>
		<!-- end row -->
		
		</div>
		<!-- END container-fluid -->
	</div>
	<!-- END content -->
</template>


<script>
import { mapGetters } from "vuex";

export default {
	data(){
		return {
			contentanimation: '',
			links: {},
			showlistani: false,
			showheaderinfo: false,
			showcontactinfo: false,
			showsocialinfo: false,
			showlinknodejs: false,
			objheaderanimation: [],
			
			website_name: '',
			website_link: '',
			errors: [],
		}
	},
	created(){
		this.getData()
	},
	computed: {
		...mapGetters({settings: 'setting/settings'}),
	},
	methods: {
		addAnimation(){
			if(this.contentanimation.trim().length != 0){
				this.objheaderanimation.push({"val": this.contentanimation})
				this.contentanimation = ''
			}
		},
		removeElement(ind){
			this.objheaderanimation.splice(ind, 1)
		},
		showHeader(){
			this.showheaderinfo = !this.showheaderinfo
			this.showlistani = !this.showlistani
		},
		showContact(){
			this.showcontactinfo = !this.showcontactinfo
		},
		showSocial(){
			this.showsocialinfo = !this.showsocialinfo
		},
		showLinkNode(){
			this.showlinknodejs = !this.showlinknodejs
		},

		getData(){
			this.$store.dispatch('setting/setSettings', this.settings);
			this.axios.get('/api/listhomeinfo').then((response) => {
				this.links = response.data.links
			}).catch((error) => {
				console.log(error)
			})
		},
		
//=============================Links=========================================
		createLinks(){				
			this.$Progress.start();
			let uri = `http://127.0.0.1:8000/api/admins/links`;
			let obj = {}
			obj.name = this.website_name
			obj.link = this.website_link
			this.axios.post(uri, obj).then((response) => {				
				this.getData()
				this.website_name = ''
				this.website_link = ''
				this.$Progress.finish();
			}).catch(error => {
				this.errors = error.response.data.errors;
				this.$Progress.fail();
			});
		},
		deleteLink(id, index){
			this.$swal({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it!'
			}).then((result) => {
				if (result.value) { 
					let uri = `http://127.0.0.1:8000/api/admins/links/${id}`;					
					this.axios.delete(uri).then(response => {
						this.links.splice(index, 1)
						this.$swal('Deleted!','Tệp của bạn đã bị xóa.','success');
					}).catch(function (data) {
						this.$swal("Failed! Xóa không thành công", data.message, "warning");
					});
				} 
			});
		},

//=============================Settings=========================================
		update(){
			this.$Progress.start();
			let uri = `http://127.0.0.1:8000/api/admins/settings`;
			this.axios.patch(uri, this.settings).then((response) => {
				window.location.href = '/admin/setting';
				this.errors = [];
				this.$Progress.finish();
				if(response.data.message){
					this.$notify({
						type: 'success', 
						title: 'Setting',
						text: 'Sửa thành công!'
					});
				} 					
			}).catch(error => {
				this.errors = error.response.data.errors;    
				this.$Progress.fail();	
				this.$notify({
					type: 'error', 
					title: 'Setting',
					text: 'Sửa không thành công!'
				});
			});
		}
	}
}
</script>

<style scoped>
	.hidden{display:none;}
</style>