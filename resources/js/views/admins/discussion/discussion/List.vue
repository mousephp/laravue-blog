<template>
	<!-- Start content -->
	<div class="content">
		<div class="row mb-5">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">						
				<div class="card mb-3">
					<div class="card-header">
						<h3><i class="fa fa-table"></i> DISCUSSION
							<router-link class="btn btn-primary btn-sm float-right" :to="{ name: 'DiscussionCreate' }">Thêm</router-link></h3>
					</div>

					<div class="card-body">
						<div class="table-responsive">
						<table id="example1" class="table table-bordered table-hover display">
							<thead>
								<tr>
									<th>ID</th>
									<th>Tiêu đề</th>
									<th>Author</th>
									<th>Trạng thái</th>
									<th>Like</th>
									<th>View</th>
									<th>Type</th>
									<th style="min-width: 4em;">Tùy chọn</th>
								</tr>
							</thead>										
							<tbody>
								<tr v-for="(value, index) in discussions" :key="index">
									<td>{{ value.id }}</td>
									<td>{{ value.title }}</td>
									<td>{{ value.user.name }}</td>
									<td>
										<div class="form-group clearfix">                     
											<div class="form-check">
											<input type="checkbox" class="form-check-input" id="exampleCheck1" v-if="value.status == 'inactive'" disabled>   
											<input v-else type="checkbox" class="form-check-input" id="exampleCheck1" v-model='value.status' disabled>   
											</div>    
										</div>
									</td>
									<td>{{value.like}}</td>
									<td>{{value.view}}</td>
									<td>{{value.discussion_type.name}}</td>
									<td>
										<router-link :to="{ name: 'DiscussionEdit', params: {id: value.id }}" class="btn btn-success btn-sm">
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
	<!-- END content -->
</template>


<script>
	import { mapGetters } from 'vuex'
	
	export default {
		data(){
			return {
				// discussions: []
			}
		},
		mounted(){
			this.$store.dispatch('Discussion/getDiscussions')
		},
		computed: {
			...mapGetters({discussions: 'Discussion/discussions'})
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
						this.$store.dispatch('Discussion/deleteDiscussion', id).then(response => {
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