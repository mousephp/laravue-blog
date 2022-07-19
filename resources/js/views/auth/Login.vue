<template>
	<div id="login">
	<!-- 	<app-navbar-component></app-navbar-component> -->
		<div class="limiter">
			<div class="container-login100" style="background-image: url('images/bglogin.jpg');">
				<div class="wrap-login100 p-l-60 p-r-60 p-t-30 p-b-33">

					<form class="login100-form validate-form flex-sb flex-w" v-on:submit.prevent="login">
						<span class="login100-form-title p-b-30">
							{{$t('login')}}
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
							<span class="txt1">{{$t('username_or_email')}}</span>
						</div>
						<div class="wrap-input100 validate-input">
							<input class="input100" type="email" v-model="user.email" :class="{ 'is-invalid' : errors.email }" placeholder="Nhập Email">
							<span class="focus-input100"></span>
							<span v-if="errors.email" :class="['text text-danger']">{{ errors.email }}</span>
						</div>
						
						<div class="p-t-13 p-b-9">
							<span class="txt1">{{$t('password')}}</span>
							<router-link :to="{ name: 'ForgotPassword'}" class="txt2 bo1 m-l-5">
								{{$t('forgot_password')}}
							</router-link>
						</div>
						<div class="wrap-input100 validate-input">
							<input class="input100" type="password" v-model="user.password" :class="{ 'is-invalid' : errors.password }" placeholder="Nhập Pasword">
							<span class="focus-input100"></span>
							<span v-if="errors.password" :class="['text text-danger']">{{ errors.password }}</span>	
						</div>

						<div class="container-login100-form-btn m-t-17" v-if="error">
							<p class="text-red-800 text-xs italic mt-6 text text-danger text-center" role="alert" >{{ error }}</p>
						</div>
						<div class="container-login100-form-btn m-t-17" v-if="loading && !error">
							<p class="text-blue-500 text-xs italic mt-6 text-center" role="alert">Loading...</p>
						</div>

						<div class="container-login100-form-btn m-t-17" v-if="check">
							<button type="submit" class="login100-form-btn btn-success">
								{{$t('login')}}								
							</button>
						</div>

						<div class="container-login100-form-btn m-t-17" v-if="!check">
							<p class="login100-form-btn-wait btn-success">{{$t('wait_moment')}}</p>
						</div>

						<div class="w-full text-center p-t-25">
							<span class="txt2">{{$t('not_account')}}</span>

							<router-link to="/register" class="txt2 bo1">{{$t('register')}}</router-link>
						</div>
					</form>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
	data() {
		return {
			user: {
				email: 'admin@gmail.com',
				password: '123456',
				// device_name: "token",
			},
			input: document.getElementsByClassName("wrap-input100"),
			check: true,
			errors: {},
			user_type: 0,
		}
	}, 
	beforeCreate(){
		if(this.$store.state.ClientAuth.token){
			window.location.href = '/admin';
		}
	},
	computed: {
		...mapGetters("ClientAuth", ["authUser", "error", "loading"]),
	},
	methods: {			
		login() {
			this.$store.dispatch('ClientAuth/login',this.user).then((response) => {
				// this.$router.push(this.$route.query.redirect || "/");
				window.location.href = '/';
			}).catch((error) => {		
                this.errors = error.data.errors;
            })
		},
	}
}

</script>