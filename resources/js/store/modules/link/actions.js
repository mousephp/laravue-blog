import {RESOURCE_LINK} from '../../../api/api';

let actions = {
  getLinks({commit}) {
      axios.get(RESOURCE_LINK)
        .then(res => {
          {
            commit('GET_LINKS', res.data.links)
          }
        })
        .catch(err => {
          console.log(err)
        })
  },

  addLink({commit}, link) {
    return new Promise((resolve, reject) => {
      axios.post(RESOURCE_LINK, link)
        .then(response => {
          commit('ADD_LINK', response.data)
          resolve(response)
        }).catch(err => {
          reject(err)
        })
    })
  },

  viewLink({ commit, dispatch }, id){ 
      window.axios.get(`${RESOURCE_LINK}/${id}`)
        .then((response) => {
          commit('VIEW_LINK', response.data)
        })
        .catch((err) => {
          console.log(err)
        })
  },

  editLink({commit}, link) {
    return new Promise((resolve, reject) => { 
      axios.put(`${RESOURCE_LINK}/${link.id}`, link)
        .then((response) => {
            resolve(response)
            commit('EDIT_LINK', response.data)           
        })
        .catch(err => {
            reject(err)
        });
    })   
  },

  deleteLink({commit}, id) {
    return new Promise((resolve, reject) => {     
      axios.delete(`${RESOURCE_LINK}/${id}`)
      .then((response) => { 
          commit('DELETE_LINK', id)       
          resolve(response)         
      })
      .catch(err => {
          reject(err)
      });
    }) 
  }

}
  
export default actions