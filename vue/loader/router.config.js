// 引入vue-router
import VueRouter from 'vue-router'

// 定义路由组件(引入)
import Home from './components/Home.vue'
import News from './components/News.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Details from './components/Details.vue'

// 设置路由,为每个路由对应地配置一个组件
const routes = [{
  path: '/home',
  component: Home,
  children: [{
    path: 'login',
    component: Login
  }, {
    path: 'register',
    component: Register
  }]
}, {
  path: '/news',
  component: News,
  children: [{
    path: 'details/:id',
    component: Details
  }]
}, {
  path: '/',
  redirect: '/news'
}]

// 创建路由实例并传递路由配置参数
const router = new VueRouter({
  routes
})

export default router