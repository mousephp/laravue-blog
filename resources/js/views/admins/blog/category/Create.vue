<template>
<div class="row">
	<div class="col-md-8 offset-md-2  box-header with-border">
		<div class='card'>
			<div class="card-body table-responsive p-0">
				<form  @submit.prevent="create">
					<div class="form-group ">
						<label class="col-sm-2 col-form-label">Name</label>
						<div class="col-sm-10">
							<input type="text" name="name" class="form-control" id="" placeholder="Nhập Category" v-model='category.name' :class="{ 'is-invalid' : errors.name }">
							<span v-if="errors.name" :class="['text text-danger']">{{ errors.name }}</span>
						</div>
					</div>
					<div class="form-group ">
						<label class="col-sm-2 col-form-label">Trạng thái</label>
						<div class="col-sm-10">
							<select class="form-control select2" v-model='category.status' name="status" style="width: 100%;">
								<option value="active">active</option>
								<option value="inactive">inactive</option>
							</select>
							<span v-if="errors.status" :class="['text text-danger']">{{ errors.status }}</span>
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
</div>
</template>


<script type="text/javascript">
   	export default {
		data(){
			return {
				errors: [],
				category:{
					name: '',
					status: 'active',
				}
			}
		},
		methods: {
			create(){
				this.$Progress.start();
				this.$store.dispatch('addCategory', this.category)
					.then(response => {
						if(response.value){
							this.$Progress.finish();
							this.$notify({
								type: 'success', 
								title: 'Category',
								text: 'Thêm thành công!'
							});
						}
					})
					.catch(error => {
						this.errors = error.response.data.errors;
						this.$Progress.fail();
						this.$notify({
							type: 'error', 
							title: 'Category',
							text: 'Thêm không thành công!'
						});
					});
			}
		}
  	}
</script>