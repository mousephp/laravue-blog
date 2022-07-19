
import axios from 'axios';

import * as API from "../../../services/API.js";

import {RESOURCE_TAG} from '../../../api/api';

const state = {
    tags: [],
    tag: {},
    errors: [],
}

const mutations = {
    FETCH(state, tags) {
        state.tags = tags;
    },
    FETCH_ONE(state, tag) {
        state.tag = tag;
    },
    ADD_TAG(state, tag) {
        state.tags = [...state.tags, tag]
    },
    EDIT_TAG(state, tag) {
        state.tags = [...state.tags, tag]
    },
    DELETE_TAG(state, id) {
        let index = state.tags.findIndex((item) => item.id === id)
        state.tags.splice(index, 1)
    },
    SET_ERRORS(state, errors) {
        state.errors = errors;
    }
}

const getters = {
    tags: state => {
        return state.tags
    },
    tag: state => {
        return state.tag
    }
}

const actions = {
    fetch({ commit }) {
        return new Promise((resolve, reject) => {
            API.apiClient.get(RESOURCE_TAG)
                .then(response => {
                    commit('FETCH', response.data.tags)
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });    
    },
    fetchOne({ commit }, id) {
        return new Promise((resolve, reject) => {
            API.apiClient.get(`${RESOURCE_TAG}/${id}`)
                .then(response => {
                    commit('FETCH_ONE', response.data)
                    resolve(response);
                })
                .catch(error => {                
                    reject(error);
                });
        });
    },
    addTag({commit}, tag) {
        return new Promise((resolve, reject) => {
            API.apiClient.post(`${RESOURCE_TAG}`, tag)
                .then((response) => {
                    commit('ADD_TAG', response.data.tag)
                    resolve(response);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    },
    editTag({commit}, tag) {
        return new Promise((resolve, reject) => {
            API.apiClient.put(`${RESOURCE_TAG}/${tag.id}`, tag)
                .then((response) => {
                    commit('EDIT_TAG', response.data.tag)
                    resolve(response);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    },
    deleteTag({commit}, id) {
        return new Promise((resolve, reject) => {
            API.apiClient.delete(`${RESOURCE_TAG}/${id}`)
                .then((response) => {
                    commit('DELETE_TAG', id)
                    resolve(response);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });
    },
    setErrors({ commit }, errors) {
        commit("SET_ERRORS", errors);
    },
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
