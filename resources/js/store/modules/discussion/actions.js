import {RESOURCE_DISCUSSION} from '../../../api/api';

let actions = {
  getDiscussions({commit}) {
    return new Promise((resolve, reject) => {
      axios.get(RESOURCE_DISCUSSION)
        .then(res => {
          {
            commit('GET_DISCUSSIONS', res.data.discussions)
            resolve(res)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },
 
  getDiscussion({ commit, dispatch }, id){ 
    return new Promise((resolve, reject) => {
      window.axios.get(`${RESOURCE_DISCUSSION}/${id}`)
        .then((response) => {
          commit('GET_DISCUSSION', response.data)
          // console.log('data:'+response.data)
          resolve(response)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  addDiscussion({commit}, discussion) {
    return new Promise((resolve, reject) => {
      axios.post(RESOURCE_DISCUSSION, discussion)
        .then(response => {
          commit('ADD_DISCUSSION', response.data)
          resolve(response)
        }).catch(err => {
          reject(err)
        })
    })
  },

  editDiscussion({commit}, discussion) {
    return new Promise((resolve, reject) => { 
      axios.put(`${RESOURCE_DISCUSSION}/${discussion.id}`, discussion)
        .then((response) => {
            resolve(response)
            commit('EDIT_DISCUSSION', response.data)           
        })
        .catch(err => {
            reject(err)
        });
    })   
  },

  deleteDiscussion({commit}, id) {
    return new Promise((resolve, reject) => {     
      axios.delete(`${RESOURCE_DISCUSSION}/${id}`)
      .then((response) => { 
          commit('DELETE_DISCUSSION', id)       
          resolve(response)         
      })
      .catch(err => {
          reject(err)
      });
    }) 
  }

}
  
export default actions