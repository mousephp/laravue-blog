let mutations = {
  GET_LIBRARIES(state, libraries) {
    state.libraries = libraries
  },

  ADD_LIBRARY(state, library) {
    state.libraries = [...state.libraries, library]
  },

  GET_LIBRARY(state, library) {
      state.library = library;
  },

  EDIT_LIBRARY(state, library) {
    let pos = state.libraries.findIndex((item) => item.id === library.item.id)
    state.libraries[pos] = library.item
  },

  DELETE_LIBRARY(state, id) {
    let index = state.libraries.findIndex((item) => item.id === id)
    state.libraries.splice(index, 1)
  }
}

export default mutations