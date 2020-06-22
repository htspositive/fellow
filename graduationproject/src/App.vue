<template>
  <div id="app">
    <common-header></common-header>
    <div class="container">
     <router-view></router-view>
    </div>
    <common-footer></common-footer>
  </div>
</template>
<script>
import CommonHeader from './components/CommonHeader.vue'
import CommonFooter from './components/CommonFooter.vue';

export default {
  components:{
    CommonHeader,
    CommonFooter
  }
}
</script>
<style lang="scss">
*{
    margin: 0;
    padding: 0;
    width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
}
// #container{
//     width: 1200px;
//     margin: 20px auto;
//     overflow: hidden;
// }
</style>
