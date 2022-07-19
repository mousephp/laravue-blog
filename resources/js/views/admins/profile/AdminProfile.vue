<template>
	<!-- Start content -->
	<div class="content">
		<div class="container-fluid">
			<div class="row mb-5">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">						
					<div class="card mb-3">
						<div class="card-header">
							<h3><i class="fa fa-user"></i> Trang cá nhân
							<router-link class="btn btn-success btn-sm float-right" :to="{ name: 'UpdatePasswordUser' }">Update Password</router-link></h3>
						</div>

						<div class="card-body">												
							<form method="post">
								<div class="row">	
									<div class="col-lg-9 col-xl-9">
										<div class="row">				
											<div class="col-lg-6">
												<div class="form-group">
													<label>Tên</label>
													<input type="text" class="form-control" name="name" :value="users.name" readonly />
												</div>
											</div>

											<div class="col-lg-6">
												<div class="form-group">
													<label>Email</label>
													<input type="email" class="form-control" name="email" :value="users.email" readonly />
												</div>
											</div>  
										</div>
										
										<div class="row">				
											<div class="col-lg-6">
												<div class="form-group">
													<label>Password (leave empty not to change)</label>
													<input class="form-control" name="password" type="password" value="******" readonly />
												</div>
											</div>              			                                
											
											<div class="col-lg-6">
												<div class="form-group">
													<label>Skype</label>
													<input class="form-control" name="skype" type="text" value="skypeid" readonly />
												</div>
											</div>   
										</div>
										
										<div class="row">
											<div class="col-lg-12">
												<button type="button" class="btn btn-primary">Edit profile</button>
											</div>
										</div>
									
									</div>
																	
									<div class="col-lg-3 col-xl-3 border-left">
										<b>Lần hoạt động cuối</b>: Đang cập nhật	
										<br />
										<b>Ngày đăng ký </b>: {{ convertDate(users.created_at) }}	
										<br />											
										<div class="m-b-10"></div>
										
										<div id="avatar_image">
											<img :src="'images/users/avatar.jpg'" alt="avatar" style="max-width: 100px; height: auto;"/>
											<br />
											<!-- <i class="fa fa-trash-o fa-fw"></i> <a class="delete_image" href="#">Remove avatar</a> -->															
										</div>  
										<div id="image_deleted_text"></div>                      

										<div class="m-b-10"></div>
										
										<div class="form-group">
											<label>Thay đổi ảnh đại diện</label> 
											<input type="file" name="image" class="form-control">
										</div>										
									</div>
								</div>															
							</form>										
							
						</div>	
						<!-- end card-body -->												
					</div><!-- end card-->					
				</div>
			</div>
		</div>
		<!-- END container-fluid -->
	</div>
	<!-- END content -->
</template>


<script>
	export default {
		data() {
			return {
				// users: {}
			}
		},
		computed: {
			users() {
				return this.$store.state.ClientAuth.user
			}
		},
		methods:{
			pad(s){
                return (s < 10) ? '0' + s : s;
            },
            convertDate(inputFormat) {
              var d = new Date(inputFormat);
              return [this.pad(d.getDate()), this.pad(d.getMonth()+1), d.getFullYear()].join('/');
            },
		}
	}
</script>