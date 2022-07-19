<template>
	<div class="content">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">                      
					<div class="card mb-3">
						<div class="card-header">
							<h3><i class="fa fa-pencil"></i> Chỉnh sửa</h3>
						</div>
							
						<div class="card-body">
							<form v-on:submit.prevent="update">
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label class="font-weight-bold">Viết tắt</label>
										<input type="text" class="form-control"  aria-describedby="" placeholder="Nhập chữ viết tắt" v-model="tpack.text" :class="{ 'is-invalid' : errors.text }">
										<span v-if="errors.text" :class="['text text-danger']">{{ errors.text }}</span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label class="font-weight-bold">Tiêu đề</label>
										<input type="text" class="form-control"  aria-describedby="" placeholder="Nhập tiêu đề" required="" v-model="tpack.title" :class="{ 'is-invalid' : errors.title }">
										<span v-if="errors.title" :class="['text text-danger']">{{ errors.title }}</span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label class="font-weight-bold">Nội dung</label>
										<ckeditor :editor="editor" v-model="tpack.content" :config="editorConfig" :class="{ 'is-invalid' : errors.content }"></ckeditor>
										<span v-if="errors.content" :class="['text text-danger']">{{ errors.content }}</span>
									</div>
								</div>

								<div class="col-md-6">
									<label class="col-form-label">Trạng thái</label>
									<div class="form-group">
										<select class="form-control select2" v-model='tpack.status' name="status" style="width: 100%;">
											<option value="active">active</option>
											<option value="inactive">inactive</option>
										</select>
										<span v-if="errors.status" :class="['text text-danger']">{{ errors.status }}</span>
									</div>
								</div>


								<div class="col-md-6"></div>
								<!-- Lưu -->
								<div class="col-md-3"></div>
								<div class="col-md-6">
									<button type="submit" class="btn btn-primary float-right"><span class="btn-label"><i class="fa fa-save"></i></span> Lưu lại</button>
								</div>
								<div class="col-md-6">
									<router-link :to="{ name: 'TpackList'}" class="btn btn-danger"><span class="btn-label"><i class="fa fa-times"></i></span>Hủy bỏ</router-link>
								</div>
								<!-- end lưu -->

							</div> <!-- end row -->

							</form>
						</div>  <!-- end card-body -->                        
					</div><!-- end card-->                  
				</div>
			</div>
		</div>
		<!-- END container-fluid -->
	</div>
	<!-- END content -->
</template>


<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import noti from '../../../store/notification';
import { mapGetters } from 'vuex'

export default {
	data(){
		return {
			errors: [],
			editor: ClassicEditor,
			editorData: '<p>Content of the editor.</p>',
			editorConfig: {}	
		}
	},
	beforeCreate: function () {
		this.$store.dispatch('Tpack/getTpack', this.$route.params.id);			
	},
	computed: {
		...mapGetters({tpack: 'Tpack/tpack'}),	
	},
	methods: {
		update(){
			this.$Progress.start();
			this.$store.dispatch('Tpack/editTpack', this.tpack).then((response) => {
				this.$router.push({name: 'TpackList'});
				this.errors = [];
				this.$Progress.finish();
				if(response.data.message){
					this.$notify({
						type: 'success', 
						title: 'Tpack',
						text: 'Sửa thành công!'
					});
					// Notification.success()
				} 					
			}).catch(error => {
				this.errors = error.response.data.errors;    
				this.$Progress.fail();	
				this.$notify({
					type: 'error', 
					title: 'Tpack',
					text: 'Sửa không thành công!'
				});
				// Notification.error()
			});
		}
	}
}
</script>