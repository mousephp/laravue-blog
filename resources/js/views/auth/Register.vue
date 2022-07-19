<template>
	<div id="login">
	<!-- 	<app-navbar-component></app-navbar-component> -->
		<div class="limiter">
			<div class="container-login100" style="background-image: url('images/bglogin.jpg');">
				<div class="wrap-login100 p-l-60 p-r-60 p-t-30 p-b-33">
					<form class="login100-form validate-form flex-sb flex-w" v-on:submit.prevent="handleSubmit">
						<span class="login100-form-title p-b-30">
							ĐĂNG KÝ
						</span>

						<a href="javascript:void(0)" class="btn-face m-b-20">
							<i class="fa fa-facebook-official"></i>
							Facebook
						</a>

						<a href="javascript:void(0)" class="btn-google m-b-20">
							<img src="images/icons/icon-google.png" alt="">
							Google
						</a>
						
						<div class="p-t-25 p-b-9">							
							<span class="txt1">Tên đăng nhập</span>
						</div>
						<div class="wrap-input100 validate-input">
							<input class="input100" type="text" v-model="user.name" :class="{ 'is-invalid' : errors.name }" placeholder="Nhập tên đăng nhập">
							<span class="focus-input100"></span>
							<span v-if="errors.name" :class="['text text-danger']">{{ errors.name }}</span>
						</div>
						
						<div class="p-t-13 p-b-9">
							<span class="txt1">Email</span>
						</div>
						<div class="wrap-input100 validate-input">
							<input class="input100" type="email" v-model="user.email" :class="{ 'is-invalid' : errors.email }" placeholder="Nhập Email">
							<span class="focus-input100"></span>
							<span v-if="errors.email" :class="['text text-danger']">{{ errors.email }}</span>
						</div>

						<div class="p-t-13 p-b-9">
							<span class="txt1">Mật khẩu</span>
						</div>
						<div class="wrap-input100 validate-input">
							<input class="input100" type="password" v-model="user.password" :class="{ 'is-invalid' : errors.password }" placeholder="Nhập Mật khẩu">
							<span class="focus-input100"></span>
							<span v-if="errors.password" :class="['text text-danger']">{{ errors.password }}</span>
						</div>
						
						<div class="p-t-13 p-b-9">
							<span class="txt1">Nhập lại mật khẩu</span>
						</div>
						<div class="wrap-input100 validate-input">
							<input class="input100" type="password" v-model="user.password_confirmation" placeholder="Nhập tiêu đề">
							<span class="focus-input100"></span>
						</div>

						<div class="container-login100-form-btn m-t-17" v-if="check">
							<button type="submit" class="login100-form-btn btn-success">
								Đăng ký
							</button>
						</div>

						<div class="container-login100-form-btn m-t-17" v-if="!check">
							<p class="login100-form-btn-wait btn-success">Vui lòng chờ giây lát......</p>
						</div>

						<div class="w-full text-center p-t-25">
							<span class="txt2">Bạn đã có tài khoản?</span>

							<router-link to="/login" class="txt2 bo1">Đăng nhập</router-link>
						</div>
					</form>

					<!-- <button class="btn btn-primary" v-on:click="checkAll()">Click</button> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	data() {
		return {
			check: true,
			user: {
				name : "",
				email : "",
				password : "",
				password_confirmation : ""
			},
			input: document.getElementsByClassName("wrap-input100"),
			errors: {},
		}
	},
	methods: {
		...mapActions({
            signIn:'auth/login'
        }),
		handleSubmit() {
			this.check = false;
			this.$Progress.start();
			let uri = 'http://127.0.0.1:8000/api/create-account';
			this.axios.post(uri, this.user).then((response) => {
				console.log('pass='+response.data.test);
				this.signIn()
				this.$Progress.finish();
				this.$notify({
					type: 'success', 
					title: 'Login',
					text: 'Đăng ký thành công!'
				});
				console.log(response.data);
			}).catch(error => {
				this.check = true;
				this.errors = error.response.data.errors;
				this.$Progress.fail();
				this.$notify({
					type: 'error', 
					title: 'Login',
					text: 'Đăng ký thất bại!'
				}).finally(()=>{
					// this.processing = false
				});	
			});
		}
	}
}
</script>