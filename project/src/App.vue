<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Home">首页</router-link> |
      <router-link to="/About">相关页</router-link>|
      <router-link to="/Detail">详情页</router-link>|
       <router-link to="/Test1">加法页</router-link>
    </div>
    <transition name="fade">
      <router-view/>
      </transition>
    
  </div>
</template>

</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 1s ease;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  transform: translate(0)
}
.fade-leave-active{
  transition: transform 1s ease
}
.fade-leave-to{
  transform: translate(100%)
}
</style>
