import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

// 定义路由组件(引入)
import Home from './components/Home.vue'
import News from './components/News.vue'
// 定义路由
const routes = [{
  path: '/home',
  component: Home
}, {
  path: '/news',
  component: News
}]
// 创建router实例,传入配置路由参数
var router = new VueRouter({
  routes
})
new Vue({
  el: '#box',
  render: h => h(App),
  router
})