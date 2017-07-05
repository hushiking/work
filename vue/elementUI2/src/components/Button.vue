<template>
  <div>
    <el-button @click="get">请求数据</el-button>    
    <el-button>请求数据</el-button>    
    <el-button>请求数据</el-button>    
    <el-button>请求数据</el-button>    
  </div>
</template>
<script>
  export default {
    methods: {
      get() {
        alert(3)
      }
    }
  }
</script>