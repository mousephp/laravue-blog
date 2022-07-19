<template>
<body class="hold-transition login-page">
    <div class="login-box">
        <!-- /.login-logo -->
        <div class="card card-outline card-primary">
            <div class="card-header text-center">
                <a href="../../index2.html" class="h1"><b>Admin</b>LTE</a>
            </div>

            <div class="card-body">
                <p class="login-box-msg">Sign in to start your session</p>

                <form v-on:submit.prevent="handleSubmit">
                    <div class="input-group mb-3">
                        <input type="email" class="form-control"  v-model="user.email" :class="{ 'is-invalid' : errors.email }" placeholder="Nhập Email" />
                        <div class="input-group-append">
                            <div class="input-group-text">
                            <span class="fas fa-envelope"></span>
                            </div>
                        </div>                        
                    </div>
                    <span v-if="errors.email" :class="['text text-danger']">{{ errors.email }}</span>
                    <div class="input-group mb-3">
                        <input
                            type="password"
                            class="form-control"
                            v-model="user.password" :class="{ 'is-invalid' : errors.password }" placeholder="Nhập Pasword"
                        />
                        <div class="input-group-append">
                            <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <span v-if="errors.password" :class="['text text-danger']">{{ errors.password }}</span>	
                    <div class="row">
                        <div class="col-8">
                            <div class="icheck-primary">
                            <input type="checkbox" id="remember" />
                            <label for="remember"> Remember Me </label>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-4">
                            <button type="submit" class="btn btn-primary btn-block">
                            Login
                            </button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </div>
    <!-- /.login-box -->
</body>
</template>


<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
    name: "AdminLogin",
	data() {
		return {
			user: {
				email: 'admin@gmail.com',
				password: '123456'
			},
			errors: {},
		}
	}, 
	created(){
		if(this.$store.state.auth.authenticated){
			window.location.href = '/admin';
		}
	},
	methods: {			
		...mapActions({
			signIn: 'auth/login',
            addNotification: 'Notification/addNotification'
		}),

		async handleSubmit () {
            this.signIn(this.user).then(() => {
                this.addNotification({
                    show: true,
                    text: 'Welcome'
                }).then(() => {
                    window.location.href = '/';
                })
            })
            .catch((error) => {		
                this.errors = error.response.data.errors;
                this.addNotification({
                    show: true,
                    text: 'Failed to login!!!'
                })
            })
        }	

	}
}

</script>