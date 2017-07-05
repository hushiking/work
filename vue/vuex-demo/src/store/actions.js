import * as types from './types.js'

export default {
  increment({commit}) {
    console.log(commit)
    commit(types.INCREMENT)
  },
  decrement({commit}) {
    commit(types.DECREMENT)
  },
  incrementOdd({commit, state}) {
    if (state.count %2 != 0) {
      commit(types.INCREMENT)
    }
  },
  asyncAsk({commit}) {
    new Promise(resolve => {
      setTimeout(function() {
        commit(types.DECREMENT)
      }, 2000)
    })
  }
}