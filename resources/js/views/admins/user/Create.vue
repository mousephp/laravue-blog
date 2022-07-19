<template>

<div style="" class="d-flex no-auth" v-if="success == false">
    <div class="d-flex flex-column m-auto">
        <h1 class="text-center">401</h1>
        <h1 class="text-center">UNAUTHORIZED</h1>
        <h5 class="text-center">{{ message }}</h5>
    </div>
</div>

<div class="row" v-else>
    <div class="col-md-9 offset-md-2">
        <form class="form-horizontal" v-on:submit.prevent="create">
            <div class="form-group ">
                <label for="example-text-input" class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-8 ">
                    <input class="form-control" type="text" name="name" placeholder="Nhập Username" v-model="user.name" :class="{ 'is-invalid' : errors.name }">
                </div>
                <span v-if="errors.name" :class="['text text-danger']">{{ errors.name }}</span>
            </div>
            <div class="form-group ">
                <label for="example-text-input" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-8">
                    <input class="form-control" type="email" id="example-text-input" name="email" placeholder="Nhập Email" v-model="user.email" :class="{ 'is-invalid' : errors.email }">
                </div>
                <span v-if="errors.email" :class="['text text-danger']">{{ errors.email }}</span>
            </div>
            <div class="form-group ">
                <label for="example-text-input" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-8">
                    <input class="form-control" type="password" id="password" name="password" placeholder="Nhập Password" v-model="user.password" :class="{ 'is-invalid' : errors.password }">
                    <a href="javascript:;void(0)" style="position: absolute;top: 29%;right: 20px;color: #333;"><i class="fa fa-eye" id="show-password" @click="showPassword(this)"></i></a>
                </div>
                <span v-if="errors.password" :class="['text text-danger']">{{ errors.password }}</span>
            </div>
            <div class="form-group ">
                <label for="example-text-input" class="col-sm-5 col-form-label"> Nhập lại Password</label>
                <div class="col-sm-8">
                    <input class="form-control" type="password" id="password_new" name="password_confirmation" placeholder="Nhập lại Password" v-model="user.password_confirmation" :class="{ 'is-invalid' : errors.password_confirmation }">
                    <a href="javascript:;void(0)" style="position: absolute;top: 30%;right: 20px;color: #333;"><i class="fa fa-eye show-password" @click="showPasswordNew(this)"></i></a>
                </div>
                <span v-if="errors.password_confirmation" :class="['text text-danger']">{{ errors.password_confirmation }}</span>
            </div>

            <div class="form-group text-center">
                <div class="col-sm-8">
                    <input type="reset" value="Nhập lại" class="btn btn-lg btn-danger">
                    <button type="submit" class="btn btn-primary"><span class="btn-label"><i class="fa fa-save"></i></span> Lưu lại</button>
                </div>
            </div>
        </form>
    </div>
</div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data(){
        return {
            user:{
                name : "",
                email : "",
                password : "",
                password_confirmation : ""
            },
            errors: [],
            access: 'user.store',
        }
    },
    methods: {
        showPassword() {
            let password = document.querySelector('#password')
            if(password.type == 'password') {
                password.type = 'text'
            }else {
                password.type = 'password'
            }
        },
        showPasswordNew() {
            let password = document.querySelector('#password_new')
            if(password.type == 'password') {
                password.type = 'text'
            }else {
                password.type = 'password'
            }
        },
        create(){
            this.$Progress.start();
            this.$store.dispatch('User/storeUser', this.user).then((response) => {
                this.$router.push({name: 'UserList'});
                this.$Progress.finish();
                this.$notify({
                    type: 'success', 
                    title: 'Login',
                    text: 'Đăng ký thành công!'
                });
            }).catch(error => {
                this.errors = error.response.data.errors;
                this.$Progress.fail();
                this.$notify({
                    type: 'error', 
                    title: 'Login',
                    text: 'Đăng ký thất bại!'
                });
            });
        }
    },
    computed : {
        ...mapGetters({success: 'access', message: 'message'})
    },      
    mounted() {
        this.$store.dispatch('accessAuthorization', this.access)
    },
}
</script>
