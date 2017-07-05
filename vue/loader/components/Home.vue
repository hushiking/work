<template>
  <div>
    <h3>我是主页</h3>
    <ul>
      <li><router-link to="/home/login">用户登录</router-link></li>
      <li><router-link to="/home/register">用户注册</router-link></li>
    </ul>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>
<style scope>
  .view {
    border: 1px dashed orange;
  }
</style>