import {RESOURCE_USER_MANUAL} from '../../../api/api';


let actions = {
  getUserManuals({commit}) {
    return new Promise((resolve, reject) => {
      axios.get(RESOURCE_USER_MANUAL)
        .then(res => {
          {
            commit('GET_USER_MANUALS', res.data)
            resolve(res)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },
 
  getUserManual({ commit, dispatch }, id){ 
    return new Promise((resolve, reject) => {
      window.axios.get(`${RESOURCE_USER_MANUAL}/${id}`)
        .then((response) => {
          commit('GET_USER_MANUAL', response.data.userManual)
          // console.log('data:'+response.data)
          resolve(response)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  addUserManual({commit}, user_manual) {
    return new Promise((resolve, reject) => {
      axios.post(RESOURCE_USER_MANUAL, user_manual)
        .then(response => {
          commit('ADD_USER_MANUAL', response.data)
          resolve(response)
        }).catch(err => {
          reject(err)
        })
    })
  },

  editUserManual({commit}, user_manual) {
    return new Promise((resolve, reject) => { 
      axios.put(`${RESOURCE_USER_MANUAL}/${user_manual.id}`, user_manual)
        .then((response) => {
            resolve(response)
            commit('EDIT_USER_MANUAL', response.data)           
        })
        .catch(err => {
            reject(err)
        });
    })   
  },

  deleteUserManual({commit}, id) {
    return new Promise((resolve, reject) => {     
      axios.delete(`${RESOURCE_USER_MANUAL}/${id}`)
      .then((response) => { 
          commit('DELETE_USER_MANUAL', id)       
          resolve(response)         
      })
      .catch(err => {
          reject(err)
      });
    }) 
  }

}
  
export default actions