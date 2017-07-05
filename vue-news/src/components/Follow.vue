<template>
  <div class="content">
    <div class="newsList">
      <ul>
        <li v-for="(item, index) in arrList">
          <a href="conText.html">
            <h2>{{index+1}}.{{item.title}}</h2>
            <p>{{item.detail}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        arrList: []
      }
    },
    mounted() {
      this.fetchData()
    },
    methods: {
      fetchData() { // 逻辑性代码不建议复用
        this.$http.get('/src/data/follow.data').then(function(res) {
          this.arrList = res.data
        }.bind(this)).catch(function(err) {
          console.log('Follow', err)
        })
      }
    }
  }
</script>
<style scoped>
  .newsList {
    margin-top: 40px;
  }
</style>