<template>
<!-- <div style="" class="d-flex no-auth" v-if="user_manual.success == false">
    <div class="d-flex flex-column m-auto">
        <h1 class="text-center">401</h1>
        <h1 class="text-center">UNAUTHORIZED</h1>
        <h5 class="text-center">{{ permissions.message }}</h5>
    </div>
</div> -->

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
									<label class="font-weight-bold">Tiêu đề</label>
									<input type="text" class="form-control" id="" aria-describedby="" placeholder="Nhập tiêu đề" required="" v-model="user_manual.title" :class="{ 'is-invalid' : errors.title }">
									<span v-if="errors.title" :class="['text text-danger']">{{ errors.title }}</span>
								</div>
							</div>
							
							<div class="col-md-6">
								<label class="col-form-label">Trạng thái</label>
								<div class="form-group">
									<select class="form-control select2" v-model='user_manual.status' name="status" style="width: 100%;">
										<option value="active">active</option>
										<option value="inactive">inactive</option>
									</select>
									<span v-if="errors.status" :class="['text text-danger']">{{ errors.status }}</span>
								</div>
							</div>

							<div class="col-md-6">
								<div class="form-group">
									<label class="font-weight-bold">Nội dung</label>
									<ckeditor :editor="editor" v-model="user_manual.content" :config="editorConfig" :class="{ 'is-invalid' : errors.content }"></ckeditor>
									<span v-if="errors.content" :class="['text text-danger']">{{ errors.content }}</span>
								</div>
							</div>

							<div class="col-md-12"></div>
							<!-- Lưu -->
							<div class="col-md-6">
								<button type="submit" class="btn btn-primary float-right"><span class="btn-label"><i class="fa fa-save"></i></span> Lưu lại</button>
							</div>
							<div class="col-md-6">
								<router-link :to="{ name: 'UserManualList'}" class="btn btn-danger"><span class="btn-label"><i class="fa fa-times"></i></span>Hủy bỏ</router-link>
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
	import {mapState, mapGetters } from 'vuex'

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
			this.$store.dispatch('getUserManual', this.$route.params.id);			
		},
		computed: {
            ...mapGetters(['user_manual']),	
        },
		methods: {
			update(){
				this.$Progress.start();
				this.$store.dispatch('editUserManual', this.user_manual)
					.then(response => {
						this.$router.push({name: 'UserManualList'});
						this.$Progress.finish();
						this.$notify({
							type: 'success', 
							title: 'User Manual',
							text: 'Sửa thành công!'
						});
					})
					.catch(error => {
						this.errors = error.response.data.errors;		
						this.$Progress.fail();
						this.$notify({
							type: 'error', 
							title: 'User Manual',
							text: 'Sửa không thành công!'
						});
					});
			}
		}
	}
</script>