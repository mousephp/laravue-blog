import {RESOURCE_USER} from '../../../api/api';

let actions = {
  getUsers({commit}) {
      axios.get(RESOURCE_USER)
        .then((response) => {
          if(response.status == 200) {
            commit('GET_USERS', response.data)
          }    
        })
        .catch(err => {
          console.log(err)
        })
  },

  addUser({commit}, user) {
    return new Promise((resolve, reject) => {
      axios.post(RESOURCE_USER, user)
        .then(response => {
          commit('STORE_USER', response.data)
          resolve(response)
        }).catch(err => {
          reject(err)
        })
    })
  },

  showUser({ commit, dispatch }, id){ 
    window.axios.get(`${RESOURCE_USER}/${id}`)
      .then((response) => {
        commit('SHOW_USER', response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  updateUser({commit}, user) {
    return new Promise((resolve, reject) => { 
      axios.put(`${RESOURCE_USER}/${user.id}`, user)
        .then((response) => {
            resolve(response)
            commit('UPDATE_USER', response.data)           
        })
        .catch(err => {
            reject(err)
        });
    })   
  },

  deleteUser({commit}, id) {
    return new Promise((resolve, reject) => {     
      axios.delete(`${RESOURCE_USER}/${id}`)
      .then((response) => { 
          commit('DELETE_USER', id)       
          resolve(response)         
      })
      .catch(err => {
          reject(err)
      });
    }) 
  }

}
  
export default actions