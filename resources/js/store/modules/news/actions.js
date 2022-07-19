import {RESOURCE_NEWS} from '../../../api/api';

let actions = {
  getNews({commit}) {
    return new Promise((resolve, reject) => {
      axios.get(RESOURCE_NEWS)
        .then(res => {
          {
            commit('GET_NEWS', res.data.news)
            resolve(res)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },
 
  getNewItem({ commit, dispatch }, id){ 
    return new Promise((resolve, reject) => {
      window.axios.get(`${RESOURCE_NEWS}/${id}`)
        .then((response) => {
          commit('GET_NEW_ITEM', response.data)
          // console.log('data:'+response.data)
          resolve(response)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  addNews({commit}, news, config) {
    return new Promise((resolve, reject) => {
      axios.post(RESOURCE_NEWS, news, config)
        .then(response => {
          commit('ADD_NEWS', response.data)
          resolve(response)
        }).catch(err => {
          reject(err)
        })
    })
  },

  editNews({commit}, news, config) {
    var formObject = [];

    for (const [key, value] of news.entries()) {
        formObject[key] = value;
    }

    return new Promise((resolve, reject) => { 
      axios.post(`${RESOURCE_NEWS}/${formObject.new_id}`, news, config)
        .then((response) => {
            commit('EDIT_NEWS', response.data)    
            resolve(response)                  
        })
        .catch(err => {
            reject(err)
        });
    })   
  },

  deleteNews({commit}, id) {
    return new Promise((resolve, reject) => {     
      axios.delete(`${RESOURCE_NEWS}/${id}`)
      .then((response) => { 
          commit('DELETE_NEWS', id)       
          resolve(response)         
      })
      .catch(err => {
          reject(err)
      });
    }) 
  }

}
  
export default actions