<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <NavView v-if="headerShow"></NavView>
    <transition name="slide-down">
      <!-- keep-alive在切换组件是不会销毁组件，而是会把组件保存在内存中以备随时使用 -->
      <keep-alive>
        <router-view></router-view>      
      </keep-alive>
    </transition>
    <FooterView v-show="footerShow"></FooterView>
  </div>
</template>

<script>
import NavView from './components/Nav.vue'
import HomeView from './components/Home.vue'
import FooterView from './components/Footer.vue'

import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters(['headerShow', 'loading', 'footerShow'])
  },
  mounted() {
    const path = this.$route.path.substring(1)
    this.headerChange(path)
    this.footerChange(path)
  },
  watch: {
    $route(to, from) {
      console.log(`to=>${to.path}`)
      console.log(`from=>${from.path}`)
      const path = this.$route.path.substring(1)
      this.headerChange(path)
      this.footerChange(path)
    }
  },
  methods: {
    headerChange(path) {
      if (path == 'userInfo' || path == 'userReg' || path == 'userLogin' || /^article/.test(path)) {
        this.$store.dispatch('hideHeader')
      } else {
        this.$store.dispatch('showHeader')
      }
    },
    footerChange(path) {
      if(/^article/.test(path)) {
        this.$store.dispatch('hideFooter')
      } else {
        this.$store.dispatch('showFooter')
      }
    }
  },
  components: {
    NavView,
    HomeView,
    FooterView
  }
}
</script>

<style>
@import './assets/css/index.css';
.slide-down-enter-active,
.slide-down-leave-active {
  transition: .4s all ease;
  opacity: .2;
  transform: translate3d(0, 6em, 0);
}
.slide-down-enter,
.slide-down-leave {
  opacity: 1;
  transform: translate3d(0, 6em, 0);
}
#app {
  text-align: center;
}
h2 {
  font-weight: 400;
}
</style>
