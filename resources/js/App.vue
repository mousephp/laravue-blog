<template>
 	<div>
 		<router-view></router-view>
	 	<!-- SCROLL TOP BUTTON -->
		<a class="scrollToTop" href="#"><i class="fa fa-chevron-up"></i></a>
		<!-- END SCROLL TOP BUTTON -->

		<notifications/>
 	</div>
</template>


<script>
	export default {
		name: 'app',
		mounted(){
			jQuery(window).scroll(function(){
				if ($(this).scrollTop() > 300) {
					$('.scrollToTop').fadeIn();
				} else {
					$('.scrollToTop').fadeOut();
				}
			});

			//Click event to scroll to top
			jQuery('.scrollToTop').click(function(){
				$('html, body').animate({scrollTop : 0},800);
				return false;
			});
		}
	}
</script>


<style>
	.scrollToTop {
	    background: #f9f9f9 none repeat scroll 0 0;
	    border-radius: 50%;
	    bottom: 60px;
	    display: none;
	    /*display: block;*/
	    font-size: 25px;
	    height: 55px;
	    line-height: 50px;
	    position: fixed;
	    right: 50px;
	    text-align: center;
	    text-decoration: none;
	    width: 55px;
	    -webkit-transition: all 0.5s;
	    -o-transition: all 0.5s;
	    transition: all 0.5s;
	    z-index: 999;
	    color: #00d999;
	}
	@-webkit-keyframes rotate-forever {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes rotate-forever {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate-forever {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.loading-spinner {
	-webkit-animation-duration: 0.75s;
	-moz-animation-duration: 0.75s;
	animation-duration: 0.75s;
	-webkit-animation-iteration-count: infinite;
	-moz-animation-iteration-count: infinite;
	animation-iteration-count: infinite;
	-webkit-animation-name: rotate-forever;
	-moz-animation-name: rotate-forever;
	animation-name: rotate-forever;
	-webkit-animation-timing-function: linear;
	-moz-animation-timing-function: linear;
	animation-timing-function: linear;
	height: 30px;
	width: 30px;
	border: 8px solid #774CFF;
	border-right-color: transparent;
	border-radius: 50%;
	display: inline-block;
}

.loading-spinner {
	position: relative;
	top: 50%;
	right: 0;
	bottom: 0;
	left: 50%;
	margin: -15px 0 -15px;
}
</style>
