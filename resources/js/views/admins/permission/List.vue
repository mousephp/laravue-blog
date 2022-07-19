<template>
<div class="loader d-flex" v-if="loading">
    <p class="loading m-auto"></p>
</div>

<div style="" class="d-flex no-auth" v-else-if="permissions.success == false">
    <div class="d-flex flex-column m-auto">
        <h1 class="text-center">401</h1>
        <h1 class="text-center">UNAUTHORIZED</h1>
        <h5 class="text-center">{{ permissions.message }}</h5>
    </div>
</div>

<section id="all-permissions" class="view-table" v-else>
    <div class="card-header">
        <h3><i class="fa fa-table"></i> All Permissions
            <router-link class="btn btn-primary btn-sm float-right" :to="{ name: 'PermissionCreate' }">Thêm</router-link>
        </h3>
    </div>
    <table id="example1" class="table table-striped table-bordered table-hover table-sm">
        <thead class="thead-dark">
            <tr>
                <th>#</th>
                <th>Permission Name</th>
                <th>Assigned To Roles</th>
                <th>Query</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(value, index) in permissions.data" :key="index">
                <td> {{ index + 1 }}</td>
                <td>{{ value.name }}</td>
                <td>
                    <ol>
                        <li v-for="(role, index) in value.roles" :key="index"> {{ role.name }}</li>
                    </ol>
                </td>
                <td class="d-flex flex-row justify-content-center">
                    <router-link :to="{ name : 'PermissionView' , params: { id: value.id }}"
                    @click.native="viewPermission($route.params.id);"
                    class="bg-primary text-white p-1 mr-1 cursor-pointer border-radius-5px">
                        <i class="fa fa-eye" aria-hidden="true"></i>
                    </router-link>

                    <router-link :to="{ name : 'PermissionEdit' , params: { id: value.id }}"
                    class="bg-success text-white p-1 mr-1 cursor-pointer border-radius-5px">
                        <i class="fa fa-edit" aria-hidden="true"></i> 
                    </router-link>

                    <button
                    @click="deletePermission(value.id); getPermissions();"
                    class="bg-danger text-white p-1 cursor-pointer border-radius-5px border-none">
                        <i class="fa fa-trash" aria-hidden="true"></i> 
                    </button>

                    <!-- <button class="btn bg-danger text-white" v-can="editStuff">You can</button> -->
                </td>
            </tr>
        </tbody>
    </table>
</section>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        methods : {
            ...mapActions('Permission', ['getPermissions', 'viewPermission', 'deletePermission'])
        },
        computed : {
            ...mapGetters('Permission', ['message', 'permissions', 'loading']),
        },
        updated: function(){
            $(document).ready(function() {
                $('#example1').DataTable();
            } );
        },
        created() {
            this.getPermissions();
        },
    }
</script>