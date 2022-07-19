<template>
  	<section class="moduler wrapper_404">
	    <div class="container">
	        <div class="row">
	            <div class="col-md-12">
	                <div class="text-center">
	                    <h1 class="wow fadeInUp animated cd-headline slide" data-wow-delay=".4s" >404</h1>
	                    <h2 class="wow fadeInUp animated" data-wow-delay=".6s">Hmm. Chúng tôi gặp khó khăn khi tìm trang web</h2>
	                    <p class="wow fadeInUp animated" data-wow-delay=".9s">Trang bạn đang tìm kiếm đã bị di chuyển, xóa, đổi tên hoặc có thể không bao giờ tồn tại.</p>
	                    <router-link to="/" class="btn btn-dafault btn-home wow fadeInUp animated" data-wow-delay="1.1s">Quay về trang chủ</router-link>
	                </div>
	            </div>
	        </div>
	    </div>
	</section>
</template>
<style>
	.moduler {
		padding: 140px 0;
		min-height: 100vh;
	}
	.wrapper_404 h1 {
		font-size: 12em;
		color: #02bdd5;
		line-height: 1;
	}

	.wrapper_404 h2 {
		font-size: 2em;
		margin-top: 0;
	}

	.wrapper_404 .btn-home {
		background: #414141;
		/*background: #00cefb66;*/
		border: none;
		color: #fff;
		padding: 20px 35px;
		margin-top: 10px;
		font-size: 16px;
		font-size: 13px;
		line-height: 1em;
		text-transform: uppercase;
		letter-spacing: normal;
		border-radius: 10px;
		font-weight: bold;
	}

	.wrapper_404 .btn-home::before {
		content: "";
		display: block;
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		top: 0;
		left: 0;
		background: #a64bf4;
		background: -webkit-linear-gradient(45deg, #00dbde, #fc00ff);
		background: -o-linear-gradient(45deg, #00dbde, #fc00ff);
		background: -moz-linear-gradient(45deg, #00dbde, #fc00ff);
		background: linear-gradient(45deg, #00dbde, #fc00ff);
		opacity: 0;
		-webkit-transition: all 0.4s;
		-o-transition: all 0.4s;
		-moz-transition: all 0.4s;
		transition: all 0.4s;
	}

	.wrapper_404 .btn-home:hover:before {
		opacity: 1;
	}


</style>
<script>
    export default {
        mounted() {
            // console.log('Component mounted.')
        }
    }
</script>