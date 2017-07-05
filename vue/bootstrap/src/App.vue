<template>
  <div id="app">
    {{msg}}
    <hr>
    <button class="btn btn-default">普通按钮</button>
    <button class="btn btn-danger">红色按钮</button>
    <div class="container">
      <div class="row">
        <div class="col-sm-8">占八列</div>
        <div class="col-sm-4">占四列</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
.row div {
  border: 1px solid #399;
}
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
