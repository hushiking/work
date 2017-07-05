<template>
  <div id="app">
    <h1>welcome vuex-demo</h1>
    <input type="button" value="增加" @click="increment">
    <input type="button" value="减少" @click="decrement">
    <input type="button" value="奇数才能增加" @click="incrementOdd">
    <input type="button" value="异步请求" @click="asyncAsk">
    <span>现在数字为: {{count}},它是{{isOdd}}!</span>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: mapGetters([
    'count',
    'isOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementOdd',
    'asyncAsk'
  ])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
