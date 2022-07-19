import {RESOURCE_TPACK} from '../../../api/api';

let actions = {
  getTpacks({commit}) {
      axios.get(RESOURCE_TPACK)
        .then((res) => {
            commit('GET_TPACKS', res.data.tpacks)
        })
        .catch(err => {
          console.log(err)
        })
  },
 
  getTpack({ commit }, id){ 
      window.axios.get(`${RESOURCE_TPACK}/${id}`)
        .then((response) => {
          commit('GET_TPACK', response.data.tpack)
        })
        .catch((err) => {
          console.log(err)
        })       
  },

  addTpack({commit}, tpack) {
    return new Promise((resolve, reject) => {
      axios.post(RESOURCE_TPACK, tpack)
        .then(response => {
          commit('ADD_TPACK', response.data)
          resolve(response)
        }).catch(err => {
          reject(err)
        })
    })
  },

  editTpack({commit}, tpack) {
    return new Promise((resolve, reject) => { 
      axios.put(`${RESOURCE_TPACK}/${tpack.id}`, tpack)
        .then((response) => {
            resolve(response)
            commit('EDIT_TPACK', response.data)     
            commit("SET_MESSAGE", response.data.message);      
        })
        .catch(err => {
          commit("SET_MESSAGE", err);
            reject(err)
        });
    })   
  },

  deleteTpack({commit}, id) {
    return new Promise((resolve, reject) => {     
      axios.delete(`${RESOURCE_TPACK}/${id}`)
        .then((response) => { 
            commit('DELETE_TPACK', id)       
            resolve(response)         
        })
        .catch(err => {
            reject(err)
        });
    }) 
  }
}
  
export default actions