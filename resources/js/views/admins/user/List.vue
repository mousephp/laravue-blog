<template>
<div style="" class="d-flex no-auth" v-if="users.success == false">
    <div class="d-flex flex-column m-auto">
        <h1 class="text-center">401</h1>
        <h1 class="text-center">UNAUTHORIZED</h1>
        <h5 class="text-center">{{ users.message }}</h5>
    </div>
</div>

<div class="content" v-else>
	<div class="row mb-5">
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">						
			<div class="card mb-3">
				<div class="card-header">
					<h3>
						<i class="fa fa-table"></i> Users
						<router-link class="btn btn-primary btn-sm float-right" :to="{ name: 'UserCreate' }">Thêm</router-link>
					</h3>
				</div>

				<div class="card-body">
					<div class="table-responsive">
					<table id="example1" class="table table-bordered table-hover display">
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Email</th>
								<th>Create At</th>
								<th style="min-width: 4em;">Xóa</th>
							</tr>
						</thead>										
						<tbody>
							<tr v-for="(value, index) in users.data" :key="index">
								<td>{{ value.id }}</td>
								<td>{{ value.name }} </td>
								<td>{{ value.email }} </td>
								<td>{{ value.created_at }} </td>			
								<td>
									<router-link :to="{ name: 'UserEdit', params: {id: value.id }}" class="btn btn-success btn-sm">
											<i class="fa fa-edit" aria-hidden="true"></i> 
									</router-link>
									<button role="button" v-on:click="destroy(value.id, index)" class="btn btn-danger btn-sm">
										<i class="fa fa-trash" aria-hidden="true"></i> 
									</button>
								</td>
							</tr>
						</tbody>
					</table>
					</div>
					
				</div>														
			</div><!-- end card-->					
		</div>
	</div>	
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data(){
		return {}
	},
	updated: function(){
		$(document).ready(function() {
			$('#example1').DataTable();
		} );
		console.log('data:'+this.users[0])
	},
	mounted() {
		this.$store.dispatch('User/getUsers')
	},
	computed: {
		...mapGetters({users: 'User/users'})
	},
	methods:{
		destroy(id, index){
			this.$swal({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it!'
			}).then((result) => {
				if (result.value) {                 
					this.$store.dispatch('deleteUser', id);
					this.$swal('Deleted!','Tệp của bạn đã bị xóa.','success')
				}
			}).catch((err) => {
				this.$swal("Failed! Xóa không thành công", err.message, "warning");
			})
		}
	}
}
</script>