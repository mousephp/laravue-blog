<template>
	<div class="content">	
        <div class="row mb-5">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12 ">
                <div class='card mb-3'>
                    <div class="card-header">
                        <h3 class="card-title">News List</h3> 
                        <div class="card-tools">
                            <router-link :to="{name: 'NewsCreate'}" class="btn btn-sm btn-primary"><i class="fa fa-plus-square"></i> Add New</router-link>       
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">       
                            <table id="example1" class="table table-bordered table-hover display">
                                <thead>
                                    <tr>				
                                        <th>Stt</th>
                                        <th>Tiêu đề</th>
                                        <th>Tóm tắt</th>
                                        <th>Ảnh</th>
                                        <th>Tác giả</th>
                                        <th>Thể loại</th>
                                        <th>#Tags</th>
                                        <th>Trạng thái</th>
                                        <th  style="min-width: 6em;">Tùy chọn</th>	          
                                    </tr>
                                </thead>	
                                <tbody>
                                    <tr v-for="(value, index) in news" :key="index">
                                        <th scope="row">{{ index }}</th>
                                        <td>{{ value.title }}</td>
                                        <td v-html="value.quote">{{ value.quote }}</td>
                                        <td><img :src="`images/blog/${value.photo}`" alt="Girl in a jacket" width="100" height="100"></td>                            
                                        <td>{{value.user.name}}</td>
                                        <td>{{value.category.name}}</td>

                                         <!-- <td v-if="value.tags == '' "></td>
                                        <strong v-else-if="value.tags" v-for="(tag, index) in news.tags" :key="index">
                                            <span class="badge badge-info">{{tag.name}}</span>
                                        </strong>                                        -->
                                        <td>
                                            <span v-if="value.tags == '' "></span>
                                            <strong v-else v-for="(tag, index) in value.tags" :key="index">
                                                <span class="badge badge-info">{{tag.name}}</span>
                                            </strong>  
                                        </td>
                                        
                                        <!-- <td></td> -->


                                        <td>
                                            <div class="form-group clearfix">                     
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" v-if="value.status == 'inactive'" disabled>   
                                                    <input v-else type="checkbox" class="form-check-input" id="exampleCheck1" v-model='value.status' disabled>   
                                                </div>    
                                            </div>
                                        </td>

                                        <td class="text-center"> 
                                            <router-link hidden :to="{ name: 'NewsShow', params: {id: value.id }}" class="btn btn-sm btn-success"><i class="fa fa-eye" aria-hidden="true"></i>
											</router-link>

                                            <router-link :to="{name: 'NewsEdit', params: {id: value.id}}" class="btn btn-sm btn-warning"><i class="fa fa-edit" aria-hidden="true"></i></router-link>
                                            
                                            <button role="button" v-on:click="destroy(value.id, index)" class="btn btn-danger btn-sm">                          
												<i class="fa fa-trash" aria-hidden="true"></i> 
											</button>                                        
                                        </td>                                                          
                                    </tr>           
                                </tbody>	      
                            </table>
                        </div>
                    </div>
                </div>        
            </div>
        </div>
    </div>
</template>


<script>
    import { mapGetters } from 'vuex'

    export default {
        data() {
			return {
				errors: [],
				// news: [],
				selected: [],
				laravelData: {},
			}
		},
        mounted(){
			this.$store.dispatch('News/getNews')
		},
		computed: {
			...mapGetters({news: 'News/news'})
		},
        updated: function(){
			$(document).ready(function() {
				$('#example1').DataTable();
			} );
		},
		methods: {
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
                       this.$store.dispatch('News/deleteNews', id).then(response => {
							this.$swal('Deleted!','Tệp của bạn đã bị xóa.','success');
						}).catch(function (data) {
							this.$swal("Failed! Xóa không thành công", data.message, "warning");
						});
                    }
                });
			},
		},
    }
</script>