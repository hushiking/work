<template>
  <div>
    <h3>vue-loader + vue-router</h3>
    <router-link to="/home">主页</router-link>   
    <router-link to="/news">新闻</router-link>
    <router-view></router-view>   
  </div>
</template>
<style>
  body {
    background: #ccc;
  }
  .router-link-active {
    font: 700 20px monospace;
    color: #0094ff;
  }
</style>
<script>
  
</script>