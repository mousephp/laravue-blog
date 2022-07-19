import axios from 'axios';
import {RESOURCE_CATEGORY} from '../../../api/api';

const state = {
    categories: [],
    category: {},
    errors: [],
}
const mutations = {
    FETCH(state, categories) {
        state.categories = categories;
    },
    FETCH_ONE(state, category) {
        state.category = category;
    },
}
const getters = {
    categories: state => {
        return state.categories
    },
    category: state => {
        return state.category
    }
}
const actions = {
    fetch({ commit }) {
        return new Promise((resolve, reject) => {
            axios.get(RESOURCE_CATEGORY)
                .then(response => {
                    commit('FETCH', response.data.categories)
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });    
    },
    fetchOne({ commit }, id) {
        return new Promise((resolve, reject) => {
            axios.get(`${RESOURCE_CATEGORY}/${id}`)
                .then(response => {
                    commit('FETCH_ONE', response.data.category)
                    resolve(response);
                })
                .catch(error => {                
                    reject(error);
                });
        });
    },
    addCategory({}, category) {
        return new Promise((resolve, reject) => {
            axios.post(`${RESOURCE_CATEGORY}`, category)
                .then((response) => {
                    // dispatch('fetch')
                    resolve(response);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    },

    editCategory({}, category) {
        return new Promise((resolve, reject) => {
            axios.put(`${RESOURCE_CATEGORY}/${category.id}`, category)
                .then((response) => {
                    // dispatch('fetch')
                    if (response.data) {
                        resolve(response);
                    } else {
                        reject(response);
                    }
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    },
    deleteCategory({}, id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${RESOURCE_CATEGORY}/${id}`)
                .then((response) => {
                    // dispatch('fetch')
                    resolve(response);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    },
}


export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations
};
