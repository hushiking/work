import { INCREMENT, DECREMENT } from './types.js'
console.log(INCREMENT)
const mutations = {
  increment(state) {
    state.count++
  },
  [DECREMENT](state) {
    state.count--
  }
}
export default mutations
