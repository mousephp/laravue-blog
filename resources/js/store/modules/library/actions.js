import {RESOURCE_LIBRARY} from '../../../api/api';

let actions = {
  getLibraries({commit}) {
    return new Promise((resolve, reject) => {
      axios.get(RESOURCE_LIBRARY)
        .then(res => {
          {
            commit('GET_LIBRARIES', res.data.libraries)
            resolve(res)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },
 
  getLibrary({ commit, dispatch }, id){ 
    return new Promise((resolve, reject) => {
      window.axios.get(`${RESOURCE_LIBRARY}/${id}`)
        .then((response) => {
          commit('GET_LIBRARY', response.data)
          // console.log('data:'+response.data)
          resolve(response)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  addLibrary({commit}, library) {
    return new Promise((resolve, reject) => {
      axios.post(RESOURCE_LIBRARY, library)
        .then(response => {
          commit('ADD_LIBRARY', response.data)
          resolve(response)
        }).catch(err => {
          reject(err)
        })
    })
  },

  editLibrary({commit}, library, config) {
    var formObject = [];

    for (const [key, value] of library.entries()) {
        formObject[key] = value;
    }
    
    return new Promise((resolve, reject) => { 
      axios.post(`${RESOURCE_LIBRARY}/${formObject.library_id}`, library, config)
        .then((response) => {
            resolve(response)
            commit('EDIT_LIBRARY', response.data)           
        })
        .catch(err => {
            reject(err)
        });
    })   
  },

  deleteLibrary({commit}, id) {
    return new Promise((resolve, reject) => {     
      axios.delete(`${RESOURCE_LIBRARY}/${id}`)
      .then((response) => { 
          commit('DELETE_LIBRARY', id)       
          resolve(response)         
      })
      .catch(err => {
          reject(err)
      });
    }) 
  }

}
  
export default actions