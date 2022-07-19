import axios from "axios"

const state = {
    roles : {},
    role : {},
    permission_roles: ''
}

const getters = {
    roles : (state) => state.roles,
    role : (state) => state.role,
    permission_roles : (state) => state.permission_roles,
}

const actions = {
    getRoles({commit}) {
        commit('loadingStatus', true)
        axios.get('/api/admins/roles')
            .then(response => {
                if(response.status == 200) {
                    // commit('roles', response.data)
                    // commit('loadingStatus', false)
                }           
            })
            .catch(error => {
                console.log(error)
            })
    },

    viewRole({commit}, id) {
        commit('loadingStatus', true)
        axios.get('/api/admins/roles/' + id)
            .then(response => {
                if(response.status == 200) {
                    // commit('role', response.data)
                    commit('loadingStatus', false)
                }
            })
            .catch(error => {
                console.log(error)
            })
    },
        
    getPermissionRoles({commit}) {
        commit('loadingStatus', true)
        axios.get('/api/admins/permission-roles')
            .then(response => {
                if(response.status == 200) {
                    commit('permission_roles', response.data.permissions)
                    commit('loadingStatus', false)
                }
            })
            .catch(error => {
                console.log(error)
            })
    },

    addRole({commit}, input) {
        return new Promise((resolve, reject) => { 
            axios.post('/api/admins/roles', {role : input})
                .then(response => {
                    if(response.status == 200) {
                        resolve(response)
                        // commit('message', response.data)
                    }
                })
                .catch(error => {
                    reject(err)
                    console.log(error)
                })
        })
    },

    updateRole({commit}, perm) {
        return new Promise((resolve, reject) => { 
            axios.put('/api/admins/roles/' + perm.roleId, {data : perm})
                .then(response => {
                    // commit('message', response.data)
                    resolve(response)
                })
                .catch(error => {
                    reject(err)
                    console.log(error)
                })
        })    
    },

    deleteRole({commit}, routeId) {
        return new Promise((resolve, reject) => {       
            axios.delete('/api/admins/roles/' + routeId)
                .then(response => {
                    if(response.status == 200) {
                        // commit('message', response.data)
                        resolve(response)
                    }
                })
                .catch(error => {
                    console.log(error)
                    reject(err)
                })
        })    
    }
}

const mutations = {
    roles : (state, payload) => state.roles = payload,
    role : (state, payload) => state.role = payload,
    permission_roles : (state, payload) => state.permission_roles = payload,
}

export default {
    state,
    getters,
    actions,
    mutations,
}