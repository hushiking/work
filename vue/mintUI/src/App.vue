<template>
  <div id="app">
    <!-- 顶部栏 -->
    <mt-header fixed title="fixed top"></mt-header>
    <h1>{{msg}}</h1>
    <!-- 按钮 -->
    <div class="btn">
      <mt-button type="default">default</mt-button>
      <mt-button type="primary" @click.native="load">加载数据</mt-button>
      <mt-button type="danger">danger</mt-button>
      <mt-button disabled>disabled</mt-button>
      <mt-button plain>plain</mt-button>
      <mt-button icon="back">back</mt-button>
      <mt-button icon="more">更多</mt-button>
    </div>
    <!-- 轮播图 -->
    <div class="page-swipe">
      <mt-swipe :auto="0" :show-indicators="true">
        <mt-swipe-item :class="{slide1:true}">1</mt-swipe-item>
        <mt-swipe-item :class="{slide2:true}">2</mt-swipe-item>
        <mt-swipe-item :class="{slide3:true}">3</mt-swipe-item>
      </mt-swipe>      
    </div>
    <!-- 底部栏 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="./assets/logo.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="./assets/logo.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="./assets/logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="./assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
    <!-- 单选框 -->
    <mt-radio
      title="单选框列表"
      v-model="value"
      :options="['选项A', '选项B', '选项C']">
    </mt-radio>
    <mt-cell title="标题文字">{{value}}</mt-cell>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: 0,
      value: ''
    }
  },
  methods: {
    load() {
      Indicator.open('加载中...')
      axios.get('https://api.github.com/users/itstrive')
      .then(res => {
        this.msg = '数据加载完成'
        Indicator.close()
      }).catch(err => {
        console.log(err)
      })
      /*setTimeout(() => {
        Indicator.close()
      }, 2000)*/
    }
  }
}
</script>

<style>
button {
  margin: 5px;
}

label.mint-radiolist-title {
  color: purple;
  font: 700 20px monospace;
}

.page-swipe .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}
.page-swipe .mint-swipe-item {
    line-height: 200px;
}
.page-swipe .slide1 {
    background-color: #0089dc;
    color: #fff;
}
.page-swipe .slide2 {
    background-color: #ffd705;
    color: #000;
}
.page-swipe .slide3 {
    background-color: #ff2d4b;
    color: #fff;
}
.page-swipe-desc {
    text-align: center;
    color: #666;
    margin-bottom: 5px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
