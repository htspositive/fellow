<template>
  <el-row :gutter="40">
    <el-col :span="16">
      <div class="city">
        <h1 class="city-title">北京</h1>

        <ListCon title="简介">
          <p class="city-intro">
            北京是我们伟大祖国的首都，国务院公布的首批国家历史文化名城，也是世界著名的古都。北京以其悠远的历史文化传统和丰富的文物古迹遗存闻名中外，在被推出的中国七大古都中，名列前茅。
            北京历史悠久，它作为城市的历史可以追溯到3000年前。秦汉以来，北京地区一直是中国北方的重镇，名称先后称为蓟城、燕都、燕京、大都、北平、顺天府等等。 先秦至秦汉 在春秋战国时期（前770年—前221年）蓟国就在北京地区建立城市，后燕国打败蓟国，后迁都蓟，称为燕都或燕京。 秦代为蓟县，为广阳郡守驻地。 汉高帝五年，被划为燕国辖地。元凤元年复为广阳郡蓟县，属幽州。 本始元年更为广阳国首府。 东汉光武改制时，置幽州刺史部于蓟县。永元八年复为广阳郡驻所。 两晋至隋唐五代 直至西晋时，朝廷改广阳郡为燕国，而幽州迁治范阳。十六国后赵时，幽州驻所迁回蓟县，燕国改设为燕郡，历经前燕、前秦、前燕、后燕和北魏的统治而不变。 直至隋开皇三年废除燕郡。但很快在大业三年，隋朝改幽州为涿郡。 唐初武德年间，涿郡复称为幽州。贞观元年，幽州划归河北道管辖。后北京成为范阳节度史的驻地。安史之乱期间，安禄山曾经在这里称帝，建国号为“大燕”。唐朝平乱后，复置幽州，属卢龙节度史节制。 五代初期，军阀刘仁恭在这里建立割据政权，自称燕王，后被后唐消灭。
            辽朝 辽朝于会同元年起在北京地区建立了南京，改幽州为南京析津府，开泰元年改号燕京。 金朝 贞元元年，金朝皇帝海陵王完颜亮正式建都于北京，称为中都。此后元朝、明朝和清朝的都城均建立在北京。 元朝 成吉思汗于1216年攻下北京，遂设置燕京路大兴府。元世祖至元元年改为中都路大兴府。至元四年，开始在金中都东北郊修建元大都。 至元九年，中都大兴府正式改名为大都路，蒙古文为Khanbalik，汉字音译为汗八里、甘巴力克。 明朝 明朝初年，以应天府为京师，大都路于洪武元年八月改称为北平府，同年十月划归山东行省。洪武二年三月，改为北平承宣布政使司驻地。燕王朱棣（明成祖）发动靖难战争、夺得皇位后，于永乐元年升为北京，称为“行在”。永乐十九年正月，明朝政府正式迁都北京，以顺天府北京为京师，南京作为留都。 清朝 清朝入关后随即占领北京，亦称京师顺天府，属直隶省。 近代 1911年辛亥革命后，中华民国定都南京，1912年迁都北京，直至1927年北洋政府垮台。而此时北京的地方体制仍依清制，仍称顺天府。直至民国三年，改顺天府为京兆地方，直辖于北洋政府。 北伐战争后，中国的首都迁到南京，北京被改名为北平特别市，同时撤销京兆地方。1930年6月，北平被降为河北省辖市，同年12月复升为院辖市。1937年七·七事变后，北平被日本占领，并成立傀儡政权“中华民国临时政府”，将北平改名为北京。1945年8月21日，第十一战区孙连仲部收复北京，并重新更名北平。 1949年1月31日，中国共产党军队得到北平控制权。同年9月27日中国人民政治协商会议第一届全体会议通过《关于中华人民共和国国都、纪年、国歌、国旗的决议》，北平重新更名为北京。1949年10月1日，中华人民共和国在北京天安门广场宣告成立。
          </p>
        </ListCon>

        <ListCon title="历史名人">
          <div class="city-people">
            <el-link type="primary" @click="goPeopleDetail()">人物</el-link>
            <el-link type="primary">主要链接</el-link>
          </div>
        </ListCon>
        <ListCon title="历史事件">
          <div class="city-event">
            <el-link type="primary" @click="goEventDetail()">事件</el-link>
            <el-link type="primary">主要链接</el-link>
          </div>
        </ListCon>
      </div>
    </el-col>
    <el-col :span="8">
      <CommentWrite></CommentWrite>
      <CommentBar publisher="用户一" content="hhhhhahh背景不不不不不不不不不不不bububububububuub不不不不不不不ahahhah" date="2019-12-13 15:00"></CommentBar>
      <CommentBar publisher="用户一" content="hhhhhahh背景不不不不不不不不不不不bububububububuub不不不不不不不ahahhah" date="2019-12-13 15:00"></CommentBar>
      <CommentBar publisher="用户一" content="hhhhhahh背景不不不不不不不不不不不bububububububuub不不不不不不不ahahhah" date="2019-12-13 15:00"></CommentBar>
      <CommentBar publisher="用户一" content="hhhhhahh背景不不不不不不不不不不不bububububububuub不不不不不不不ahahhah" date="2019-12-13 15:00"></CommentBar>
    </el-col>
  </el-row>
</template>

<script>
import ListCon from "../components/ListCon";
import CommentWrite from '../components/CommentWrite'
import CommentBar from '../components/CommentBar'
export default {
  components: {
    ListCon,
    CommentWrite,
    CommentBar
  },
  data(){
    return{
      
    }
  },
  methods: {
    goPeopleDetail() {
      this.$router.push({
        path: "/web/peopleDetail"
      });
    },
    goEventDetail() {
      this.$router.push({
        path: "/web/eventDetail"
      });
    }
  }
};
</script>

<style lang='scss' scoped>

.city {
  &-title {
    color: black;
    margin-bottom: 15px;
    text-align: center;
  }
  &-intro {
    padding: 10px;
    margin-bottom: 20px;
    font-size: 15px;
    line-height: 24px;
    text-align: justify;
  }
  &-people {
    padding: 10px;
    margin-bottom: 20px;
  }
  &-event {
    padding: 10px;
    margin-bottom: 20px;
  }
  .el-link {
    margin-right: 20px;
  }
}
</style>