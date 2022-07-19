<template>
	<!-- section -->
	<div class="section">
		<div v-if="!complete" class="pt-5" style="min-height: 50vh">
            <div class="loading-spinner"></div>
        </div>
		<!-- container -->
		<div class="container" v-if="complete">
			<!-- row -->
			<div class="row">
				<div class="col-md-6 wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="300ms">
					<div class="ml-4">
						<h3 style="background-image: url('/images/usermanual/rules.png');     background-size: contain; background-repeat: no-repeat;margin-bottom: 1em;"><strong style="padding: 2em; line-height: 1.8em; font-size: 1.3em;">Quy định</a></strong></h3>
				    <div class="numberlist">
				        <ol>
				            <li v-for="(value, index) in rules" :key="index">
				            	<router-link :to="{name:'RuleDetail', params: {slug: value.slug}}">{{ value.title }}</router-link>
				            </li>
				        </ol>
				    </div>
					</div>
				</div>

				<div class="col-md-6 wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="300ms">
					<div class="ml-4">
						<h3 style="background-image: url('/images/usermanual/instruction.png');     background-size: contain; background-repeat: no-repeat;margin-bottom: 1em;"><strong style="padding: 2em; line-height: 1.8em; font-size: 1.3em;">Hướng dẫn sử dụng</a></strong></h3>
					    <div class="numberlist">
					        <ol>
					            <li v-for="(value, index) in usermanual" :key="index">
					            	<router-link :to="{ name: 'UserManualDetail', params: {id: value.id}}">{{ value.title }}</router-link>
					            </li>
					        </ol>
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
				rules: {},
				usermanual: {},
				complete: false
			}
		},
		created(){
			this.axios.get('/api/support').then((response) => {
				// console.log(response.data)
				this.rules = response.data.rule
				this.usermanual = response.data.usermanual
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
</style>