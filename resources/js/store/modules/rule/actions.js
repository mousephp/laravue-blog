import {RESOURCE_RULE} from '../../../api/api';

import * as types from './mutation-types'

let actions = {
  getRules({commit}) {
      axios.get(RESOURCE_RULE)
        .then(res => {
          {
            commit(types.GET_RULES, res.data.rules)
          }
        })
        .catch(err => {
          console.log(err)
        })
  },
 
  getRule({ commit, dispatch }, id){ 
      window.axios.get(`${RESOURCE_RULE}/${id}`)
        .then((response) => {
          commit(types.GET_RULE, response.data)
        })
        .catch((err) => {
          console.log(err)
        })
  },

  addRule({commit}, rule) {
    return new Promise((resolve, reject) => {
      axios.post(RESOURCE_RULE, rule)
        .then(response => {
          commit(types.ADD_RULE, response.data.rule)
          resolve(response)
        }).catch(err => {
          reject(err)
        })
    })
  },

  editRule({commit}, rule) {
    return new Promise((resolve, reject) => { 
      axios.put(`${RESOURCE_RULE}/${rule.id}`, rule)
        .then((response) => {
            resolve(response)
            commit(types.EDIT_RULE, response.data.rule)           
        })
        .catch(err => {
            reject(err)
        });
    })   
  },

  deleteRule({commit}, id) {
    return new Promise((resolve, reject) => {     
      axios.delete(`${RESOURCE_RULE}/${id}`)
      .then((response) => { 
          commit(types.DELETE_RULE, id)       
          resolve(response.data.message)         
      })
      .catch(err => {
          reject(err)
      });
    }) 
  }

}
  
export default actions