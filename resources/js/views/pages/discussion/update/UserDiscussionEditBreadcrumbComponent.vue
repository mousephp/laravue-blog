<template>
    <div>
        <section class="global-page-header">
            <div class="container wow fadeInDown" data-wow-delay=".3s">
                <div class="row">
                    <div class="col-md-12">
                        <div class="block">
                            <h2>Thảo luận</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="ss-style-zigzag">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="600ms">
                        <ol class="breadcrumb mt-2">
                            <li class="breadcrumb-item">
                                <router-link :to="{ path: '/' }"><i class="fa fa-home"></i> Trang chủ</router-link>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link :to ="{ path: '/discussion' }">Thảo luận</router-link>
                            </li>
                            <li class="breadcrumb-item active">Chỉnh sửa</li>
                        </ol>
                    </div>
                    <div class="col-md-4 wow fadeInRight animated" data-wow-duration="500ms" data-wow-delay="600ms">
                        <form class="form-inline">
                            <input class="form-control mr-sm-2 mt-3" type="search" placeholder="Nhập từ khóa">
                            <button class="btn btn-primary mt-3" type="button" v-on:click="search()">Tìm kiếm</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
    export default {
        methods:{
            search(){
                var keyword = document.getElementsByTagName('input')[0].value.trim()
                if(keyword.length == 0){
                    alertify.set('notifier','position', 'top-center');
                    alertify.error('Bạn chưa nhập từ khóa. Vui lòng nhập lại');
                } else {
                    this.$router.push({ name: 'Search', params: { tukhoa: keyword}})
                }
            }
        }
    }
</script>


<style scoped>
    section::before,
    section::after {
        position: absolute;
        content: '';
        pointer-events: none;
    }
    .breadcrumb-item.active {
        color: #b0c9d6;
    }
    a {
        text-decoration: none;
        display: inline-block;
        position: relative;
        font-family: Arial;
        font-weight: bold;
        padding: 0 0 5px 0;
        /*color: #e2e61a;*/
        color: #fff;
    }
    a:hover{
        color: #e8ce0e;
    }
    a:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        left: 0;
        bottom: 0;
        visibility: hidden;
        background-color: #e8ce0e;
        /*background-color: #e8ce0e;*/
        color:#e8ce0e;
        -webkit-transition: all .1s ease;
        transition: all 0.3s ease;  
        -webkit-transform: scaleX(0);
        -ms-transform: scaleX(0);
        transform: scaleX(0);
    }

    a:hover:after {
        visibility: visible;
        -webkit-transform: scaleX(1);
        -ms-transform: scaleX(1);
        transform: scaleX(1);
    }
    .btn-primary{
        background-color: #008080;
        color: #fefefe;
    }

    .btn-primary:hover{
        background-color: #e8ce0e;
        color: #000;
    }
</style>
