<template>
    <div class="container" v-if="isLogged ">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="page-header">
                    <h3>My Favorites</h3>
                </div>
                    <div class="panel panel-default" v-for="(value, index) in my_favorites" :key="index">
                        <div class="panel-heading">
                            {{ value.id }}
                        </div>
                        
                        <div class="panel-footer">
                            <favorite 
							:discussion="value.id"
							:favorited="value.favorited ? 'true' : 'false' "
							></favorite>
                        </div>

                    </div>
                    <p v-if="my_favorites == ''">You have no favorite posts.</p>
            </div>
        </div>
    </div>

    <div class="d-flex no-auth" v-else>
        <div class="d-flex flex-column m-auto">
            <h1 class="text-center">NOT FOUND</h1>
        </div>
    </div>

</template>

<script>
import Favorite from '../../../components/pages/Favorite.vue'
// import { mapActions, mapGetters, mapState } from 'vuex'         

export default {
    components: { Favorite },
    data(){
        return {
            isLogged: this.$store.state.ClientAuth.token,
            my_favorites: ''
        }
    },
    created(){
        this.myFavorites()
    },
    methods: {
        myFavorites() {
            this.axios.get(`/api/my-favorites`)
                .then((response) => {
                    this.my_favorites = response.data.myFavorites
                     console.log('test:'+response.data.myFavorites)
                }).catch(err => console.log(err.data));
        },
    }
}
</script>