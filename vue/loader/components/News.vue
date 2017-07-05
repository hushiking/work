<template>
  <div>
    <h3>我是新闻</h3>
    <ul>
      <li>
        <router-link to="/news/details/001">第一条新闻</router-link>
      </li>
      <li>
        <router-link to="/news/details/002">第二条新闻</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>