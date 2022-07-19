<template>
    <div class="content">
		<div class="container-fluid">			
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12">                      
					<div class="card mb-3">
						<div class="card-header">
							<h3><i class="fa fa-pencil"></i> Thêm</h3>
						</div>

                        <div class="card-body">
                            <div class="row d-flex flex-row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input type="text" class="form-control"   aria-describedby="" placeholder="Nhập ..." v-model="role.name"  :class="{ 'is-invalid' : errors.name }">
                                        <span v-if="errors.name" :class="['text text-danger']">{{ errors.name }}</span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Description</label>
                                        <input type="text" class="form-control"   aria-describedby="" placeholder="Nhập ..." v-model="role.description"  :class="{ 'is-invalid' : errors.description }">
                                        <span v-if="errors.description" :class="['text text-danger']">{{ errors.description }}</span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label class="col-form-label">Trạng thái</label>
                                    <div class="form-group">
                                        <select class="form-control select2" v-model='role.status' name="status" style="width: 100%;">
                                            <option value="active">active</option>
                                            <option value="inactive">inactive</option>
                                        </select>
                                        <span v-if="errors.status" :class="['text text-danger']">{{ errors.status }}</span>
                                    </div>
                                </div>

                          
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label> <input type="checkbox" class="checkall" v-model="selectAll" @click="selectParentAllCheckbox"> checkAll</label>
                                        </div>
                                        <div class="cardx border-primary mb-3 col-md-12" v-for="(item,index) in permission_roles" :key="index">
                                            <div class="card-header">
                                                <label>- <input type="checkbox" v-model="role.permissionsParent" class="checkbox_wrapper" :value="item.id"> -</label>
                                                <span>Module {{item.name}}</span>
                                            </div>
                                            <div class="row" >
                                                <template v-for="(value, key) in item">
                                                    <div class="card-body text-primary col-md-12" :key="key">                                                       
                                                        <h5 class="card-title">
                                                            <div class="form-check">
                                                                <input class="form-check-input checkbox_childrent" type="checkbox" :value="value.id">
                                                            </div>
                                                            <label> {{value}}</label>
                                                        </h5>
                                                    </div>
                                                </template>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <router-link :to="{ name: 'RoleList' }" 
                                    class="btn btn-primary"
                                    @click.native="addRole(role)">
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

    import {mapActions, mapGetters} from 'vuex'

    export default {
        data() {
            return {
                newRole : '',
                role: {},
                errors: [],
                
                selected: [],
                selectedItem: [],

                selectAll: false,
                selectAllChild: false
            }
        },

        methods : {
            ...mapActions(['addRole', 'getPermissionRoles']),

            selectParentAllCheckbox(){
                this.role.permissionsParent = []

                if(!this.selectAll){
                    for(let i in this.permission_roles){
                        this.role.permissionsParent.push(this.permission_roles[i].id)
                    }
                }
            },
            
            selectChildAllCheckbox(){
                this.permissionsChild = []

                if(!this.selectAllChild){
                    for(let i in this.permission_roles){                      
                        this.permissionsChild.push(this.permission_roles[i].id)
                    }
                }
            }
        },

        created() {
            this.getPermissionRoles();
        },
        computed : {
            ...mapGetters(['loading', 'permission_roles']),
        },
    }
</script>


<style scoped>
    .card-header {
        background-color: #00e765;
    }

    input[type="checkbox"] {
        transform: scale(1.2);
    }
</style>