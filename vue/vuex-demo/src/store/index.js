import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import count from './modules/count.js'

import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'
const state = {
  count
}


export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})