import * as types from './types.js'
import getters from './getters.js'

const state = {
  header: true,
  loading: false,
  footer: true
}

const mutations = {
  [types.SHOW_HEADER](state) {
    state.header = true
  },
  [types.HIDE_HEADER](state) {
    state.header = false
  },
  [types.SHWO_LOADING](state) {
    state.loading = true
  },
  [types.HIDE_LOADING](state) {
    state.loading = false
  },
  [types.SHOW_FOOTER](state) {
    state.footer = true
  },
  [types.HIDE_FOOTER](state) {
    state.footer = false
  }
}

export default {
  state,
  mutations,
  getters
}