<template>
    <span v-if="isLogged">
        <a href="#" v-if="isFavorited" @click.prevent="unFavorite(discussion)">
            <i class="fa fa-thumbs-up" style="color: #cccc;"></i>
        </a>
        <a href="#" v-else @click.prevent="favorite(discussion)">
            <i class="fa fa-thumbs-up" ></i>
        </a>

        <!-- <a href="#" v-if="isFavorited" @click.prevent="unFavorite(discussion)">
            <i  class="fa fa-heart"></i>
        </a>
        <a href="#" class="set_color" v-else @click.prevent="favorite(discussion)">
            <i  class="fa fa-heart-o"></i>
        </a> -->
    </span>
</template>

<style scoped>
/* .set_color {
    color: #cccc;
} */
</style>

<script>
export default {
    props: ['discussion', 'favorited'],

    data: function() {
        return {
            isFavorited: '',
            isLogged: this.$store.state.ClientAuth.token
        }
    },
    // created(){
        // this.isFavorited = this.isFavorite ? true : false;
    //     console.log("discussion-user:"+this.isFavorited)
    // },
    mounted() {
        this.isFavorited = this.isFavorite ? true : false;
    },
    computed: {
        isFavorite() {
            return this.favorited;
        },
    },
    methods: {
        favorite() {
            this.axios.post(`/api/favorite/`+this.discussion)
                .then((response) => {
                    this.isFavorited = true
                    console.log("discussion:"+this.isFavorited)
                }).catch(err => console.log(err.data));
        },

        unFavorite() {
            this.axios.post(`/api/unfavorite/`+this.discussion)
                .then((response) => {
                    this.isFavorited = false
                    console.log("discussion:"+this.isFavorited)
                })
                .catch(err => console.log(err.data));
        }
    }
}
</script>