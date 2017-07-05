import Vue from 'vue'
import App from './App.vue'

import './componentInject.js'

// 按需引入
// import {Button, Radio} from 'element-ui'

// 使用(第一种方式)
// Vue.use(Button)
// Vue.use(Radio)

// 使用(第二种方式)
// Vue.component(Button.name, Button)
// Vue.component(Radio.name, Radio)

new Vue({
  el: '#app',
  render: h => h(App)
})
