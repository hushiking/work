<template>
  <div class="content">
    <BannerView></BannerView>
    <div class="newsList">
      <ul>
        <li v-for="(item, index) in arrList">
          <!-- <a href="conText.html">
            <h2>{{index+1}}.{{item.title}}</h2>
            <p>{{item.detail}}</p>
          </a> -->
          <router-link :to="'/article/'+item.id">
            <h2>{{index+1}}.{{item.title}}</h2>
            <p>{{item.detail}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BannerView from './Banner.vue'
  export default {
    data() {
      return {
        arrList: []
      }
    },
    components: {
      BannerView
    },
    mounted() {
      this.fetchData()  
    },
    methods: {
      fetchData() { // 逻辑性代码不建议复用
        this.$http.get('/src/data/index.data').then(function(res) {
          this.arrList = res.data
        }.bind(this)).catch(function(err) {
          console.log('Home', err)
        })
      }
    }
  }
</script>