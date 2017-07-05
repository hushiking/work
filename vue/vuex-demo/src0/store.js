import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 相当于modules
var state = {
  count: 10
}

// 变化过程
const mutations = {
  increment(state) { // 处理状态(数据)变化
    state.count++
  },
  reduce(state) {
    state.count--
  }
}

// 什么方法(行为)
const actions = {
  // 处理你要干什么,异步请求,判断,流程控制
  increment({commit}) {
    // commit函数将数据交给mutations处理,其中increment名字可以任意取
    commit('increment')
  },
  decrement({commit}) {
    commit('reduce')
  },
  incrementOdd({commit, state}) {
    if (state.count % 2 != 0) {
      commit('increment')
    }
  },
  asyncAsk({commit}) {
    new Promise((resolve) => {
      setTimeout(function() {
        commit('reduce')
      }, 1000)
    })
  }
}

// 什么数据
const getters = {
  count(state) {
    return state.count
  },
  isOdd(state) {
    return state.count % 2 == 0 ? '偶数': '奇数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})