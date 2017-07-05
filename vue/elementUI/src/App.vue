<template>
  <div id="app">
    {{msg}}
    <hr>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="danger">主要按钮</el-button>
    <el-button type="info" icon="close">主要按钮</el-button>
    <el-button type="success" icon="edit">主要按钮</el-button>
    <el-button type="warning" icon="search">主要按钮</el-button>
    <hr>
    <span class="el-icon-delete"></span>
    <span class="el-icon-loading"></span>
    <hr>
    <el-row>
      <el-col :span="12" class="my-grid"></el-col>
      <el-col :span="12" class="my-grid">
        <my-date></my-date>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Date from './components/Date.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'my-date': Date 
  }
}
</script>

<style lang="scss" scope>
$color: red;
@mixin height($height:20px) {
  height: $height * 5
}
.my-grid {
  border: 1px dotted $color;
  @include height;
}
</style>
