let mutations = {
  GET_LIBRARY_TYPES(state, library_types) {
    state.library_types = library_types
  },

  ADD_USER_MANUAL(state, library_type) {
    state.library_types = [...state.library_types, library_type]

    //state.library_types.push(data.item)
  },

  GET_LIBRARY_TYPE(state, library_type) {
      state.library_type = library_type;
  },
  // GET_USER_MANUAL(state) {
  //     return state.library_type;
  // },

  EDIT_LIBRARY_TYPE(state, library_type) {
    // state.library_types = [...state.library_types, library_type]

    let pos = state.library_types.findIndex((item) => item.id === library_type.item.id)
    state.library_types[pos] = library_type.item
  },

  DELETE_LIBRARY_TYPE(state, id) {
    // state.library_types = [...state.library_types, library_type]

    let index = state.library_types.findIndex((item) => item.id === id)
    state.library_types.splice(index, 1)
  }
}

export default mutations