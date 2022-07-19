<template>
	<!-- Start content -->
	<div class="content">
		<div class="container-fluid">
			<div class="row mb-5">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">						
					<div class="card mb-3">
						<div class="card-header">
							<h3><i class="fa fa-user"></i> Cập Nhập Mật Khẩu</h3>
						</div>

						<div class="card-body">												
							<form v-on:submit.prevent="updatePassword">
								<div class="row">	
									<div class="col-lg-9 col-xl-9">
										<div class="row">				
											<div class="col-lg-6">
												<div class="form-group">
													<label>Old Password </label>
													<input class="form-control" name="old_password" type="password" v-model="user.old_password" placeholder="Old Password" />
													<span v-if="errors.old_password" :class="['text text-danger']">{{ errors.old_password }}</span>
												</div>
											</div>              			                                
											
											<div class="col-lg-6">
												<div class="form-group">
													<label>New Password </label>
													<input class="form-control" name="new_password" type="password" v-model="user.new_password" placeholder="New Password" />
													<span v-if="errors.new_password" :class="['text text-danger']">{{ errors.new_password }}</span>
												</div>
											</div>  									

											<div class="col-lg-6">
												<div class="form-group">
													<label>Password Confirmation</label>
													<input class="form-control" name="password_confirmation" type="password" v-model="user.password_confirmation" placeholder="Password Confirmation" />
													<span v-if="errors.password_confirmation" :class="['text text-danger']">{{ errors.password_confirmation }}</span>
												</div>
											</div>  
										</div>
										
										<div class="row">
											<div class="col-lg-12">
												<button type="submit" class="btn btn-primary">Change Password</button>
											</div>
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
				user: {
					old_password: '',
					new_password: '',
					password_confirmation: '',
				},
				errors: []
			}
		},
		methods:{
			updatePassword(){
				this.$Progress.start();
				let uri = `http://127.0.0.1:8000/api/admin/user/change-password`;
				this.axios.put(uri, this.user).then((response) => {
					console.log("user:"+response.data.user)
					this.errors = [];
					this.$Progress.finish();
					this.$notify({
						type: 'success', 
						title: 'User',
						text: 'Cập Nhập Mật Khẩu Thành Công!'
					});
				}).catch(error => {
					this.errors = error.response.data.errors;    
  				  	this.$Progress.fail();	
					this.$notify({
						type: 'error', 
						title: 'User',
						text: 'Cập Nhập Mật Khẩu Không Thành Công!'
					});
				});
			}
		}
	}
</script>