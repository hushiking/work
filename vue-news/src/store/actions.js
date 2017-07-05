import * as types from './types.js'

export default {
  showHeader({commit}) {
    commit(types.SHOW_HEADER)
  },
  hideHeader({commit}) {
    commit(types.HIDE_HEADER)
  },
  showLoading({commit}) {
    commit(types.SHWO_LOADING)
  },
  hideLoading({commit}) {
    commit(types.HIDE_LOADING)
  },
  showFooter({commit}) {
    commit(types.SHOW_FOOTER)
  },
  hideFooter({commit}) {
    commit(types.HIDE_FOOTER)
  }
}