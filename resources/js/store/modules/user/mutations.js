let mutations = {
  GET_USERS(state, users) {
    state.users = users
  },

  STORE_USER(state, user) {
    state.users = [...state.users, user]
  },

  SHOW_USER(state, user) {
      state.user = user;
  },

  UPDATE_USER(state, user) {
    let pos = state.users.findIndex((item) => item.id === user.item.id)
    state.users[pos] = user.item
  },

  DELETE_USER(state, id) {
    let index = state.users.findIndex((item) => item.id === id)
    state.users.splice(index, 1)
  }
}

export default mutations