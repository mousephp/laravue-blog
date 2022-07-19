let mutations = {
  GET_DISCUSSIONS(state, discussions) {
    state.discussions = discussions
  },

  GET_DISCUSSION(state, discussion) {
      state.discussion = discussion;
  },
  // GET_USER_MANUAL(state) {
  //     return state.discussion;
  // },

  ADD_DISCUSSION(state, discussion) {
    state.discussions = [...state.discussions, discussion]

    //state.discussions.push(data.item)
  },

  EDIT_DISCUSSION(state, discussion) {
    // state.discussions = [...state.discussions, discussion]

    let pos = state.discussions.findIndex((item) => item.id === discussion.item.id)
    state.discussions[pos] = discussion.item
  },

  DELETE_DISCUSSION(state, id) {
    // state.discussions = [...state.discussions, discussion]

    let index = state.discussions.findIndex((item) => item.id === id)
    state.discussions.splice(index, 1)
  }
}

export default mutations