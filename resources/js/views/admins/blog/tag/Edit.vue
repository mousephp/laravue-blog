<template>
<div class="row">
	<div class="col-md-8 offset-md-2">
		<div class='box box-primary'>
			<form method="POST" @submit.prevent="update">
				<div class="form-group ">
					<label class="col-sm-2 col-form-label">Name</label>
					<div class="col-sm-10">
						<input type="text" name="name" class="form-control" placeholder="Nhập Tag" v-model='tag.name' :class="{ 'is-invalid' : errors.name }">
						<span v-if="errors.name" :class="['text text-danger']">{{ errors.name[0] }}</span>
					</div>
				</div>
				<div class="form-group ">
				<label class="col-sm-3 col-form-label">Trạng thái</label>
					<div class="col-sm-10">
						<select class="form-control" v-model='tag.status' name="status">
							<option value="active" selected>active</option>
							<option value="inactive">inactive</option>
						</select>
						<span v-if="errors.status" :class="['text text-danger']">{{ errors.status[0] }}</span>
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
import { mapState, mapGetters } from 'vuex';

export default {
	data() {
		return {
			errors: [],
		}
	},
	beforeCreate: function () {
		this.$store.dispatch('tag/fetchOne', this.$route.params.id);
	},
	computed: {
		...mapGetters({tag: 'tag/tag'})
	},
	methods: {
		update() {
			this.$store.dispatch('tag/editTag', this.tag).then((response) => {
				this.$router.push({name: 'TagList'});
				this.setSuccessMessage()
				this.$Progress.finish();
				if(response.data.message){
					this.$notify({
						type: 'success', 
						title: 'Tag',
						text: 'Sửa thành công!'
					});
				} 					
			}).catch((error) => {
				this.setErrors(error)
				this.$Progress.fail();	
				this.$notify({
					type: 'error', 
					title: 'Tag',
					text: 'Sửa không thành công!'
				});
			});
		},
		setErrors(error) {
			this.errors = error.data.errors;
		},
		setSuccessMessage() {
			this.reset();
		},
		reset() {
			this.errors = [];
			this.tag = {name: null, status: null};
		}
	}
}
</script>
