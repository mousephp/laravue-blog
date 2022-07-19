let mutations = {
  GET_DISCUSSION_TYPES(state, discussion_types) {
    state.discussion_types = discussion_types
  },

  ADD_DISCUSSION_TYPE(state, discussion_type) {
    state.discussion_types = [...state.discussion_types, discussion_type]
  },

  VIEW_DISCUSSION_TYPE(state, discussion_type) {
      state.discussion_type = discussion_type;
  },

  EDIT_DISCUSSION_TYPE(state, discussion_type) {
    let pos = state.discussion_types.findIndex((item) => item.id === discussion_type.item.id)
    state.discussion_types[pos] = discussion_type.item
  },

  DELETE_DISCUSSION_TYPE(state, id) {
    let index = state.discussion_types.findIndex((item) => item.id === id)
    state.discussion_types.splice(index, 1)
  }
}

export default mutations