<template>
	<!-- Start content -->
	<div class="content">
		<div class="row mb-5">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">						
				<div class="card mb-3">
					<div class="card-header">
						<h3><i class="fa fa-telegram"></i> Comemts</h3>
					</div>

					<div class="card-body">
						<div class="table-responsive">
						<table id="example1" class="table table-bordered table-hover display">
							<thead>
								<tr>
									<th>ID</th>
									<th>Message</th>
									<th>User</th>
									<th>Status</th>
									<th style="min-width: 4em;">Xóa</th>
								</tr>
							</thead>										
							<tbody>
								<tr v-for="(value, index) in comments" :key="index">
									<td>{{ value.id }}</td>
									<td>{{ value.message }} </td>
									<td>{{ value.user }} </td>
									<td>{{ value.status }} </td>			
									<td>
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
	<!-- END content -->
</template>


<script>
	export default {
		data(){
			return {
				comments: {},
			}
		},
		created: function(){
            let uri = 'http://127.0.0.1:8000/api/admins/news-comments';
			this.axios.get(uri).then(response => {
				this.comments = response.data.comments;
			});
		},
		updated: function(){
			$(document).ready(function() {
				$('#example1').DataTable();
			} );
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
						let uri = `http://127.0.0.1:8000/api/admins/news-comment/${id}`;
						let app = this;
						this.axios.delete(uri).then(response => {
							app.comments.splice(index, 1);
							this.$swal('Deleted!','Tệp của bạn đã bị xóa.','success');
						}).catch(function (data) {
							this.$swal("Failed! Xóa không thành công", data.message, "warning");
						});
					} 
				});
			}
		}
	}
</script>