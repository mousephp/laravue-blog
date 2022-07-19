import axios from "axios"

import {RESOURCE_SETTING} from '../../../api/api';

const state = () => ({
  settings: {},
  errors: {}
});

const getters = {
  settings: ({ settings }) => settings,
  errors: ({ errors }) => errors,
};

const mutations = {
  SET_ERRORS(state, errors) {
    state.errors = errors;
  },
  SET_SETTINGS(state, data) {
    state.settings = data;
  }
};

const actions = {
  setSettings({ commit }){
      return new Promise((resolve, reject) => {
          axios.get(RESOURCE_SETTING)
              .then(response => {
                  commit('SET_SETTINGS', response.data.data)
                  resolve(response);
              })
              .catch(error => {
                  reject(error);
              });
      });    
  },
  setErrors({ commit }, errors) {
    commit("SET_ERRORS", errors);
  },
  clearErrors({ commit }) {
    commit("SET_ERRORS", {});
  }
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
