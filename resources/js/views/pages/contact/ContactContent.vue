<template>
	<section class="p-t-40" id="content-contact">
		<div class="container">
			<div class="row">
			
				<div class="col-sm-12 col-md-8">
					<h3><b style="color: #005c5c;">GỬI TIN NHẮN ĐẾN CHÚNG TÔI</b></h3>
					<p class="mb-30 mr-100 mr-sm-0">Chúng tôi rất thích nghe ý kiến ​​của bạn - vui lòng liên hệ để nhận xét, yêu cầu, quan hệ đối tác quảng cáo hoặc yêu cầu công việc.</p>
					<form class="form-block form-bold form-mb-20 form-h-35 form-brdr-b-grey pr-50 pr-sm-0" v-on:submit.prevent="createContact">
						<div class="row">
							<div class="col-sm-6">
								<p class="color-ash">Tên đầy đủ*</p>
								<div class="pos-relative">
									<input class="pr-20" type="text" v-model="contact.name" :class="{ 'is-invalid' : errors.name }">
									<span v-if="errors.name" :class="['text text-danger']">{{ errors.name }}</span>
								</div><!-- pos-relative -->
							</div><!-- col-sm-6 -->
							
							<div class="col-sm-6">							
								<p class="color-ash">Email*</p>
								<div class="pos-relative">
									<input class="pr-20" type="email" v-model="contact.email"  :class="{ 'is-invalid' : errors.email }">
									<i class="dplay-none abs-tbr lh-35 font-13 color-green ion-android-done"></i>
									<span v-if="errors.email" :class="['text text-danger']">{{ errors.email }}</span>
								</div><!-- pos-relative -->
							</div><!-- col-sm-6 -->
							
							<div class="col-sm-6">	
								<p class="color-ash">Số điện thoại*</p>
								<div class="pos-relative">
									<input class="pr-20" type="number"  v-model="contact.phone" :class="{ 'is-invalid' : errors.phone }">
									<i class="dplay-none abs-tbr lh-35 font-13 color-green ion-android-done"></i>
									<span v-if="errors.phone" :class="['text text-danger']">{{ errors.phone }}</span>
								</div><!-- pos-relative -->
							</div><!-- col-sm-6 -->
							
							<div class="col-sm-6">	
								<p class="color-ash">Công ty / Tổ chức*</p>
								<div class="pos-relative">
									<input class="pr-20" type="text" v-model="contact.company"  :class="{ 'is-invalid' : errors.company }">
									<i class="dplay-none abs-tbr lh-35 font-13 color-green ion-android-done"></i>
									<span v-if="errors.company" :class="['text text-danger']">{{ errors.company }}</span>
								</div><!-- pos-relative -->
							</div><!-- col-sm-6 -->
							
							<div class="col-sm-12">
								<div class="pos-relative pr-80">
									<p class="color-ash">Nội dung tin nhắn*</p>
									<!--<textarea class="mb-0"  v-model="contact.content"  :class="{ 'is-invalid' : errors.content }"></textarea> -->
									<ckeditor :editor="editor" v-model="contact.content" :config="{placeholder:'Nhập nội dung'}" :class="{ 'is-invalid' : errors.content }"></ckeditor>

									<span v-if="errors.content" :class="['text text-danger']">{{ errors.content }}</span>
								</div><!-- pos-relative -->
							</div><!-- col-sm-6 -->

							<div class="col-md-12">
								<button class="abs-br font-20 plr-15 btn-fill-primary" type="submit"><i class="fa fa-paper-plane"></i></button>
							</div><!-- col-sm-6 -->
						</div><!-- row -->
					</form>
				</div><!-- col-md-6 -->
				
				<div class="col-sm-12 col-md-4">
					<h3 class="mb-20 mt-sm-50"><b style="color: #005c5c;">THÔNG TIN LIÊN HỆ</b></h3>
					
					<address>
                        <span>
                       <!--  </span>
                        Địa chỉ ở đây<br>Orlando, Florida, 32801<br>
                        <span> -->
                            Địa chỉ: 123 Lê Lợi, TP Huế<br>
                            Điện thoại: 0123456789<br>
                            Email: tpack@gmail.com<br>
                            Fax: đang cập nhật
                        </span>
                    </address>


				</div><!-- col-md-6 -->
			</div><!-- row -->
		</div><!-- container -->
	</section>
</template>

<script>
	import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

	export default {
		data(){
			return {
				contact: {},
				errors: [],
				editor: ClassicEditor,
				editorData: '<p>Content of the editor.</p>',
				editorConfig: {}
			}
		},
		mounted(){
			$( document ).ready(function() {
			    $('textarea').each(function () {
				  this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
				}).on('input', function () {
				  this.style.height = 'auto';
				  this.style.height = (this.scrollHeight) + 'px';
				});
			});
		},
		methods:{
			createContact(){
				this.$Progress.start();
				let uri = 'http://127.0.0.1:8000/api/contact/create';
				this.axios.post(uri, this.contact).then((response) => {
					this.$router.push({name: 'Contact'});
					this.$Progress.finish();
					this.$notify({
						type: 'success', 
						title: 'Tpack',
						text: 'Gửi Liên hệ thành công!'
					});
				}).catch(error => {
					this.errors = error.response.data.errors;
  				  	this.$Progress.fail();
						this.$notify({
						type: 'error', 
						title: 'Tpack',
						text: 'Gửi Liên hệ thất bại!'
					});
				});
			}
		}
	}
</script>

<style scoped>
	#content-contact {
		background-color: white;
		padding-bottom: 40px;
	}
	/* FORM INPUT STYLING */

.nwsltr-primary-1{ position: relative; }
	
.nwsltr-primary-1 input{ height: 45px; display: block; width: 100%; padding: 0 65px 0 20px; 
	border: 1px solid #F9B500; }

.nwsltr-primary-1 button{ position: absolute; top: 1px; bottom: 1px; right: 1px; width: 45px; text-align: center; 
	background: #F9B500; color: #000; }

.nwsltr-primary-1 button i{ font-size: 1.3em; }

.nwsltr-primary-1 button:hover{ background: #000; color: #fff; }


.form-block input { display: block; width: 100%; }
.form-block textarea{ display: block; width: 90%; }

.form-bold input,
.form-bold textarea{ font-weight: 700; }

.form-plr-15 input,
.form-plr-15 textarea{ padding: 0 15px; }

.form-h-35 input{ height: 35px; }
.form-h-40 input{ height: 40px; }
.form-h-45 input{ height: 45px; }

.form-mb-20 input,
.form-mb-20 textarea{ margin-bottom: 20px; }

.form-brdr-grey input,
.form-brdr-grey textarea{ border: 1px solid #ccc; }

.form-brdr-lite-white input,
.form-brdr-lite-white textarea{ border: 1px solid #ddd; }

.form-brdr-b-grey input { outline: 0; border: 0px; border-bottom: 1px solid #ccc; }
.form-brdr-b-grey textarea{ outline: 0; border: 1px solid #ccc; }

.form-brdr-b-grey input:focus{ 
	border-bottom: 1px solid red; 
	/*border-bottom: 1px solid #583ee0; */
	/*border-bottom: 1px solid #E700FF; */
}
.form-brdr-b-grey textarea:focus{ 
	border: 1px solid red; 
	/*border: 1px solid #583ee0; */
	/*border: 1px solid #E700FF; */
}
/* POSITION */

.pos-relative{ position: relative; z-index: 1; }

.abs-tlr{ position: absolute; top: 0; left: 0; right: 0; z-index: 1; }
.abs-blr{ position: absolute; bottom: 0; left: 0; right: 0; z-index: 1; }
.abs-tl{ position: absolute; top: 0; left: 0; z-index: 1; }
.abs-br{ position: absolute; bottom: 0; right: 0; z-index: 1; }
.abs-tbr{ position: absolute; top: 0; bottom: 0; right: 0; z-index: 1; }
.abs-tblr{ position: absolute; top: 0; bottom: 0; left: 0; right: 0; z-index: 1; }

.z--1{ z-index: -1; }
.btn-fill-primary{ 
	text-align: center; 
	height: 45px; 
	line-height: 43px;
	border: 1px solid #000000;
    background: #00e0f9;
	/*border: 1px solid #F9B500; 
	background: #F9B500;*/ 
	border-radius: 2px; 
	color: #111; 
	font-size: 2em;
}
.btn-fill-primary:hover{ background: none; }
</style>