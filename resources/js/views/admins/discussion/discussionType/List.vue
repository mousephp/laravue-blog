<template>
<div class="row">
	<div class="col-md-12 box-header with-border">
    <div class='card'>
      <div class="card-header">
        <div class="card-tools">
          <router-link :to="{name: 'DiscussionTypeCreate'}" class="btn btn-sm btn-primary"><i class="fa fa-plus-square"></i> Add New</router-link>    
        </div>
      </div>
      <div class="card-body table-responsive p-0">
       <!-- <div class="text-center" v-if="loading == true">
          <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner Text Centered" variant="primary"></b-spinner>
        </div> -->
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
              <tr v-for="value, index in discussion_types" :key="value.id">
                <th scope="row">{{ value.id }}</th>
                <td>{{ value.name }}</td>
                <td>
                  <div class="form-group clearfix">                     
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1" v-if="value.status == 'inactive'" disabled>   
                      <input v-else type="checkbox" class="form-check-input" id="exampleCheck1" v-model='value.status' disabled>   
                    </div>    
                  </div>
                </td>
                <td class="text-center">      
                  <router-link :to="{name: 'DiscussionTypeEdit', params: { id: value.id }}" class="btn btn-warning"><i class="fa fa-edit" aria-hidden="true"></i> Edit</router-link>
                </td>
                <td> 
                  <form action="">				
                    <button type="submit" class="btn btn-danger" @click.prevent="destroy(value.id, index)"><i class="fa fa-trash" aria-hidden="true"></i> Xóa</button>	
                  </form> 
                </td>
              </tr>          
            </tbody>	      
          </table>
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
        selected: [],
        loading: true,
      }
    },  
    mounted (){
      this.$store.dispatch('DiscussionType/getDiscussionTypes')
    },
    computed: {
      ...mapGetters({discussion_types: 'DiscussionType/discussion_types'})
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
            this.$store.dispatch('DiscussionType/deleteDiscussionType', id).then(response => {
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


<!--https://www.youtube.com/watch?v=pCMYStPwwN0-->