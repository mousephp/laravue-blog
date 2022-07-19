<template>
	<!-- <v-facebook-login app-id="2815325912026613"></v-facebook-login> -->
	<div style="margin-top: 100px">
		<button class="btn btn-primary">Facebook</button>
		
		
	</div>
</template>

<script>
	export default {
		
	}
</script>
<!-- <script>
	// import VFacebookLogin from 'vue-facebook-login-component'
	export default {
		data(){
			return {
				FB: undefined
			}
		},
		components: {
			// VFacebookLogin
		},
		created(){
			window.fbAsyncInit = function() {
				this.FB.init({
					appId      : '2815325912026613',
					cookie     : true,  // enable cookies to allow the server to access the session
					xfbml      : true,  // parse social plugins on this page
					version    : 'v2.5' // use graph api version 2.5
				});
	
				this.FB.getLoginStatus(function(response) {
					this.statusChangeCallback(response);
				});
			};

			// Load the SDK asynchronously
			(function(d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return;
				js = d.createElement(s); js.id = id;
				js.src = "//connect.facebook.net/en_US/sdk.js";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));


		},
		methods: {
			statusChangeCallback(response) {
				console.log('statusChangeCallback');
				console.log(response);
				if (response.status === 'connected') {
					// Logged into your app and Facebook.
					testAPI();
				} else if (response.status === 'not_authorized') {
					// The person is logged into Facebook, but not your app.
					document.getElementById('status').innerHTML = 'Please log ' +
					'into this app.';
				} else {
					// The person is not logged into Facebook, so we're not sure if
					// they are logged into this app or not.
					document.getElementById('status').innerHTML = 'Please log ' +
					'into Facebook.';
				}
			},
			checkLoginState() {
				this.FB.getLoginStatus(function(response) {
					this.statusChangeCallback(response);
				});
			},

		}
	}
</script>
 -->

<!-- <script>
	import facebookLogin from 'facebook-login-vuejs';
	export default {
		components: {
	        facebookLogin
	    },
		data(){
			return {
				email: '',
				name: '',
				personalID: '',
				isConnected: false,
				FB: undefined,
			}
		},
		created(){
			console.log('created main');
			window.fbAsyncInit = function() {
			  this.FB.init({
			    appId      : '2815325912026613',
			    xfbml      : true,
			    version    : 'v2.7'
			  });
			  console.log('created main');
			  //This function should be here, inside window.fbAsyncInit
			  thFB.getLoginStatus(function(response) {
			    console.log(response);
			 });
			}
					(function(d, s, id) {
		    var js, fjs = d.getElementsByTagName(s)[0];
		    if (d.getElementById(id)) return;
		    js = d.createElement(s); js.id = id;
		    js.src = "//connect.facebook.net/en_US/sdk.js";
		    fjs.parentNode.insertBefore(js, fjs);
		  }(document, 'script', 'facebook-jssdk'));
		},
		methods:{
			getUserData(){
				this.FB.api('/me', 'GET', {fields: 'id, name, email'}, userInformation => {
					console.warn("data", userInformation)
					this.personalID = userInformation.id
					this.email = userInformation.email
					this.name = userInformation.name
				}

				)
			},
			sdkLoaded(payload){
				this.isConnected = payload.isConnected
				this.FB = payload.FB
				if(this.isConnected) this.getUserData()
			},
			onLogin(){
				this.isConnected = true;
				this.getUserData()
			},
			onLogout(){
				this.isConnected = false
			}

		}
	}
</script> -->