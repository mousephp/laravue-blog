<template>
<div class="row">
	<div class="col-md-12 box-header with-border">
    <div class='card'>
      <div class="card-header">
        <div class="card-tools">
          <router-link :to="{name: 'DiscussionList'}" class="btn btn-sm btn-primary"><i class="fa fa-plus-square"></i> Discussions</router-link>    
        </div>
      </div>
      <div class="card-body table-responsive p-0">
        <table id="example1" class="table table-bordered table-striped text-center">
            <thead>
              <tr>
                <th>Stt</th>
                <th>User</th>
                <th>Discussion</th>
                <th>Star</th>
                <th>Link</th>
                <th>Tùy chọn</th>	          
              </tr>
            </thead>	
            <tfoot>
              <tr>
                <th>Stt</th>
                <th>User</th>
                <th>Discussion</th>
                <th>Star</th>
                <th>Link</th>
                <th>Tùy chọn</th>             
              </tr>
            </tfoot>
            <tbody>
              <tr v-for="(value, index) in stars" :key="index">
                <th scope="row">{{ value.id }}</th>
                <td>{{ value.user.name }}</td>
                <td class="text-center">{{value.discussion.title}}</td>
                <td>{{value.rating}} </td>
                <td>link</td>    
                <td>Tùy chọn</td>    
              </tr>          
            </tbody>	      
          </table>
      </div>  
    </div>
	</div>
</div>
</template>


<script>
    export default {
      data() {
        return { 
          errors: [],
          stars: [],
          selected: [],
          loading: true,
        }
      },   
      created(){
          this.fetchRating()
      },
      methods: {
        fetchRating(){
          let uri = 'http://127.0.0.1:8000/api/admins/discussion/rating';
          this.axios.get(uri).then(response => {
            this.stars = response.data.stars;
          });
        }
      }
    }
</script>


<!--https://www.youtube.com/watch?v=pCMYStPwwN0-->