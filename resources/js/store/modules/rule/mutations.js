import * as types from './mutation-types'

let mutations = {
  [types.GET_RULES](state, rules) {
    state.rules = rules
  },
  
  [types.GET_RULE](state, rule) {
      state.rule = rule;
  },
  
  [types.ADD_RULE](state, rule) {
    state.rules = [...state.rules, rule]
  },
  
  [types.EDIT_RULE](state, rule) {
    let pos = state.rules.findIndex((item) => item.id === rule.item.id)
    state.rules[pos] = rule.item
  },
  
  [types.DELETE_RULE](state, id) {
    let index = state.rules.findIndex((item) => item.id === id)
    state.rules.splice(index, 1)
  }
}

export default mutations