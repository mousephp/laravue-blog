<template>
	<!-- Start content -->
	<div class="content">
		<div class="row mb-5">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">						
				<div class="card mb-3">
					<div class="card-header">
						<h3><i class="fa fa-telegram"></i> Link</h3>
					</div>

					<div class="card-body">
						<div class="table-responsive">
							<table id="example1" class="table table-bordered table-hover display">
								<thead>
									<tr>
										<th>ID</th>
										<th>Name</th>
										<th>Link</th>
										<th>Status</th>
										<th style="min-width: 4em;">Xóa</th>
									</tr>
								</thead>										
								<tbody>
									<tr v-for="(value, index) in links" :key="index">
										<td>{{ value.id }}</td>
										<td>{{ value.name }} </td>
										<td>{{ value.link }} </td>
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
	import { mapGetters } from 'vuex'

	export default {
		data(){
			return {
				// links: [],
			}
		},
		mounted(){
			this.$store.dispatch('Link/getLinks')
		},
		computed: {
			...mapGetters({links: 'Link/links'})
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
						this.$store.dispatch('Link/deleteLink', id).then(response => {
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