import axios from "axios"

const state = {
    access : {},
    message : {},
}

const getters = {
    access : (state) => state.access,
    message : (state) => state.message,
}

const actions = {
    accessAuthorization({commit}, access) {
        axios.get(`http://127.0.0.1:8000/api/setauthorization/${access}` )
            .then(response => {
                if(response.status == 200) {
                    commit('ACCESS', response.data.success)
                    commit('MESSAGE', response.data.message)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
}

const mutations = {
    ACCESS : (state, payload) => state.access = payload,
    MESSAGE : (state, payload) => state.message = payload,
}

export default {
    state,
    getters,
    actions,
    mutations,
}