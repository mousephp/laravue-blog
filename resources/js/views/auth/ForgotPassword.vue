<template>
	<div id="login">
		<div class="limiter">
			<div class="container-login100" style="background-image: url('images/bglogin.jpg');">
				<div class="wrap-login100 p-l-60 p-r-60 p-t-30 p-b-33">
					<form class="login100-form validate-form flex-sb flex-w" v-on:submit.prevent="handleSubmit">
						<span class="login100-form-title p-b-30">
							QUÊN MẬT KHẨU
						</span>
						<a href="javascript:void(0)" class="btn-face m-b-20" v-on:click="loginFacebook()">
							<i class="fa fa-facebook-official"></i>
							Facebook
						</a>
						<a href="javascript:void(0)" class="btn-google m-b-20">
							<img src="images/icons/icon-google.png" alt="">
							Google
						</a>
						
						<div class="p-t-25 p-b-9">
							<span class="txt1">
								Nhập email đã đăng ký
							</span>
						</div>
						<div class="wrap-input100 validate-input" >
							<input class="input100" type="text" v-model="user.email" placeholder="Nhập email đã đăng ký">
							<span class="focus-input100"></span>
							<span v-if="errors.email" :class="['text text-danger']">{{ errors.email }}</span>
						</div>

						<div class="container-login100-form-btn m-t-17" v-if="check">
							<button type="submit" class="login100-form-btn btn-success">
								Nhận mã xác minh
							</button>
						</div>					
						<div class="container-login100-form-btn m-t-17" v-if="!check">
							<p class="login100-form-btn-wait btn-success">Vui lòng chờ giây lát......</p>
						</div>

						<div class="w-full text-center p-t-25">
							<router-link to="/register" class="txt2 bo1">
								Đăng ký ngay
							</router-link>
							<span>
								<router-link to="/login" class="txt2 bo1">
									Đăng nhập
								</router-link>
							</span>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                // email : "",
				user: {
                    email: ''
                },
                input: document.getElementsByClassName("wrap-input100"),
                check: true,
				errors: [],
            }
        }, 
        methods: {
            handleSubmit() {				
            	this.$Progress.start();
				// let uri = 'http://127.0.0.1:8000/api/forgot-password';
				// this.axios.post(uri, this.user).then((response) => {	
				// 	console.log("email:"+response.data.email);		
				this.axios.post("/api/auth/reset-password", this.user).then(result => {
                	this.response = result.data;	
					console.log(result.data);
					this.check = false;
					// this.$router.push({name: 'ForgotPassword'});
					this.$Progress.finish();
					this.$notify({
						type: 'success', 
						title: 'Email',
						text: 'Thành công! Vui lòng kiểm tra mail của bạn'
					});
				}).catch(error => {
					console.error(error);
					this.errors = error.response.data.errors;
  				  	this.$Progress.fail();
					this.$notify({
						type: 'error', 
						title: 'Email',
						text: 'Không thành công!'
					});
				});
            },
 
   			loginFacebook(){
   				alert('Chức năng đang được cập nhật')
   			},
   			isEmpty(obj) {
			    for(var key in obj) {
			        if(obj.hasOwnProperty(key))
			            return false;
			    }
			    return true;
			}
        }
    }
</script>