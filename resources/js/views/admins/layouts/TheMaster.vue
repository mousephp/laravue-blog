<template>
    <div class="wrapper">
        <Navbar />    
        <Sidebar />
        <div class="content-wrapper">
            <section class="content-header row">
                <div class="col-sm-12">
                    <ol class="breadcrumb float-sm-left">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Dashboard v1</li>
                    </ol>
                </div>
            </section>
             <section class="content">
                <div class="container-fluid">
                    <router-view></router-view>

                    <vue-progress-bar></vue-progress-bar>
                </div>
            </section>           
        </div>
        <Footer />
  </div>
</template>


<script>
import Navbar from './TheNavbar.vue'
import Sidebar from './TheSidebar.vue'
import Footer from './TheFooter.vue'

export default {
    components: {
        Navbar,
        Sidebar,
        Footer
    },
    created() {
        // let token = window.localStorage.getItem('token')
        // if(token == null){
        //     window.location.href = '/auth/login';
        // }
    },
    mounted(){

    },
    methods:{
      
    }
}
</script>
