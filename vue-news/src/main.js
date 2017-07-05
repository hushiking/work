import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/'
import axios from 'axios'
import Loading from './components/loading/'

import './assets/css/base.css' // 导入全局base文件
import './assets/js/font.js'
import './assets/js/jquery-1.7.2.js'
import './assets/js/swipe.js'
// import './assets/js/zepto.min.js'

import filters from './filters/'
import routes from './router.config.js'

Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]))

Vue.use(VueRouter)
Vue.use(Loading)

// 必须是routes属性（相当于路由配置）
const router = new VueRouter({
  mode: 'history', // 切换路径模式，变成history模式，去掉路径中的#
  // scrollBehavior() { // 控制滚动条的行为，不加这个切换路由时会默认记忆原来滚动条的位置
  //   return {y: 0}
  // },
  scrollBehavior: () => ({y: 0}), // 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号
  routes
})

// axios的一些配置，比如发送请求显示loading，响应回来loading消失之类的
axios.interceptors.request.use(function(config) {
  store.dispatch('showLoading')
  return config
}, function(err) {
  return Promise.reject(err)
})
axios.interceptors.response.use(function(response) {
  store.dispatch('hideLoading')
  return response
}, function(err) {
  return Promise.reject(err)
})
// axios.defaults.baseURL = 'http://localhost:8081' // 配置请求根路径
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' // 配置请求头

Vue.prototype.$http = axios // 把axios对象挂到Vue原型上

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
