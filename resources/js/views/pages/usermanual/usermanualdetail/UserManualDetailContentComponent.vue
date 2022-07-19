<template>
	<!-- section -->
	<div class="section">
		<div v-if="!complete" class="pt-5" style="min-height: 50vh">
            <div class="loading-spinner"></div>
        </div>
		<!-- container -->
		<div class="container" v-if="complete">
			<!-- row -->
			<div class="row pb-5">
				<div class="col-md-12">
					<div class="section-title wow fadeInDown" data-wow-delay=".3s" style="margin-bottom: 0px;">
						<h2>{{ usermanual.title}}</h2>
						<div v-html="usermanual.content" style="text-align:justify">
						</div>
					</div>
				</div>
			</div>
			<!-- /row -->
		</div>
		<!-- /container -->
	</div>
	<!-- /section -->
</template>

<script>
	export default {
		data() {
			return {
				usermanual: {},
				complete: false
			}
		},
		created(){
			let uri = '/api/usermanual/show/' + this.$route.params.id
			this.axios.get(uri).then((response) => {
				this.usermanual = response.data
				this.complete = true
			})
		}
	}
</script>

<style scoped>
	.numberlist{
		border-top: 1px solid rgb(23, 96, 147);
		padding-top: 1em;
	}
	.numberlist ol{
	    counter-reset: li;
		list-style: none;
		*list-style: decimal;
		/*font: 15px 'trebuchet MS', 'lucida sans';*/
		padding: 0;
		margin-bottom: 4em;

	}
	.numberlist ol ol{
		margin: 0 0 0 2em;
	}
				
	.numberlist a{
		position: relative;
		display: block;
		padding: .4em .4em .4em 2em;
		*padding: .4em;
		margin: .5em 0;
		background: #05ecec;
		/*background: #d6f308;*/
		color: #444;
		text-decoration: none;
		-moz-border-radius: .3em;
		-webkit-border-radius: .3em;
		border-radius: .3em;
	}

	.numberlist a:hover{
		background: #cbe7f8;
		text-decoration:underline;
	}
	.numberlist a:before{
		content: counter(li);
		counter-increment: li;
		position: absolute;	
		left: -1.3em;
		top: 50%;
		margin-top: -1em;
		background: #87ceeb;
		height: 2em;
		width: 2em;
		line-height: 1.5em;
		border: .3em solid #d6f308;
		text-align: center;
		font-weight: bold;
		-moz-border-radius: 2em;
		-webkit-border-radius: 2em;
		border-radius: 2em;
		color:#FFF;
	}

	.section .section-title h2 {
	    text-transform: none;
	    font-size: 28px;
	}
</style>