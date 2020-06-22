<template>
  <div class="article">
    <el-row class="normal" :gutter="15" v-if="!mini">
      <el-col :span="8">
        <img
          src="//cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
          alt
          class="normal-img"
        />
      </el-col>
      <el-col :span="16">
        <h3 class="normal-title" @click="goDetail">外蒙古和中国的关系怎么样</h3>
        <p
          class="normal-intro"
        >很多蒙古国人对中国人的仇恨根深蒂固。中国人修建长城是为了防止蒙古国人、人修建长城是为了防止蒙古国人、人修建长城是为了防止蒙古国人、人修建长城是为了防止蒙古国人、土耳其人和其他游牧民族。蒙古国人和中国人打了几千年仗。几千年来，汉族一直是蒙古国的敌人。尽管蒙古国人和北方人看起来很相似，但文化却截然不同。人们不喜欢差异。蒙古国人是游</p>
        <div class="normal-about">
          <el-tag type="danger" size="small" class="lable">标签五</el-tag>
          <span class="time">2018.12.13 15:00</span>
          </div>
      </el-col>
    </el-row>

    <el-row class="mini" :gutter="10" v-if="mini">
      <el-col :span="10">
        <img
          src="//cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
          alt
          class="mini-img"
        />
      </el-col>
      <el-col :span="14">
        <div class="mini-title" @click="goDetail">黄埔军校第一期学生名单-黄埔军校著名人物</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    mini: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: null
    }
  },
  methods:{
      goDetail(){
        this.$router.push({path:'/web/articleDetail'})
      }
    }
};
</script>

<style lang="scss" scoped>
.article {
  max-height: 215px;
  overflow: hidden;
  .normal {
    padding: 20px 0;
    border-bottom: 1px dashed #ccc;
    &-img {
      display: block;
      width: 100%;
      height: 100%;
    }
    &-title {
      cursor: pointer;
      color: black;
      margin: 0;
      font-size: 20px;
    }
    &-intro {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      line-height: 26px;
      -webkit-box-orient: vertical;
      margin: 10px 0;
      text-align: justify;
    }
    &-about {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #999;
    }
  }
  .normal:last-child {
    border: none;
  }
  .mini {
    padding: 15px 0;
    &-img {
      width: 100%;
    }
    &-title{
      cursor: pointer;
    }
  }
}
</style>
