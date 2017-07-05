export default {
  count(state) {
    return state.count
  },
  isOdd(state) {
    return state.count %2 !=0 ? '奇数': '偶数'
  }
}