<template>
	<!-- Start content -->
	<div class="content">
		<div class="row mb-5">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">						
				<div class="card mb-3">
					<div class="card-header">
						<h3><i class="fa fa-table"></i> Thành phần Library
                        <br>
                        <a class="btn btn-warning btn-sm fas fa-video text-red float-left" @click="libraryVideo"><p>Library Video</p></a>
                        <a class="btn btn-warning btn-sm fas fa-image text-blue float-left" @click="libraryImage"><p>Library Image</p></a>
                        <a class="btn btn-warning btn-sm fas fa-file text-green float-left" @click="libraryDocument"><p>Library Document</p></a>

                        <br>
						<router-link class="btn btn-primary btn-sm float-right" :to="{ name: 'LibraryCreate' }">Thêm</router-link>                       
                        </h3>
					</div>

					<div class="card-body">
						<div class="table-responsive">
							<table id="example1" class="table table-bordered table-hover display">
								<thead>
									<tr>
										<th>ID</th>
										<th>Tiêu đề</th>
										<th>Media</th>
										<th>Library Type</th>
										<th>User</th>
										<th>Trạng thái</th>
										<th style="min-width: 4em;">Tùy chọn</th>
									</tr>
								</thead>										
								<tbody v-if="type == 2"> 
									<tr v-for="(value, index) in activeLibraryTypeVideos" :key="value.id">
										<td>{{ value.id }}</td>
										<td>{{ value.title }}</td>
										                                     
										<td>
											<a :href="value.file_name" target="blank">Xem Video</a>
										</td>                         
										
										<td>{{ value.library_type.name }}</td>
										<td>{{ value.user.name }}</td>
										<td>
											<div class="form-group clearfix">                     
												<div class="form-check">
												<input type="checkbox" class="form-check-input" id="exampleCheck1" v-if="value.status == 'inactive'" disabled>   
												<input v-else type="checkbox" class="form-check-input" id="exampleCheck1" v-model='value.status' disabled>   
												</div>    
											</div>
										</td>
										<td>
											<router-link :to="{ name: 'LibraryEdit', params: {id: value.id }}" class="btn btn-success btn-sm">
												<i class="fa fa-edit" aria-hidden="true"></i> 
											</router-link>
											<button role="button" v-on:click="destroy(value.id, index)" class="btn btn-danger btn-sm">
												<i class="fa fa-trash" aria-hidden="true"></i> 
											</button>
										</td>
									</tr>
								</tbody>
								<tbody v-if="type == 1"> 
									<tr v-for="(value, index) in activeLibraryTypeImages" :key="index">
										<td>{{ value.id }}</td>
										<td>{{ value.title }}</td>
										
										<td>
											<img :src="`images/library/images/${value.file_name}`" alt="Girl in a jacket" width="100" height="100">
										</td>                                 
										
										<td>{{ value.library_type.name }}</td>
										<td>{{ value.user.name }}</td>
										<td>
											<div class="form-group clearfix">                     
												<div class="form-check">
												<input type="checkbox" class="form-check-input" id="exampleCheck1" v-if="value.status == 'inactive'" disabled>   
												<input v-else type="checkbox" class="form-check-input" id="exampleCheck1" v-model='value.status' disabled>   
												</div>    
											</div>
										</td>
										<td>
											<router-link :to="{ name: 'LibraryEdit', params: {id: value.id }}" class="btn btn-success btn-sm">
												<i class="fa fa-edit" aria-hidden="true"></i> 
											</router-link>
											<button role="button" v-on:click="destroy(value.id, index)" class="btn btn-danger btn-sm">
												<i class="fa fa-trash" aria-hidden="true"></i> 
											</button>
										</td>
									</tr>
								</tbody>
								
                                <tbody v-if="type == 3"> 
									<tr v-for="(value, index) in activeLibraryTypeDocuments" :key="index">
										<td>{{ value.id }}</td>
										<td>{{ value.title }}</td>

										<td>
											<a :href="'/public/library/documents/' + value.file_name" target="blank">Xem Documents</a>
										</td>                                 
										
										<td>{{ value.library_type.name }}</td>
										<td>{{ value.user.name }}</td>
										<td>
											<div class="form-group clearfix">                     
												<div class="form-check">
												<input type="checkbox" class="form-check-input" id="exampleCheck1" v-if="value.status == 'inactive'" disabled>   
												<input v-else type="checkbox" class="form-check-input" id="exampleCheck1" v-model='value.status' disabled>   
												</div>    
											</div>
										</td>
										<td>
											<router-link :to="{ name: 'LibraryEdit', params: {id: value.id }}" class="btn btn-success btn-sm">
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
	export default {
		data(){
			return {
				libraries: [],
                type: 2,
                typeVideo: 2,
                typeDocument: '',
                typeImage: '',
			}
		},
		created: function(){
			let uri = 'http://127.0.0.1:8000/api/admins/libraries';
			this.axios.get(uri).then(response => {
				this.libraries = response.data.libraries;
			});

            console.log('data:'+ this.libraries)
		},
        computed: {
            //thang cong nhung khong the chuyen tab
            activeLibraryTypeVideos: function () {
                return this.libraries.filter(function (value) {
                    if(value.library_type_id == 2){
                        return value
                    }
                })
            },
            activeLibraryTypeImages: function () {
                return this.libraries.filter(function (value) {
                    if(value.library_type_id == 1){
                        return value
                    }
                })
            },
            activeLibraryTypeDocuments: function () {
                return this.libraries.filter(function (value) {
                    if(value.library_type_id == 3){
                        return value
                    }
                })
            },
        },
        watch: {
			type(){
				return this.type			
			},
        },
		methods:{
            //thang cong nhung nhung khi chuyen tab paginate sau do chuyen tab se bi error
            libraryVideo(){
                this.type = 2
            },
            libraryImage(){
                this.type = 1
            },
            libraryDocument(){
                this.type = 3
            },
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
						let uri = `http://127.0.0.1:8000/api/admins/libraries/${id}`;
						let app = this;
						this.axios.delete(uri).then(response => {
							app.libraries.splice(index, 1);
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