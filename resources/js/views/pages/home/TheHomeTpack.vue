<template>
	<section id="feature">
	    <div class="container">
	        <div class="section-heading" v-for="(value, index) in contentTpacks" :key="index"> 
	            <h1 class="title font-weight-bold wow fadeInDown" data-wow-delay=".3s">{{ value.title }}</h1>
	            <p class="wow fadeInDown" data-wow-delay=".5s" v-html="value.content"></p>
	        </div>
	        <div class="row">
	            <div class="col-md-6 col-lg-6 col-xs-12" v-for="(value, index) in textTpacks" :key="index">
	                <div class="media wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="300ms">
	                    <div class="media-left">
	                        <div class="icon">
	                            {{ value.text }}
	                        </div>
	                    </div>
	                    <div class="media-body">
	                        <h4 class="media-heading">{{ value.title }}</h4>
	                        <p>{{ value.content }}</p>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</section>
</template>


<script>
	export default {
		data(){
			return {
				tpacks: []
			}
		},
		created(){
			var vm = this
			// let uri = 'http://127.0.0.1:8000/api/admins/tpacks';
			this.axios.get('/api/tpacks').then(function(response){
				vm.tpacks = response.data.tpacks
			}).catch(function(error){
				console.log(error)
			})
		},
		computed: {
			contentTpacks: function () {
				return this.tpacks.filter(function (value) {
					if(value.id === 1){
						return value.content
					}
				})
			},
			textTpacks: function () {
				return this.tpacks.filter(function (value) {
					if(value.id !== 0 && value.id !== 1){
						return value.text
					}
				})
			}
		}
    }
</script>


<style scoped>
    #feature {
		padding: 80px 0 0 0;
		background-color: white;
	}

	#feature .media {
		margin: 0px 0 70px 0;
	}

	#feature .media .media-left {
	  padding-right: 25px;
	}

	#feature h3 {
		color: #222222;
		text-transform: uppercase;
		text-align: center;
		margin-bottom: 20px;
		margin: 0px 0px 15px;
		font-weight: 400;
		font-family: "Roboto", sans-serif;
	}

	#feature p {
		color: #777777;
		font-family: "Roboto", sans-serif;
		font-weight: 300;
	}

	#feature .icon {
		text-decoration: none;
		color: #fff;
		background-color: #02bdd5;
		height: 100px;
		text-align: center;
		width: 100px;
		font-size: 50px;
		line-height: 100px;
		overflow: hidden;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		-ms-border-radius: 50%;
		-o-border-radius: 50%;
		text-shadow: #00a4ba 1px 1px, #00a4ba 2px 2px, #00a4ba 3px 3px, #00a4ba 4px 4px, #00a4ba 5px 5px, #00a4ba 6px 6px, #00a4ba 7px 7px, #00a4ba 8px 8px, #00a4ba 9px 9px, #00a4ba 10px 10px, #00a4ba 11px 11px, #00a4ba 12px 12px, #00a4ba 13px 13px, #00a4ba 14px 14px, #00a4ba 15px 15px, #00a4ba 16px 16px, #00a4ba 17px 17px, #00a4ba 18px 18px, #00a4ba 19px 19px, #00a4ba 20px 20px, #00a4ba 21px 21px, #00a4ba 22px 22px, #00a4ba 23px 23px, #00a4ba 24px 24px, #00a4ba 25px 25px, #00a4ba 26px 26px, #00a4ba 27px 27px, #00a4ba 28px 28px, #00a4ba 29px 29px, #00a4ba 30px 30px, #00a4ba 31px 31px, #00a4ba 32px 32px, #00a4ba 33px 33px, #00a4ba 34px 34px, #00a4ba 35px 35px, #00a4ba 36px 36px, #00a4ba 37px 37px, #00a4ba 38px 38px, #00a4ba 39px 39px, #00a4ba 40px 40px, #00a4ba 41px 41px, #00a4ba 42px 42px, #00a4ba 43px 43px, #00a4ba 44px 44px, #00a4ba 45px 45px, #00a4ba 46px 46px, #00a4ba 47px 47px, #00a4ba 48px 48px, #00a4ba 49px 49px, #00a4ba 50px 50px, #00a4ba 51px 51px, #00a4ba 52px 52px, #00a4ba 53px 53px, #00a4ba 54px 54px, #00a4ba 55px 55px, #00a4ba 56px 56px, #00a4ba 57px 57px, #00a4ba 58px 58px, #00a4ba 59px 59px, #00a4ba 60px 60px, #00a4ba 61px 61px, #00a4ba 62px 62px, #00a4ba 63px 63px, #00a4ba 64px 64px, #00a4ba 65px 65px, #00a4ba 66px 66px, #00a4ba 67px 67px, #00a4ba 68px 68px, #00a4ba 69px 69px, #00a4ba 70px 70px, #00a4ba 71px 71px, #00a4ba 72px 72px, #00a4ba 73px 73px, #00a4ba 74px 74px, #00a4ba 75px 75px, #00a4ba 76px 76px, #00a4ba 77px 77px, #00a4ba 78px 78px, #00a4ba 79px 79px, #00a4ba 80px 80px, #00a4ba 81px 81px, #00a4ba 82px 82px, #00a4ba 83px 83px, #00a4ba 84px 84px, #00a4ba 85px 85px, #00a4ba 86px 86px, #00a4ba 87px 87px, #00a4ba 88px 88px, #00a4ba 89px 89px, #00a4ba 90px 90px, #00a4ba 91px 91px, #00a4ba 92px 92px, #00a4ba 93px 93px, #00a4ba 94px 94px, #00a4ba 95px 95px, #00a4ba 96px 96px, #00a4ba 97px 97px, #00a4ba 98px 98px, #00a4ba 99px 99px, #00a4ba 100px 100px;
	}
	#feature .media {
		margin: 0px 0px 20px;
	}
	#feature .media-heading {
		font-family: 'Roboto Condensed', sans-serif; 
		margin-top: 0;
		margin-bottom: 5px;
		line-height: 1.1;
	}
	#feature .section-heading {
		text-align: center;
		margin-bottom: 65px;
	}

	#feature .section-heading p {
		font-weight: 300;
		color: #727272;
		line-height: 20px;
	}

	#feature .title {
		/*font-size: 2.5em;*/
		line-height: 1.1;
		font-weight: 300;
		color: #005c5c;
		text-transform: uppercase;
		margin-bottom: 20px;
	}
</style>
