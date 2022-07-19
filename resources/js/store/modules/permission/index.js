import axios from "axios"

const state = {
    permissions : [],
    permission : {},
    message : {},
    loadingState : false,
}

const getters = {
    permissions : (state) => state.permissions,
    permission : (state) => state.permission,
    message : (state) => state.message,
    loading : (state) => state.loadingState,
}

const actions = {
    getPermissions({commit}) {
        commit('LOADING_STATUS', true)
        axios.get('/api/admins/permissions')
            .then(response => {
                if(response.status == 200) {
                    commit('GET_PERMISSIONS', response.data)
                    commit('LOADING_STATUS', false)
                }
            })
            .catch(error => {
                console.log(error)
            })
    },

    viewPermission({commit}, id) {
        commit('LOADING_STATUS', true)
        axios.get('/api/admins/permissions/'+id)
            .then(response => {
                if(response.status == 200) {
                    console.log(response.data)
                    commit('VIEW_PERMISSION', response.data.data)
                    commit('LOADING_STATUS', false)
                }
            })
            .catch(error => {
                console.log(error)
            })
    },

    addPermission({commit}, data) {
        return new Promise((resolve, reject) => { 
            axios.post('/api/admins/permissions', data)
                .then(response => {
                    if(response.status == 200) {
                        resolve(response)
                        commit('MESSAGE', response.data)      
                        commit('ADD_PERMISSION', response.data)         
                    }
                })
                .catch(error => {
                    reject(error)
                    console.log(error)
                })
        })   
    },

    updatePermission({commit}, data) {
        console.log("data:"+data.name)
        return new Promise((resolve, reject) => { 
            axios.put(`http://127.0.0.1:8000/api/admins/permissions/${data.id}`, data)
                .then((response) => {
                    // console.log("data:"+response.data.name)  
                    commit('EDIT_PERMISSION', response.data)     
                    commit('MESSAGE', response.data)  
                    resolve(response)         
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                });
        })   
    },

    deletePermission({commit}, id) {
        return new Promise((resolve, reject) => { 
            axios.delete('/api/admins/permissions/' + id)
                .then(response => {
                    if(response.status == 200) {
                        resolve(response)
                        commit('MESSAGE', response.data)
                    }
                }).catch(err => {
                    reject(err)
                    console.log(err)
                });
        })   
    }
}

const mutations = {
    GET_PERMISSIONS : (state, payload) => state.permissions = payload,
    VIEW_PERMISSION : (state, payload) => state.permission = payload,
    MESSAGE : (state, payload) => state.message = payload,
    LOADING_STATUS : (state, payload) => state.loadingState = payload,

    ADD_PERMISSION(state, permission) {
        state.permissions = [...state.permissions, permission]
    },

    EDIT_PERMISSION(state, permission) {
        let pos = state.permissions.findIndex((item) => item.id === permission.item.id)
        state.permissions[pos] = permission.item
    },

    DELETE_PERMISSION(state, id) {
        let index = state.permissions.findIndex((item) => item.id === id)
        state.permissions.splice(index, 1)
    },

    SET_MESSAGE(state, message) {
        state.message = message;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}