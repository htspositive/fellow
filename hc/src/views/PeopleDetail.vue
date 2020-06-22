<template>
  <div class="people">
    <div class="people-card">
      <el-row :gutter="40">
        <el-col :span="2">
          <el-avatar
            shape="square"
            :size="100  "
            fit="fill"
            src="//fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          ></el-avatar>
        </el-col>
        <el-col :span="22">
          <h1 class="name">曹操</h1>
          <p>三国时期魏国政权奠基者</p>
        </el-col>
      </el-row>
    </div>
    <ListCon title="人物简介">
      <p class="people-intro">
        魏武帝曹操（155年－220年3月15日），本名吉利，字孟德，小名阿瞒，谥号武皇帝（魏武帝），沛国谯县人 [1-2] 。东汉末年杰出的政治家、军事家、文学家、书法家 [3] ，曹魏政权的奠基人。
        东汉末年，天下大乱，曹操以汉朝天子刘协的名义征讨四方，对内消灭二袁、吕布、刘表、马超、韩遂等割据势力，对外降服南匈奴、乌桓、鲜卑等，统一了中国北方，并实行一系列政策恢复经济生产和社会秩序，扩大屯田、兴修水利、奖励农桑、重视手工业、安置流亡人口、实行“租调制”，从而使中原社会渐趋稳定、经济出现转机。
        建安十八年（213年），曹操获封魏公，建立魏公国，定都河北邺城，而后进爵魏王。去世后，其子曹丕称帝，追尊曹操为武皇帝，庙号太祖。
        曹操喜欢用诗歌、散文来抒发自己政治抱负，反映民生疾苦，是魏晋文学的代表人物，鲁迅赞之为“改造文章的祖师”。同时曹操擅长书法，唐朝张怀瓘《书断》将曹操的章草评为“妙品”。
      </p>
    </ListCon>

    <ListCon title="相关文章">
      <Article></Article>
    </ListCon>
  </div>
</template>

<script>
import ListCon from "../components/ListCon";
import Article from "../components/Article";
export default {
  components: {
    ListCon,
    Article
  }
};
</script>

<style lang="scss" scoped>
.people {
  &-card {
    margin-bottom: 25px;
    .name {
      color: black;
      margin: 40px 0 10px;
    }
  }
  &-intro {
    padding: 10px;
    margin-bottom: 20px;
    font-size: 15px;
    line-height: 24px;
    text-align: justify;
  }
}
</style>