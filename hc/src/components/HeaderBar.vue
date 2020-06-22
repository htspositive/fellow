<template>
  <div class="header">
    <el-row :gutter="20" type='flex' align='middle'>
      <el-col :span="8">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">活动管理</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="8">
        <el-input v-model="input" placeholder="请输入内容" size='small'></el-input>
      </el-col>
      <el-col :span="8" class="user">
        <div @click="$router.push({path:'/userInfo',query:{type:'update'}})">
        <el-avatar class="user-header" icon="el-icon-user-solid" size='small' ></el-avatar>

        </div>
        <div>
            <router-link to='/login'>登录</router-link>
            <el-divider direction="vertical"></el-divider>
            <router-link to='/reg'>注册</router-link>
        </div>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {

  data() {
    return {
      input: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.header{
    height: 100%;
    .el-row{
        height: 100%;
    }
}
.user{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &-header{
        margin-right: 20px;
    }
    a{
      color: unset;
      text-decoration: unset;
    }
}

</style>