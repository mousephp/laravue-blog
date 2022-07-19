<template>
<div class="row">
	<div class="col-md-8 offset-md-2">
		<div class='box box-primary'>
			<form method="POST" @submit.prevent="update">
				<div class="form-group ">
					<label class="col-sm-2 col-form-label">Name</label>
					<div class="col-sm-10">
						<input type="text" name="name" class="form-control" placeholder="Nhập Library Type" v-model='library_type.name' :class="{ 'is-invalid' : errors.name }">
						<span v-if="errors.name" :class="['text text-danger']">{{ errors.name }}</span>
					</div>
				</div>
				<div class="form-group ">
				<label class="col-sm-3 col-form-label">Trạng thái</label>
					<div class="col-sm-10">
						<select class="form-control" v-model='library_type.status' name="status">
							<option value="active" selected>active</option>
							<option value="inactive">inactive</option>
						</select>
						<span v-if="errors.status" :class="['text text-danger']">{{ errors.status }}</span>
					</div>
				</div>
				<div class="col-sm-10">
					<button class="btn btn-lg btn-primary">Sửa</button>
					<button type="reset" class="btn btn-lg btn-danger">Hủy bỏ</button>
				</div>	  
			</form>		
		</div>
	</div>
</div>
</template>


<script type="text/javascript">
	import { mapGetters } from 'vuex'

    export default {
		data() {
	        return {
				errors: [],
	        }
	    },
		beforeCreate(){ 
			this.$store.dispatch('LibraryType/getLibraryType', this.$route.params.id)
		},
		computed: {
			...mapGetters({library_type: 'LibraryType/library_type'})
		},
		methods: {
			update() {
				this.$Progress.start();
				
				this.$store.dispatch('LibraryType/editLibraryType', this.library_type)
					.then((response) => {
						this.$router.push({name: 'LibraryTypeList'});
						this.errors = [];
						this.$Progress.finish();
						this.$notify({
							type: 'success', 
							title: 'Library Type',
							text: 'Sửa thành công!'
						});
					}).catch(error => {
						this.errors = error.response.data.errors;    
						this.$Progress.fail();
						this.$notify({
							type: 'error', 
							title: 'Library Type',
							text: 'Sửa không thành công!'
						});	
					});
			}
		}
  	}
</script>
