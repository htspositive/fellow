<template>
  <el-row>
    <el-col :span="4">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1" @click="$router.push({path:'/'})">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>城市</span>
          </template>
          <el-menu-item class="submenu" @click="goCityDetail()">北京</el-menu-item>
        </el-submenu>

        <el-menu-item index="3" @click="$router.push({path:'/web/articlePage'})">
          <i class="el-icon-document"></i>
          <span slot="title">历史文化</span>
        </el-menu-item>

        <div class="admin-menu">
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>网站管理</span>
            </template>
            <el-menu-item class="submenu" @click="$router.push({path:'/web/cityManage'})">城市管理</el-menu-item>
            <el-menu-item class="submenu" @click="$router.push({path:'/web/articleManage'})">文章管理</el-menu-item>
            <el-menu-item class="submenu" @click="$router.push({path:'/web/peopleManage'})">历史人物管理</el-menu-item>
            <el-menu-item class="submenu" @click="$router.push({path:'/web/eventManage'})">历史事件管理</el-menu-item>
          </el-submenu>
        </div>
      </el-menu>
    </el-col>

    <el-col :span="20">
      <el-container>
        <el-header>
          <HeaderBar></HeaderBar>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>
          <FooterBar></FooterBar>
        </el-footer>
      </el-container>
    </el-col>
  </el-row>
</template>

<script>
import HeaderBar from "../components/HeaderBar.vue";
import FooterBar from "../components/FooterBar.vue";
export default {
  components: {
    HeaderBar,
    FooterBar
  },

  methods: {
    goCityDetail() {
      this.$router.push({
        path: "/web/cityDetail"
      });
    },

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.left-menu {
  text-decoration: none;
}
.left-menu:visited {
  color: unset;
}
.el-menu {
  min-height: 100%;
}
.el-header {
  border-bottom: 1px solid #e6e6e6;
}
.submenu {
  padding-left: 60px !important;
}
</style>