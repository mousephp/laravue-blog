<template>
<div class="row">
	<div class="col-md-8 offset-md-2">
		<div class='box box-primary'>
			<form method="POST" @submit.prevent="update">
				<div class="form-group ">
					<label class="col-sm-2 col-form-label">Name</label>
					<div class="col-sm-10">
						<input type="text" name="name" class="form-control" placeholder="Nhập Discussion Type" v-model='discussion_type.name' :class="{ 'is-invalid' : errors.name }">
						<span v-if="errors.name" :class="['text text-danger']">{{ errors.name }}</span>
					</div>
				</div>
				<div class="form-group ">
				<label class="col-sm-3 col-form-label">Trạng thái</label>
					<div class="col-sm-10">
						<select class="form-control" v-model='discussion_type.status' name="status">
							<option value="active" selected>active</option>
							<option value="inactive">inactive</option>
						</select>
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
			this.$store.dispatch('DiscussionType/viewDiscussionType', this.$route.params.id)
		},
		computed: {
			...mapGetters({discussion_type: 'DiscussionType/discussion_type'})
		},
		methods: {
			update() {
				this.$Progress.start();
				this.$store.dispatch('DiscussionType/editDiscussionType', this.discussion_type).then((response) => {
					this.$router.push({name: 'DiscussionTypeList'});
					this.errors = [];
					this.$Progress.finish();
				}).catch(error => {
					this.errors = error.response.data.errors;    
  				  	this.$Progress.fail();	
				});
			}
		}
  	}
</script>
