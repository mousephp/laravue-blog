<template>
<div class="row">
	<div class="col-md-6 offset-md-2">
		<form action="" method="POST" @submit.prevent="update">
			<div class="form-group ">
				<label class="col-sm-2 col-form-label">Name</label>
				<div class="col-sm-10">
				  	<input type="text" name="name" class="form-control" id="" placeholder="Nhập tên danh mục" v-model='category.name'  :class="{ 'is-invalid' : errors.name }">	
					<span v-if="errors.name" :class="['text text-danger']">{{ errors.name }}</span>
				</div>
			</div>
			<div class="form-group ">
	          <label class="col-sm-3 col-form-label">Trạng thái</label>
	            <div class="col-sm-10">
		          	<select class="form-control select2" name="status" v-model='category.status'  style="width: 100%;">
			            <option value="active">active</option>
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
</template>


<script type="text/javascript">
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
	data() {
		return {
			errors: [],
			isRed: false
		}
	},
	beforeCreate: function () {
		this.$store.dispatch('fetchOne', this.$route.params.id);
	},
	computed: {
		...mapGetters(['category'])
	},
	methods: {
		...mapActions({
			addNotification: 'Notification/addNotification'
		}),
		update() {
			this.$store.dispatch('editCategory', this.category).then(res => {
				this.addNotification({
					show: true,
					text: 'Success!'
				})
			}).catch((err) => {
				this.errors = err.response.data.errors
			});
			// this.$router.push({name: 'CategoryList'});
		}
	}
}
</script>
