let mutations = {
  GET_TPACKS(state, tpacks) {
    state.tpacks = tpacks
  },

  GET_TPACK(state, tpack) {
    state.tpack = tpack;
  },

  ADD_TPACK(state, tpack) {
    state.tpacks = [...state.tpacks, tpack]
  },

  EDIT_TPACK(state, tpack) {
    let pos = state.tpacks.findIndex((item) => item.id === tpack.item.id)
    state.tpacks[pos] = tpack.item
  },

  DELETE_TPACK(state, id) {
    let index = state.tpacks.findIndex((item) => item.id === id)
    state.tpacks.splice(index, 1)
  },

  SET_MESSAGE(state, message) {
    state.message = message;
  }
}

export default mutations