<template>
  <div class="content">
    <div class="header">
      <!-- 图片加载可以用相对路径也可以用绝对路径 -->
        <h2><img src="/src/assets/img/headimg.png" alt=""/></h2>
          <div class="user-box">
            <router-link to="/userLogin">登录</router-link>
            <router-link to="/userReg">注册</router-link>
          </div>
          <ul class="clear">
            <li>
                <span>0</span>
                  <p>关注</p>
              </li>
              <li>
                <span>0</span>
                  <p class="end">粉丝</p>
              </li>
          </ul>
      </div>
      <div class="docList">
        <ul>
              <li class="gk-text">
                <i></i>
                  <p>公开博文</p>
                  <b></b>
                  <span>0</span>
              </li>
              <li class="mm-text">
                <i></i>
                  <p>秘密博文</p>
                  <b></b>
                  <span>0</span>
              </li>
              <li class="cg-text">
                <i></i>
                  <p>草稿箱</p>
                  <b></b>
                  <span>0</span>
              </li>
              <li class="sc-text">
                <i></i>
                  <p>收藏夹</p>
                  <b></b>
                  <span>0</span>
              </li>
              <li class="my_cz">
                <i></i>
                  <p>收藏夹</p>
              </li>
          </ul>
      </div>
  </div>
</template>
<style>
  /* 可以使用相对路径'../assets/css/mydoc.css',也可以使用绝对路径'/src/assets/css/mydoc.css' */
  @import '/src/assets/css/mydoc.css';
</style>