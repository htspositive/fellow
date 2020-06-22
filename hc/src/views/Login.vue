<template>
  <div class="login">
    <div class="con">
      <h3 class="title">登录</h3>
      <el-form ref="form" :model="form" label-width="90px">
        <el-form-item label="手机">
          <el-input v-model="form.no"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item label="管理员登录">
          <el-switch v-model="form.loginType"></el-switch>
        </el-form-item>

        <div class="submit">
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <router-link to='/userInfo?type=password'>忘记密码</router-link>
          <router-link to='/reg'>去注册</router-link>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        no: "",
        password: "",
        loginType: false
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      this.$router.push({
          path:'/web'
      })
    }
  }
};
</script>

<style lang='scss' scoped>
.login {
  height: 100vh;
  background: url("../assets/mainBG.jpg") no-repeat center center;
  background-size: 100% 100%;
  overflow: hidden;
  .con {
    margin: 150px auto 0;
    border-radius: 10px;
    padding: 20px;
    width: 400px;
    background: white;
    .title {
      font-size: 20px;
      margin-bottom: 10px;
      text-align: center;
      color: #000;
    }
    .submit {
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      a{
          color: unset;
      }
    }
  }
}
</style>