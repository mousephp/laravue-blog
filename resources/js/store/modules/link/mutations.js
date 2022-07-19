let mutations = {
  GET_LINKS(state, links) {
    state.links = links
  },

  ADD_LINK(state, link) {
    state.links = [...state.link, link]
  },

  VIEW_LINK(state, link) {
      state.link = link;
  },

  EDIT_LINK(state, link) {
    let pos = state.links.findIndex((item) => item.id === link.item.id)
    state.links[pos] = link.item
  },

  DELETE_LINK(state, id) {
    let index = state.links.findIndex((item) => item.id === id) 
    state.links.splice(index, 1)
  }
}

export default mutations