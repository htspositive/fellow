<template>
    <div id="Aheader">
      <div id="header-menu">
        <ul>
          <li>志愿首页</li>
          <li>志愿活动</li>
          <li>新闻头条</li>
          <li>志愿心声</li>
          <li>个人信息</li>
        </ul>
      </div>
      <div id="headerimg">
        <img src="../../public/images/headerimages.jpg" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
#Aheader{
  width:100%;
}
#header-menu{
  height: 60px;
  background-color: #da1d1d;
  overflow: hidden;
  ul{
    padding-left:50px;
    width: 1200px;
    margin: 0 auto;
  }
  li{
    display: block;
    float: left;
    font-family: "微软雅黑";
    width: 100px;
    height: 60px;
    line-height: 60px;
    padding: 0 50px;
    text-align: center;
    color: #ffffff;
    list-style-type: none;
    font-size: 18px;
  }
}
</style>