<template>
  <div>
    <h2>welcome vue</h2>
    <h3 @click="change">{{msg}}</h3>
    <my-menu></my-menu>   
  </div>
</template>
<style>
  body {
    background: #ccc;
  }
</style>
<script>
  import Menu from './components/Menu.vue'

  export default {
    data() {
      return {
        msg: 'Hello,Menu'
      }
    },
    methods: {
      change() {
        this.msg = '哈喽,man'
      }
    },
    components: {
      'my-menu': Menu
    }
  }
</script>