<template>
    <div class="loader d-flex" v-if="loading">
        <p class="loading m-auto"></p>
    </div>

    <div style="" class="d-flex no-auth" v-else-if="success == false">
        <div class="d-flex flex-column m-auto">
            <h1 class="text-center">401</h1>
            <h1 class="text-center">UNAUTHORIZED</h1>
            <h5 class="text-center">{{ message }}</h5>
        </div>
    </div>


    <div class="content" v-else>
		<div class="container-fluid">			
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">                      
					<div class="card mb-3">
						<div class="card-header">
							<h3><i class="fa fa-pencil"></i> Thêm</h3>
						</div>

                        <div class="card-body">
                            <div class="row d-flex flex-row text-center">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input type="text" class="form-control" aria-describedby="" placeholder="Nhập ..." v-model="permision.name"  :class="{ 'is-invalid' : errors.name }">
                                        <span v-if="errors.name" :class="['text text-danger']">{{ errors.name }}</span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Group</label>
                                        <input type="text" class="form-control" aria-describedby="" placeholder="Nhập ..." v-model="permision.group"  :class="{ 'is-invalid' : errors.group }">
                                        <span v-if="errors.group" :class="['text text-danger']">{{ errors.group }}</span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Description</label>
                                        <input type="text" class="form-control"   aria-describedby="" placeholder="Nhập ..." v-model="permision.description"  :class="{ 'is-invalid' : errors.description }">
                                        <span v-if="errors.description" :class="['text text-danger']">{{ errors.description }}</span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label class="col-form-label">Trạng thái</label>
                                    <div class="form-group">
                                        <select class="form-control select2" v-model='permision.status' name="status" style="width: 100%;">
                                            <option value="active">active</option>
                                            <option value="inactive">inactive</option>
                                        </select>
                                        <span v-if="errors.status" :class="['text text-danger']">{{ errors.status }}</span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <router-link :to="{ name: 'PermissionList' }" 
                                    class="btn btn-primary"
                                    @click.native="addPermission(permision); getPermissions();">
                                        Submit
                                    </router-link>
                                </div>

                            </div>
                        
                            <router-link :to="{ name : 'PermissionList' }" class="btn btn-warning my-3">Back
                            </router-link>
                            <!-- </section> -->
                        </div>

                    </div><!-- end card-->                  
				</div>
			</div>
		</div>
		<!-- END container-fluid -->
	</div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            permision: {
                name: '',
                group: '',
                description: '',
                status: 'inactive',
            },
            errors: [],
            access: 'Permissions-all',
        }
    },
    methods : {
        ...mapActions('Permission', ['addPermission', 'getPermissions']),
    },
    computed : {
        ...mapGetters('Permission', ['permissions', 'loading']),

        ...mapGetters({success: 'access', message: 'message'})
    },
    mounted() {
		this.$store.dispatch('accessAuthorization', this.access)
	},
}
</script>