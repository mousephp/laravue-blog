<template>
	<div>
		<div v-if="!complete" class="pt-5" style="min-height: 50vh">
            <div class="loading-spinner"></div>
        </div>
        <!-- section -->
        <div class="section mb-5" v-if="complete">
		<!-- container -->
		<div class="container">
			<!-- row -->
			<div class="row">
				<div class="col-md-12 wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="300ms" v-html="about.content">
				</div>
			</div>
			<!-- /row -->
		</div>
		<!-- /container -->
	</div>
	<!-- /section -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				about: {},
				complete: false
			}
		},
		created(){
			this.axios.get('/api/abouts').then((response) => {
				this.about = response.data.abouts
				this.complete = true
			})
		}
	}
</script>