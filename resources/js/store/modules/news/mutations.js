let mutations = {
  GET_NEWS(state, news) {
    state.news = news
  },

  ADD_NEWS(state, new_item) {
    state.news = [...state.news, new_item]
  },

  GET_NEW_ITEM(state, new_item) {
      state.new_item = new_item;
  },

  EDIT_NEWS(state, new_item) {
    let pos = state.news.findIndex((item) => item.id === new_item.item.id)
    state.news[pos] = new_item.item
  },

  DELETE_NEWS(state, id) {
    let index = state.news.findIndex((item) => item.id === id)
    state.news.splice(index, 1)
  }
}

export default mutations