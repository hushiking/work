<template>
  <div class="nav">
    <ul>
          <!-- <li class="active">
            <router-link to='/home'>首页</router-link>
          </li> -->
          <router-link to="/home" tag="li" active-class="active">
            <a href="">首页</a>
          </router-link>
          <router-link to="/follow" tag="li" active-class="active">
            <a href="">关注</a>
          </router-link>
          <router-link to="/column" tag="li" active-class="active">
            <a href="">栏目</a>
          </router-link>
        </ul>    
  </div>
</template>