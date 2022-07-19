import {RESOURCE_DISCUSSION_TYPE} from '../../../api/api';

let actions = {
  getDiscussionTypes({commit}) {
    return new Promise((resolve, reject) => {
      axios.get(RESOURCE_DISCUSSION_TYPE)
        .then(res => {
          {
            console.log('data:'+res.data.discussionTypes)
            commit('GET_DISCUSSION_TYPES', res.data.discussionTypes)
            resolve(res)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },
 
  addDiscussionType({commit}, discussion_type) {
    return new Promise((resolve, reject) => {
      axios.post(RESOURCE_DISCUSSION_TYPE, discussion_type)
        .then(response => {
          commit('ADD_DISCUSSION_TYPE', response.data)
          resolve(response)
        }).catch(err => {
          reject(err)
        })
    })
  },

  viewDiscussionType({ commit, dispatch }, id){ 
      window.axios.get(`${RESOURCE_DISCUSSION_TYPE}/${id}`)
        .then((response) => {
          commit('VIEW_DISCUSSION_TYPE', response.data)
          resolve(response)
        })
        .catch((err) => {
          console.log(err)
        })
  },

  editDiscussionType({commit}, discussion_type) {
    return new Promise((resolve, reject) => { 
      axios.put(`${RESOURCE_DISCUSSION_TYPE}/${discussion_type.id}`, discussion_type)
        .then((response) => {
            resolve(response)
            commit('EDIT_DISCUSSION_TYPE', response.data)           
        })
        .catch(err => {
            reject(err)
        });
    })   
  },

  deleteDiscussionType({commit}, id) {
    return new Promise((resolve, reject) => {     
      axios.delete(`${RESOURCE_DISCUSSION_TYPE}/${id}`)
      .then((response) => { 
          commit('DELETE_DISCUSSION_TYPE', id)       
          resolve(response)         
      })
      .catch(err => {
          reject(err)
      });
    }) 
  }

}
  
export default actions