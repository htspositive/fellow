<template>
  <el-row :gutter="10" class="comment-write">
    <el-col :span="18">
      <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="comment"></el-input>
    </el-col>
    <el-col :span="6">
      <el-button type="success">发表</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
    data(){
        return{
            comment:""
        }
    }
};
</script>

<style>
</style>