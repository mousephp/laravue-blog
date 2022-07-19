let mutations = {
  GET_USER_MANUALS(state, user_manuals) {
    state.user_manuals = user_manuals
  },

  ADD_USER_MANUAL(state, user_manual) {
    state.user_manuals = [...state.user_manuals, user_manual]
  },

  GET_USER_MANUAL(state, user_manual) {
      state.user_manual = user_manual;
  },

  EDIT_USER_MANUAL(state, user_manual) {
    // state.user_manuals = [...state.user_manuals, user_manual]

    let pos = state.user_manuals.findIndex((item) => item.id === user_manual.item.id)
    state.user_manuals[pos] = user_manual.item
  },

  DELETE_USER_MANUAL(state, id) {
    let index = state.user_manuals.findIndex((item) => item.id === id)
    state.user_manuals.splice(index, 1)
  }
}

export default mutations