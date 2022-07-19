<template>
<section class="content">
	<div class="row">
		<div class="col-md-8 offset-md-2">
			<div class='box box-primary'>
				<div class='box-header with-border'>
				</div>
				<form action="" method="POST" @submit.prevent="create">
					<div class="form-group ">
						<label class="col-sm-2 col-form-label">Name</label>
						<div class="col-sm-10">
							<input type="text" name="name" class="form-control" id="" placeholder="Nhập Library Type" v-model='libraryType.name' :class="{ 'is-invalid' : errors.name }">
							<span v-if="errors.name" :class="['text text-danger']">{{ errors.name }}</span>
						</div>
					</div>
					<div class="form-group ">
					<label class="col-sm-3 col-form-label">Trạng thái</label>
						<div class="col-sm-10">
							<select class="form-control" v-model='libraryType.status' name="status">
								<option value="active" selected>active</option>
								<option value="inactive">inactive</option>
							</select>
						</div>
					</div>
					<div class="col-sm-10">
						<button class="btn btn-lg btn-primary">Thêm</button>
						<button type="reset" class="btn btn-lg btn-danger">Hủy bỏ</button>
					</div>	  
				</form>		
			</div>
		</div>
	</div>
</section>
</template>
 
<script type="text/javascript">
    export default {
		data(){
			return {
				errors: [],
				libraryType:{
					name: '',
					status: 'inactive',
				}
			}
		},
		methods: {
			create(){
				this.$Progress.start();
				this.$store.dispatch('LibraryType/addLibraryType', this.libraryType).then((response) => {					
					this.errors = [];
					this.$Progress.finish();
					this.$notify({
						type: 'success', 
						title: 'LibraryType',
						text: 'Thêm thành công!'
					});
				}).catch(error => {
					this.errors = error.response.data.errors;
					this.$Progress.fail();
					this.$notify({
						type: 'error', 
						title: 'LibraryType',
						text: 'Thêm không thành công!'
					});
				});
			}
		}
  	}
</script>