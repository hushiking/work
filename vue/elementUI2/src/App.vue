<template>
  <div id="app">
    <el-button type="danger" @click="getMore">极度危险</el-button>
    <br>
    <br>
    {{github}}
    <hr>
    <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
    <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
    <hr>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
    <hr>
    <el-rate
      v-model="value2"
      :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
    </el-rate>
    <hr>
    <el-pagination
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
    <hr>
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <h3>用户管理</h3>
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in 4">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <h3>配置管理</h3>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="third">
        <h3>角色管理</h3>
        <el-switch
          v-model="value3"
          on-text=""
          off-text="">
        </el-switch>
        <el-switch
          v-model="value4"
          on-color="#13ce66"
          off-color="#ff4949">
        </el-switch>
        </el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">
        <h3>定时任务补偿</h3>
        <el-badge :value="200" :max="99" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="100" :max="10" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
      </el-tab-pane>
    </el-tabs>
    <hr>
    <myButton @click.native="get"></myButton>
    <hr>
    <h3>QQ:{{myMsg}}</h3>
  </div>
</template>
 
<script>
import myButton from './components/Button.vue'
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      radio: '2',
      value1: '',
      value2: null,
      value3: false,
      value4: true,
      activeName2: 'first',
      myMsg: '默认数据',
      github: 'Github数据',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  // 利用生命周期函数上来就渲染数据
  mounted() {
    this.getMore()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    get() {
      axios.get('a.txt')
      .then(function(res) {
        this.myMsg = res.data
      }.bind(this)).catch(function(err) {
        console.log(err)
      })
    },
    getMore() {
      axios.get('https://api.github.com/users/itstrive')
      .then(res => {
        this.github = res.data
      }).catch(err => {
        console.log(err)
      })
    }
  },
  components: {
    myButton
  }
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.item {
  margin-top: 10px;
  margin-right: 40px;
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
