<template>
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <b href="" class="brand-link text-center">
        <!-- <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">  -->
        <router-link to="/admin">
            <span class="brand-text font-weight-light text-black">Admin</span>
        </router-link>
    </b>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <!-- <img src="../../dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">  -->
            </div>
            <div class="info">
                <router-link to="/" class="d-blockk">
                Alexander Pierce
                </router-link>
            </div>
        </div>

        <!-- SidebarSearch Form -->
        <div class="form-inline">
            <div class="input-group" data-widget="sidebar-search">
                <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
                <div class="input-group-append">
                    <button class="btn btn-sidebar">
                        <i class="fas fa-search fa-fw"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item user-panel">
                    <a class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt text-white"></i>
                        <p class='text-uppercase'>Dashboard</p>
                    </a>
                </li>

                <li class="nav-item user-panel"></li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-cogs label text-white"></i>
                        <p>MANAGER<i class="right fas fa-angle-left"></i></p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <router-link to="/admin/user/list" class="nav-link">
                                <i class="fa fa-user nav-icon text-red"></i>
                                <p>User</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin/roles" class="nav-link">
                                <i class="fas fa-user-tag nav-icon text-green"></i>
                                <p>Role</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin/permissions" class="nav-link">
                                <i class="fas fa-sitemap nav-icon text-yellow"></i>
                                <p>Permission</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">
                                <i class="fas fa-users nav-icon text-blue"></i>
                                <p>Customer</p>
                            </a>
                        </li>
                    </ul>
                </li>


                <li class="nav-item user-panel"></li>

                <li class="nav-item has-treeview">
                    <a  href="#" class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt  text-white"></i>
                        <p>BLOG <i class="right fas fa-angle-left"></i></p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <router-link to="/admin/category/list" class="nav-link">
                                <i class="nav-icon fas fa-list-ol text-yellow"></i>
                                <p>Category</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin/tag/list" class="nav-link">
                               <i class="nav-icon fas fa-tags text-red"></i>
                                <p>Tags</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin/news/list" class="nav-link">
                                <i class="nav-icon fa fa-fw fa-newspaper-o text-green"></i>
                                <p>News</p>
                            </router-link>
                        </li>
                        <!-- <li class="nav-item">
                            <router-link to="/admin/news/comment" class="nav-link">
                               <i class="fas fa-comment nav-icon text-info"></i>
                                <p>Comments</p>
                            </router-link>
                        </li> -->
                        <li class="nav-item">
                            <router-link to="/comments" class="nav-link">
                               <i class="fas fa-comment nav-icon text-info"></i>
                                <p>Comments</p>
                            </router-link>
                        </li>
                    </ul>
                </li>
           


                <li class="nav-item user-panel"></li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-icons text-white"></i>
                        <p>DISCUSSION <i class="right fas fa-angle-left"></i></p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <router-link to="/admin/discussion-type/list" class="nav-link">
                                <i class="nav-icon fas fa-poo text-yellow"></i>
                                <p>Discussion Type</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin/discussion/list" class="nav-link">
                               <i class="nav-icon fas fa-video text-red"></i>
                                <p>Discussion</p>
                            </router-link>                            
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin/discussion/comment" class="nav-link">
                               <i class="fas fa-comment nav-icon text-info"></i>
                                <p>Comments</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin/discussion/rating" class="nav-link">
                               <i class="fas fa-star nav-icon text-info"></i>
                                <p>Rating</p>
                            </router-link>
                        </li>
                    </ul>
                </li>
             

                <li class="nav-item user-panel"></li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-book-open text-white"></i>
                        <p>LIBRARY <i class="right fas fa-angle-left"></i></p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <router-link to="/admin/library-type/list" class="nav-link">
                                <i class="nav-icon fas fa-book text-yellow"></i>
                                <p>Library Type</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin/library" class="nav-link">
                               <i class="nav-icon fas fa-book-open text-warning"></i>
                                <p>Library</p>
                            </router-link>
                        </li>
                         <li class="nav-item">
                            <router-link to="/admin/library/type" class="nav-link">
                               <i class="nav-icon fa fa-table text-red"></i>
                                <p>Library Index</p>
                            </router-link>
                        </li>
                    </ul>
                </li>
             




              <li class="nav-item user-panel"></li>

                <li class="nav-item user-panel">
                    <a class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt text-white"></i>
                        <p>OTHER</p>
                    </a>
                </li>

                <li class="nav-item">
                    <router-link to="/admin/link" class="nav-link">
                        <i class="nav-icon fas fa-link text-red"></i>
                        <p>Link</p>
                    </router-link>
                </li>

                <li class="nav-item">                                         
                    <router-link to="/admin/rule/list" class="nav-link">
                        <i class="nav-icon fa fa-info-circle text-secondary"></i>
                        <p>Rule</p>
                    </router-link>
                </li>
                
                <li class="nav-item">                                         
                    <router-link to="/admin/user-manual/list" class="nav-link">
                        <i class="nav-icon fas fa-question text-secondary"></i>
                        <p>User Manual</p>
                    </router-link>
                </li>

                <li class="nav-item">                                         
                    <router-link to="/admin/tpack/list" class="nav-link">
                        <i class="nav-icon fa fa fa-fw fa-bars text-green"></i> 
                        <p>Tpack</p>
                    </router-link>                  
                </li>


                <li class="nav-item">
                    <router-link to="/admin/about" class="nav-link">
                        <i class="nav-icon far fa-address-card text-green"></i>
                        <p>About</p>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/admin/contact" class="nav-link">
                        <i class="nav-icon far fa-comment-dots text-green"></i>
                       <p>Contact</p>
                    </router-link>                   
                </li>





                <li class="nav-item user-panel"></li>
                <li class="nav-item user-panel">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt text-white"></i>
                        <p>GENERAL SETTINGS<i class=""></i></p>
                    </a>            
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>File Manager</p>
                            </a>
                        </li>
                       <li class="nav-item">
                           <router-link to="/admin/setting" class="nav-link">
                                <i class="fas fa-cog nav-icon text-info"></i>
                                <p>Setting</p>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item pb-3 mb-3">
                    <form @submit.prevent="logout">
                        <button type="submit" class="btn btn-sm btn-danger"><i class="nav-icon fas fa-power-off red"></i>
                        <p>Logout</p></button>
                    </form>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
</template>


<script type="text/javascript">
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Header',
    mounted() {
        console.log('Component mounted.')
    },     
    methods: {   
        logout(){
            this.$store.dispatch("ClientAuth/logout");
        }
    }
}
</script>