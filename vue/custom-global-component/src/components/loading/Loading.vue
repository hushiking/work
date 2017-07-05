<!-- 需要导出的全局组件,使用Vue.use('xx') -->
<template>
  <div class="loading-box">
    {{msg}}
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: 'Loading...^_^'
      }
    }
  }
</script>
<style scope>
  .loading-box {
    color: cyan;
    font: 700 50px monospace;
    text-shadow: 2px 2px 5px #399;
  }
</style>