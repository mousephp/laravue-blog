import {RESOURCE_LIBRARY_TYPE} from '../../../api/api';

let actions = {
  getLibraryTypes({commit}) {
    return new Promise((resolve, reject) => {
      axios.get(RESOURCE_LIBRARY_TYPE)
        .then(res => {
          {
            commit('GET_LIBRARY_TYPES', res.data.libraryTypes)
            resolve(res)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },
 
  getLibraryType({ commit, dispatch }, id){ 
    return new Promise((resolve, reject) => {
      window.axios.get(`${RESOURCE_LIBRARY_TYPE}/${id}`)
        .then((response) => {
           console.log('data:'+response.data)
          commit('GET_LIBRARY_TYPE', response.data)
         
          resolve(response)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  addLibraryType({commit}, library_type) {
    return new Promise((resolve, reject) => {
      axios.post(RESOURCE_LIBRARY_TYPE, library_type)
        .then(response => {
          commit('ADD_LIBRARY_TYPE', response.data)
          resolve(response)
        }).catch(err => {
          reject(err)
        })
    })
  },

  editLibraryType({commit}, library_type) {
    return new Promise((resolve, reject) => { 
      axios.put(`${RESOURCE_LIBRARY_TYPE}/${library_type.id}`, library_type)
        .then((response) => {
            resolve(response)
            commit('EDIT_LIBRARY_TYPE', response.data)           
        })
        .catch(err => {
            reject(err)
        });
    })   
  },

  deleteLibraryType({commit}, id) {
    return new Promise((resolve, reject) => {     
      axios.delete(`${RESOURCE_LIBRARY_TYPE}/${id}`)
      .then((response) => { 
          commit('DELETE_LIBRARY_TYPE', id)       
          resolve(response)         
      })
      .catch(err => {
          reject(err)
      });
    }) 
  }

}
  
export default actions