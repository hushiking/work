import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

// 引入路由配置文件
import router from './router.config.js'

// 创建router实例,传入配置路由参数
// const router = new VueRouter({
//   routes
// })
new Vue({
  el: '#box',
  render: h => h(App),
  router
})