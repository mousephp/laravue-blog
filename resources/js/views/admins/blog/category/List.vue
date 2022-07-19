<template>
<div class="row">
	<div class="col-md-12 box-header with-border">
        <div class='card'>
            <div class="card-header">
                <h3 class="card-title">Category List</h3> 
                <div class="card-tools">
                <router-link :to="{name: 'CategoryCreate'}" class="btn btn-sm btn-primary"><i class="fa fa-plus-square"></i> Add New</router-link>                  
                </div>
            </div>
           <!-- <div class="text-center" v-if="loading == true">
                <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner Text Centered" variant="primary"></b-spinner>
            </div> -->
            <div class="card-body table-responsive p-0">
                <table id="example1" class="table table-bordered table-striped text-center">
                    <thead>
                        <tr>
                            <th>Stt</th>
                            <th>Tên</th>
                            <th>Trạng thái</th>
                            <th colspan="3">Tùy chọn</th>	          
                        </tr>
                    </thead>	
                    <tfoot>
                        <tr>
                            <th>Stt</th>
                            <th>Tên</th>
                            <th>Trạng thái</th>
                            <th colspan="3">Tùy chọn</th>             
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr v-for="(cate, index) in categories" :key="index">
                            <th scope="row">{{ cate.id }}</th>
                            <td>{{ cate.name }}</td>
                            <td>
                                <div class="form-group clearfix">                     
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" v-if="cate.status == 'inactive'" disabled>   
                                        <input v-else type="checkbox" class="form-check-input" id="exampleCheck1" v-model='cate.status' disabled>   
                                    </div>    
                                </div>
                            </td>
                            <td class="text-center">                                     
                                <router-link :to="{name: 'CategoryEdit', params: { id: cate.id }}" class="btn btn-warning"><i class="fa fa-edit" aria-hidden="true"></i> Edit</router-link>
                            </td>
                            <td> 
                                <!--<button type="submit" class="btn btn-danger" @click.prevent="destroy(cate.id, index)"><i class="fa fa-trash" aria-hidden="true"></i> Xóa</button>	-->
                                <button type="submit" class="btn btn-danger" @click.prevent="deleteCate(cate.id)"><i class="fa fa-trash" aria-hidden="true"></i> Xóa</button>	
                            </td>
                        </tr>           
                    </tbody>	      
                </table>
            </div>
        </div>
	</div>
</div>
</template>


<script type="text/javascript">
    import { mapActions, mapGetters, mapState } from 'vuex'

    export default {
		data() {
			return {
				errors: [],
				selected: [],
				laravelData: {},
                loading: true,
			}
		},
        created() {
            this.$store.dispatch('fetch', this.categories);
		},
        computed: {
            ...mapGetters({categories: 'categories'})
        },
		methods: {
			deleteCate(id){
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
                        this.$store.dispatch('deleteCategory', id);                  
                        this.$swal('Deleted!','Tệp của bạn đã bị xóa.','success')
                    }
                }).catch(function (data) {
                    this.$swal("Failed! Xóa không thành công", data.message, "warning");
                });
			}
		},
    }
</script>