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
                    <input class="form-control" type="text" name="name" placeholder="Username" v-model="user.name" :class="{ 'is-invalid' : errors.name }">
                </div>
                <span v-if="errors.name" :class="['text text-danger']">{{ errors.name }}</span>
            </div>
            <div class="form-group ">
                <label for="example-text-input" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-8">
                    <input class="form-control" type="email" id="example-text-input" name="email" placeholder="Email" v-model="user.email" :class="{ 'is-invalid' : errors.email }">
                </div>
                <span v-if="errors.email" :class="['text text-danger']">{{ errors.email }}</span>
            </div>


            <div class="form-group ">
                <div class="col-sm-8">
                    <button type="button" class="btn btn-warning" v-if="this.$route.params.id" @click="togglePasswordBlock()">Change Password</button>
                </div>          
            </div>
            <div v-if="!this.$route.params.id || showEditPassword">
                <div class="form-group ">
                    <label for="example-text-input" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-8">
                        <input class="form-control" type="password" name="password" placeholder="Password mới" v-model="user.password" :class="{ 'is-invalid' : errors.password }" id="password">
                        <span @click="showPassword();" style="position: absolute;top: 29%;right: 20px;color: #333;">
                            <i class="fa fa-eye show-password"></i>
                        </span>
                    </div>
                    <span v-if="errors.password" :class="['text text-danger']">{{ errors.password }}</span>
                </div>
                <div class="form-group ">
                    <label for="example-text-input" class="col-sm-5 col-form-label"> Xác nhận Password mới</label>
                    <div class="col-sm-8">
                        <input class="form-control" type="password" name="password_confirmation" placeholder="Xác nhận Password mới" v-model="user.password_confirmation" :class="{ 'is-invalid' : errors.password_confirmation }" id="password_new">
                        <span @click="showPasswordNew();" style="position: absolute;top: 29%;right: 20px;color: #333;">
                            <i class="fa fa-eye show-password"></i>
                        </span>
                    </div>
                    <span v-if="errors.password_confirmation" :class="['text text-danger']">{{ errors.password_confirmation }}</span>
                </div>
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
            showEditPassword: false,
            errors: [],
            access: 'user.update',
        }
    },
    methods: {
        togglePasswordBlock() {
            this.showEditPassword = !this.showEditPassword;
        },
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
            this.$store.dispatch('User/updateUser', this.user).then((response) => {
                this.$router.push({name: 'UserList'});
                this.$Progress.finish();
                this.$notify({
                    type: 'success', 
                    title: 'Login',
                    text: 'Sửa thành công!'
                });
            }).catch(error => {
                this.errors = error.response.data.errors;
                this.$Progress.fail();
                this.$notify({
                    type: 'error', 
                    title: 'Login',
                    text: 'Sửa thất bại!'
                });
            });
        }
    },
    beforeCreate: function () {
		this.$store.dispatch('User/showUser', this.$route.params.id);			
	},
    computed : {
        ...mapGetters({success: 'access', message: 'message'}),

        ...mapGetters({user: 'User/user'}),	
    },      
    mounted() {
        this.$store.dispatch('accessAuthorization', this.access)
    },
}
</script>
