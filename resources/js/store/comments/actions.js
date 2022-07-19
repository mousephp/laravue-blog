let actions = {
  addComment({commit}, comment) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/discussion/comments/create`, comment)
        .then(response => {
          resolve(response)
        }).catch(err => {
        reject(err)
      })
    })
  },

  getComments({commit}, id) {
    axios.get(`/api/discussion/comments/${id}`)
      .then(res => {
        {
          commit('GET_COMMENTS', res.data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default actions