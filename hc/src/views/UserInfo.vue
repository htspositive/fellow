<template>
  <div class="reg">
    <h3 class="title">信息修改</h3>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="手机号">
        <el-input v-model="form.no" :disabled="!(type == 'password')"></el-input>
      </el-form-item>
      <el-form-item label="身份证号" v-if="!(type == 'password')">
        <el-input v-model="form.no" disabled></el-input>
      </el-form-item>
      <el-form-item label="确认身份证号" v-if="(type == 'password')">
        <el-input v-model="form.no"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.no"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form.no"></el-input>
      </el-form-item>

      <el-form-item label="头像" v-if="!(type == 'password')">
       
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <div class="option">
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.query);
    this.type = this.$route.query.type;
  },

  data() {
    return {
      type: "",
      form: {
        imageUrl: "",
        no: "",
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleAvatarSuccess(res, file) {
      this.form.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style lang="scss" scoped>
.reg {
  padding: 20px;
  width: 400px;
  margin: 50px auto;
  .title {
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
    color: #000;
  }

  .avatar-uploader {
    border: 1px dashed #d9d9d9;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .el-upload {
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100%;
    height: 100%;
    // line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
  .option {
    text-align: center;
    .el-button {
      display: block;
      width: 200px;
      margin: 20px auto;
    }
  }
}
</style>