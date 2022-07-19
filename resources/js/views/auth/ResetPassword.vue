<template>
	<div id="login">
		<div class="limiter">
			<div class="container-login100" style="background-image: url('images/bglogin.jpg');">
				<div class="wrap-login100 p-l-60 p-r-60 p-t-30 p-b-33">
					<form class="login100-form validate-form flex-sb flex-w" v-on:submit.prevent="handleSubmit">
						<span class="login100-form-title p-b-30">
							THAY ĐỔI MẬT KHẨU
						</span>
						
						<div class="p-t-10 p-b-9">							
							<span class="txt1">Email</span>
						</div>
						<div class="wrap-input100 validate-input">
							<input class="input100" type="email" v-model="user.email"  placeholder="Nhập Email">
							<span class="focus-input100"></span>
							<span v-if="errors.email" :class="['text text-danger']">{{ errors.email }}</span>
						</div>
						
						<div class="p-t-10 p-b-9">							
							<span class="txt1">Token</span>
						</div>
						<div class="wrap-input100 validate-input">
							<input class="input100" type="text" v-model="user.token" readonly placeholder="Nhập Token">
							<span class="focus-input100"></span>
							<span v-if="errors.token" :class="['text text-danger']">{{ errors.token }}</span>
						</div>
						
						<div class="p-t-10 p-b-9">							
							<span class="txt1">Mật khẩu mới</span>
						</div>
						<div class="wrap-input100 validate-input">
							<input class="input100" type="password" v-model="user.password" placeholder="Mật khẩu mới">
							<span class="focus-input100"></span>
							<span v-if="errors.password" :class="['text text-danger']">{{ errors.password }}</span>
						</div>

						<div class="p-t-25 p-b-9">						
							<span class="txt1">
								Nhập lại mật khẩu mới
							</span>
						</div>
						<div class="wrap-input100 validate-input">
							<input class="input100" type="password" v-model="user.password_confirmation" placeholder="Nhập lại mật khẩu mới">
							<span class="focus-input100"></span>
							<span v-if="errors.password_confirmation" :class="['text text-danger']">{{ errors.password_confirmation }}</span>
						</div>
						
						<div class="container-login100-form-btn m-t-17" v-if="check">
							<button type="submit" class="login100-form-btn btn-success">
								Lưu lại
							</button>
						</div>
						<div class="container-login100-form-btn m-t-17" v-if="!check">
							<p class="login100-form-btn-wait btn-success">Vui lòng chờ giây lát......</p>
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
				user: {
					token : "",
					email: "",
					token: `${this.$route.params.token}`,
					password : "",
					password_confirmation : ""
				},
				input: document.getElementsByClassName("wrap-input100"),
				check: true,
				errors: [],
            }
        },
        created(){
        	
        },
        methods: {
            handleSubmit() {
               this.$Progress.start();
				this.axios.post('/api/auth/reset/password/', this.user).then((response) => {
					this.check = false;
					this.$router.push({name: 'Login'});
					this.$Progress.finish();
					this.$notify({
						type: 'success', 
						title: 'Email',
						text: 'Đổi mật khẩu thành công!'
					});
				}).catch(error => {
					console.error(error);
					this.errors = error.response.data.errors;
  				  	this.$Progress.fail();
					this.$notify({
						type: 'error', 
						title: 'Email',
						text: 'Đổi mật khẩu không thành công!'
					});
				});
            },
        }
    }
</script>