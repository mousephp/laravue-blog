<template>
    <div>
        <div id="preloader"  v-if="loading">
            <img src="images/loading1.gif" alt="Preloader">
        </div>
        <!--  Fixed Navigation-->
        <header id="navigation">
            <nav class="navbar navbar-expand-md navbar-dark fixed-top" style="background-color: teal; border-bottom: 1px solid #000">
                <div class="container">
                    <router-link to="/" class="navbar-brand font-weight-bold">Trang chủ</router-link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar6">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse justify-content-stretch" id="navbar6">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <router-link to="/about" class="nav-link">Giới thiệu<span class="sr-only">Home</span></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/news" class="nav-link active">Tin tức</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link active" to="/library">Thư viện</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/discussion" class="nav-link active">Thảo luận</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link active" to="/contact">Liên hệ</router-link>
                            </li>
                        </ul>
                       <ul class="navbar-nav ml-auto">
                            <li class="nav-item" v-if="!isLogged">
                                <router-link to="/register" class="nav-link active" >Đăng ký</router-link>
                            </li>
                            <li class="nav-item" v-if="!isLogged ">
                                <router-link to="/login" class="nav-link active" >Đăng nhập</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link to="/profile" class="nav-link active" v-if="isLogged">Chào {{name}} </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/admin" class="nav-link active" v-if="isLogged && user_type == 1">Dashbroad</router-link>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:void(0)" class="nav-link active" v-on:click="logout" v-if="isLogged">Đăng xuất</a>
                            </li>
                        </ul>

                        
                        
                        <!--  -->
                        <SwitchLanguage v-if="$route.name == 'Login'"/>


                        <span v-if="isLogged && $route.name == 'Discussion' || $route.name == 'MyFavorites'">
                            <router-link to="/my-favorites" class="nav-link active" >
                                <i  class="fa fa-heart">Favorite</i>
                            </router-link>
                        </span>


                    </div>
                </div>
            </nav>
        </header>
        
        <div class="progress-bar" id="myBar"></div>
        <router-view></router-view>
        <app-footer-component></app-footer-component>
    </div>  
</template>


<script>
import FooterComponent from './layouts/TheFooter.vue';
import SwitchLanguage from '../../components/pages/SwitchLanguage.vue'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
    components: {
         appFooterComponent: FooterComponent, SwitchLanguage
    },
    data() {
        return {
            loading: true,          
            name: '',
            user_type: 0,
            isLogged: this.$store.state.ClientAuth.token
        }
    },
    created(){
        if(this.authUser){
            this.name = this.authUser.name
            this.user_type = this.authUser.is_admin
        }
    },
    mounted: function () {
        setTimeout(() => {
            this.loading = false
        }, 1000);

        window.onscroll = function() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            if(document.body.contains(document.getElementById("myBar"))) {
                document.getElementById("myBar").style.width = scrolled + "%";
            }
        };
    },
    computed: {
        ...mapGetters("ClientAuth", ["authUser", "loggedIn"]),

        // currentUser() {
        //     return this.$store.getters.authUser
        // }
    },
    methods: {
        // ...mapActions({
        //     signOut: "auth/logout"
        // }),
        // async logout(){
        //     this.signOut()
        //     this.$router.push({name:"Login"})
        // }

        logout() {
            this.$store.dispatch("ClientAuth/logout");
        }
    }
}
</script>


<style>
    .progress-bar {
        position: fixed;
        height: 3px;
        background: #fa503a;
        width: 0%;
        margin-top: 55px;
        z-index: 100;
    }
</style>