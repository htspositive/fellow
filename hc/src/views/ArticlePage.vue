<template>
  
    <el-row :gutter="40">
      <el-col :span="16">
        <ListCon title="最新文章">
          <Article></Article>
          <Article></Article>
          <Article></Article>
          <Article></Article>
        </ListCon>
      </el-col>
      <el-col :span="8">
          <ListCon title="热门文章">
          <Article :mini=true></Article>
          <Article :mini=true></Article>
          <Article :mini=true></Article> 
        </ListCon>
      </el-col>
    </el-row>
 
</template>

<script>
import ListCon from "../components/ListCon";
import Article from "../components/Article";
export default {
  components: {
    Article,
    ListCon
  }
};
</script>

<style>
</style>