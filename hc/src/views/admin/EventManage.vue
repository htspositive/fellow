<template>
  <div>
    <el-button type="primary" @click="addEvent">新增事件</el-button>
    <br />
    <br />
    <el-table :data="tableData" style="width: 60%">
      <el-table-column prop="name" label="名称" width="200"></el-table-column>
      <el-table-column prop="date" label="创建时间"></el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="openDrewer(scope.row)" type="text" size="small">编辑</el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >移除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-drawer title="编辑" :visible.sync="drawer" direction="rtl" :before-close="handleClose">
      <el-form :model="editData">
        <el-form-item label="名称" label-width="80px">
          <el-input v-model="editData.name" autocomplete="off" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="背景" label-width="80px">
          <el-input v-model="editData.background" type="textarea" :rows="6" placeholder="请输入背景（500字以内）"></el-input>
        </el-form-item>
        <el-form-item label="过程" label-width="80px">
          <el-input v-model="editData.process" type="textarea" :rows="8" placeholder="请输入内容（1000字以内）"></el-input>
        </el-form-item>
        <el-form-item label="意义" label-width="80px">
          <el-input v-model="editData.sign" type="textarea" :rows="4" placeholder="请输入内容（200字以内）"></el-input>
        </el-form-item>
      </el-form>
      <div class="drawer-footer">
        <el-button @click="cancelForm">取 消</el-button>
        <el-button type="primary" @click="submitFrom">确 定</el-button>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      editData: {},
      tableData: [
        {
          date: "2016-05-02",
          name: "事件1",
          background:
            "东汉末年，轰轰烈烈的黄巾起义虽然被镇压下去了，但它却沉重地打击了汉朝地主阶级的统治，使早已腐朽不堪的东汉政权分崩离析，名存实亡。在镇压黄巾起义的过程中，各地州郡大吏独揽军政大权，地主豪强也纷纷组织“部曲”（私人武装），占据地盘， 形成大大小小的割据势力，转入争权夺利、互相兼并的长期战争，造成中原地区“白骨露于野、千里无鸡鸣”的凄惨景象。当时的割据势力：主要有河北的袁绍、河内的张杨、兖豫的曹操、徐州的吕布、扬州的袁术、江东的孙策、荆州的刘表、幽州的公孙瓒、南阳的张绣等。形成群雄并起的局面，在这些割据势力的连年征战中，袁绍、曹操两大集团逐步壮大起来。 [1]建安元年（196年），曹操迎汉献帝，迁都许县，自始挟天子以令诸侯（“奉天子而征四方”），威势大增。他先后击败吕布、袁术，占据了兖州、徐州以及部分豫州、司隶。建安四年（199年），袁绍最终战胜公孙瓒，据幽州、冀州、青州、并州，尽有河北之地，意欲南向以争天下。这样，华北最重要的两个政治军事集团，决战势所难免。起初形势袁强曹弱。袁绍已无后顾之忧，地广人众，可动员的兵力在十万以上。 [2] 特别是袁绍的统治核心——冀州，在汉末三国时期，“冀州户口最多，田多垦辟，又有桑枣之饶” [3] ，“冀州民人殷盛，兵粮优足” [4] 。曹操则是处于四战之地，除了北方的袁绍，关中诸将尚在观望，南边刘表、张绣不肯降服，东南孙策蠢蠢欲动，暂时依附的刘备也是貌",
          process:
            "前期建安五年（200年）正月，车骑将军董承、偏将军王服、越骑校尉种辑接受了汉献帝的衣带诏，欲诛杀曹操，但事泄，被曹操夷灭三族。 [11] 袁绍终于获得了名正言顺的开战理由，于是，袁绍奉衣带诏 [12] 讨伐曹操，派陈琳书写檄文并公开发布，檄文中把曹操骂得无法忍受。袁、曹两家公开宣战。当曹操正部署对袁绍作战时，参与了衣带诏之谋的刘备起兵反曹。刘备占领下邳，屯据沛县（今江苏沛县）。 [12] 刘备军增至数万人，并与袁绍联系，打算合力攻曹。曹操为保持许都与青、兖二州的联系，避免两面作战，于次年二月亲自率精兵东击刘备，迅速占领沛县，转而进攻下邳，迫降关羽。刘备全军溃败，只身逃往河北投奔袁绍。当曹、刘作战正酣之时，袁绍谋士田丰建议袁绍“举军而袭其后”，但袁绍以幼子有病为辞拒绝采纳，致使曹操从容击败刘备回军官渡 [13] 。曹操派遣臧霸、孙观、孙康等人牵制青州刺史袁谭。二月，袁绍进军黎阳，企图渡河寻求与曹军主力决战。他首先派颜良进攻白马的东郡太守刘延，企图夺取黄河南岸要点，以保障主力渡河。四月，曹操为争取主动，求得初战的胜利，亲自率兵北上解救白马之围。此时谋士荀攸认为袁绍兵多，建议声东击西，分散其兵力，先引兵至延津，伪装渡河攻袁绍后方，使袁绍分兵向西，然后遣轻骑迅速袭击进攻白马的袁军，攻其不备，定可击败颜良。曹操采纳了这一建议，袁绍果然分兵延津。曹操乃乘机率轻骑，派张辽、关羽为前锋，急趋白马。关羽迅速迫近颜良军，冲进万军之中杀死颜良并斩首而还，经过一番交战，关羽望见了颜良麾盖（大将所乘戎车，设幢麾、张盖），在张辽军队的掩护下，关羽策马冲到颜良身边，在万众之中刺死颜良，又拔出腰间佩刀斩其首级而归。从始自终，袁军诸将都不能挡住关羽。曹操挥动着自己手中所持“麾” [14] [15] ，徐晃等人的后续部队奉令冲杀 [16] 。袁军溃散，袁军溃败。 [17-19]曹操解了白马之围后，迁徙白马的百姓沿黄河向西撤退 [20] 。袁绍率军渡河追击，军至延津南，派大将文丑与刘备继续率兵追击曹军，曹操当时的骑兵不足六百，驻于南阪（在白马南）下，而袁军达五六千骑，尚有步兵在后跟进。曹操令士卒解鞍放马，并故意将辎重丢弃道旁。袁军果然中计，纷纷争抢财物。曹操突然挥动着自己手中所持“麾” [14] [15] ，下令发起攻击。徐晃等人翻身上马 [16] ，终于击败袁军，杀了文丑（文丑为乱军所杀，并不是关羽斩杀），顺利退回官渡。颜良、文丑都是河北名将，却被一战而斩，袁绍军队的锐气被挫伤 [21] 。彧，商议要退守许都，荀彧回信说：“袁绍将主力集结于官渡，想要与公决胜负。公以至弱当至强，若不能制，必为所乘，这是决定天下大势的关键所在。当年楚、汉在荥阳、成皋之间，刘邦、项羽没有人肯先退一步，以为先退则势屈。现在公以一当十，扼守要冲而使袁绍不能前进，已经半年了。情势已然明朗，绝无回旋的余地，不久就会发生重大的转变。这正是出奇制胜的时机，千万不可坐失。”于是曹操决心继续坚守待机，同时加强防守，命负责后勤补给的任峻采取十路纵队为一部，缩短运输队的前后距离，并用复阵（两列阵），加强护卫，防止袁军袭击；另一方面积极寻求和捕捉战机，击败袁军，不久派曹仁、史涣截击、烧毁袁军数千辆粮车，增加了袁军的补给困难 [25] 。期间，汝南郡黄巾军刘辟叛变，袁绍使刘备前往相助，又派韩荀钞断曹军西道，皆被曹仁击破 [26] 。江东孙策意欲偷袭许都，却被刺客暗杀 [27] 。奇袭十月，袁绍又派车运粮，并令淳于琼率兵万人护送，夜宿于袁军大营以北约20公里的故市（河南延津县内）、乌巢（今河南延津东南）。恰在这时，袁绍谋士许攸投奔曹操，建议曹操轻兵奇袭乌巢，烧其辎重。曹操立即付诸实行，留曹洪、荀攸守营垒，亲自率领步骑五千，冒用袁军旗号，人衔枚马缚口，各带柴草一束，利用暗夜走小路偷袭乌巢。到达后立即围攻放火。袁绍获知曹操袭击乌巢后，一方面派轻骑救援，另一方面命令张郃、高览率重兵猛攻曹军大营。可曹营坚固，攻打不下。当曹军急攻乌巢淳于琼营时，袁绍增援的部队已经迫近。曹操励士死战，大破袁军，曹军骁将乐进斩杀淳于琼等，并将其粮草全数烧毁。张郃、高览闻得乌巢被破，于是投降曹操，导致了军心动摇，内部分裂，大军崩溃 [28] 。袁绍仓惶带八百骑兵退回河北，曹军先后歼灭和坑杀袁军七万余人，也有说是八万人 [29] 。官渡之战增强了曹操",
          sign:
            " 官渡之战是袁曹双方力量转变，使当时中国北部由分裂走向统一的一次关键性战役，对于三国历史的发展有着极其重要的影响。此战曹军的胜利不是偶然的，袁曹间的兼并战争，虽属于封建割据势力之间的争斗，但它实现了地区统一，客观上符合人民的愿望。 [30]官渡之战是汉末乃至中国史上有名的以少胜多的战役，也是曹操与袁绍争夺北方霸权的转折点。官渡一"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          background:
            "东汉末年，轰轰烈烈的黄巾起义虽然被镇压下去了，但它却沉重地打击了汉朝地主阶级的统治，使早已腐朽不堪的东汉政权分崩离析，名存实亡。在镇压黄巾起义的过程中，各地州郡大吏独揽军政大权，地主豪强也纷纷组织“部曲”（私人武装），占据地盘， 形成大大小小的割据势力，转入争权夺利、互相兼并的长期战争，造成中原地区“白骨露于野、千里无鸡鸣”的凄惨景象。当时的割据势力：主要有河北的袁绍、河内的张杨、兖豫的曹操、徐州的吕布、扬州的袁术、江东的孙策、荆州的刘表、幽州的公孙瓒、南阳的张绣等。形成群雄并起的局面，在这些割据势力的连年征战中，袁绍、曹操两大集团逐步壮大起来。 [1]建安元年（196年），曹操迎汉献帝，迁都许县，自始挟天子以令诸侯（“奉天子而征四方”），威势大增。他先后击败吕布、袁术，占据了兖州、徐州以及部分豫州、司隶。建安四年（199年），袁绍最终战胜公孙瓒，据幽州、冀州、青州、并州，尽有河北之地，意欲南向以争天下。这样，华北最重要的两个政治军事集团，决战势所难免。起初形势袁强曹弱。袁绍已无后顾之忧，地广人众，可动员的兵力在十万以上。 [2] 特别是袁绍的统治核心——冀州，在汉末三国时期，“冀州户口最多，田多垦辟，又有桑枣之饶” [3] ，“冀州民人殷盛，兵粮优足” [4] 。曹操则是处于四战之地，除了北方的袁绍，关中诸将尚在观望，南边刘表、张绣不肯降服，东南孙策蠢蠢欲动，暂时依附的刘备也是貌",
          process:
            "前期建安五年（200年）正月，车骑将军董承、偏将军王服、越骑校尉种辑接受了汉献帝的衣带诏，欲诛杀曹操，但事泄，被曹操夷灭三族。 [11] 袁绍终于获得了名正言顺的开战理由，于是，袁绍奉衣带诏 [12] 讨伐曹操，派陈琳书写檄文并公开发布，檄文中把曹操骂得无法忍受。袁、曹两家公开宣战。当曹操正部署对袁绍作战时，参与了衣带诏之谋的刘备起兵反曹。刘备占领下邳，屯据沛县（今江苏沛县）。 [12] 刘备军增至数万人，并与袁绍联系，打算合力攻曹。曹操为保持许都与青、兖二州的联系，避免两面作战，于次年二月亲自率精兵东击刘备，迅速占领沛县，转而进攻下邳，迫降关羽。刘备全军溃败，只身逃往河北投奔袁绍。当曹、刘作战正酣之时，袁绍谋士田丰建议袁绍“举军而袭其后”，但袁绍以幼子有病为辞拒绝采纳，致使曹操从容击败刘备回军官渡 [13] 。曹操派遣臧霸、孙观、孙康等人牵制青州刺史袁谭。二月，袁绍进军黎阳，企图渡河寻求与曹军主力决战。他首先派颜良进攻白马的东郡太守刘延，企图夺取黄河南岸要点，以保障主力渡河。四月，曹操为争取主动，求得初战的胜利，亲自率兵北上解救白马之围。此时谋士荀攸认为袁绍兵多，建议声东击西，分散其兵力，先引兵至延津，伪装渡河攻袁绍后方，使袁绍分兵向西，然后遣轻骑迅速袭击进攻白马的袁军，攻其不备，定可击败颜良。曹操采纳了这一建议，袁绍果然分兵延津。曹操乃乘机率轻骑，派张辽、关羽为前锋，急趋白马。关羽迅速迫近颜良军，冲进万军之中杀死颜良并斩首而还，经过一番交战，关羽望见了颜良麾盖（大将所乘戎车，设幢麾、张盖），在张辽军队的掩护下，关羽策马冲到颜良身边，在万众之中刺死颜良，又拔出腰间佩刀斩其首级而归。从始自终，袁军诸将都不能挡住关羽。曹操挥动着自己手中所持“麾” [14] [15] ，徐晃等人的后续部队奉令冲杀 [16] 。袁军溃散，袁军溃败。 [17-19]曹操解了白马之围后，迁徙白马的百姓沿黄河向西撤退 [20] 。袁绍率军渡河追击，军至延津南，派大将文丑与刘备继续率兵追击曹军，曹操当时的骑兵不足六百，驻于南阪（在白马南）下，而袁军达五六千骑，尚有步兵在后跟进。曹操令士卒解鞍放马，并故意将辎重丢弃道旁。袁军果然中计，纷纷争抢财物。曹操突然挥动着自己手中所持“麾” [14] [15] ，下令发起攻击。徐晃等人翻身上马 [16] ，终于击败袁军，杀了文丑（文丑为乱军所杀，并不是关羽斩杀），顺利退回官渡。颜良、文丑都是河北名将，却被一战而斩，袁绍军队的锐气被挫伤 [21] 。彧，商议要退守许都，荀彧回信说：“袁绍将主力集结于官渡，想要与公决胜负。公以至弱当至强，若不能制，必为所乘，这是决定天下大势的关键所在。当年楚、汉在荥阳、成皋之间，刘邦、项羽没有人肯先退一步，以为先退则势屈。现在公以一当十，扼守要冲而使袁绍不能前进，已经半年了。情势已然明朗，绝无回旋的余地，不久就会发生重大的转变。这正是出奇制胜的时机，千万不可坐失。”于是曹操决心继续坚守待机，同时加强防守，命负责后勤补给的任峻采取十路纵队为一部，缩短运输队的前后距离，并用复阵（两列阵），加强护卫，防止袁军袭击；另一方面积极寻求和捕捉战机，击败袁军，不久派曹仁、史涣截击、烧毁袁军数千辆粮车，增加了袁军的补给困难 [25] 。期间，汝南郡黄巾军刘辟叛变，袁绍使刘备前往相助，又派韩荀钞断曹军西道，皆被曹仁击破 [26] 。江东孙策意欲偷袭许都，却被刺客暗杀 [27] 。奇袭十月，袁绍又派车运粮，并令淳于琼率兵万人护送，夜宿于袁军大营以北约20公里的故市（河南延津县内）、乌巢（今河南延津东南）。恰在这时，袁绍谋士许攸投奔曹操，建议曹操轻兵奇袭乌巢，烧其辎重。曹操立即付诸实行，留曹洪、荀攸守营垒，亲自率领步骑五千，冒用袁军旗号，人衔枚马缚口，各带柴草一束，利用暗夜走小路偷袭乌巢。到达后立即围攻放火。袁绍获知曹操袭击乌巢后，一方面派轻骑救援，另一方面命令张郃、高览率重兵猛攻曹军大营。可曹营坚固，攻打不下。当曹军急攻乌巢淳于琼营时，袁绍增援的部队已经迫近。曹操励士死战，大破袁军，曹军骁将乐进斩杀淳于琼等，并将其粮草全数烧毁。张郃、高览闻得乌巢被破，于是投降曹操，导致了军心动摇，内部分裂，大军崩溃 [28] 。袁绍仓惶带八百骑兵退回河北，曹军先后歼灭和坑杀袁军七万余人，也有说是八万人 [29] 。官渡之战增强了曹操",
          sign:
            " 官渡之战是袁曹双方力量转变，使当时中国北部由分裂走向统一的一次关键性战役，对于三国历史的发展有着极其重要的影响。此战曹军的胜利不是偶然的，袁曹间的兼并战争，虽属于封建割据势力之间的争斗，但它实现了地区统一，客观上符合人民的愿望。 [30]官渡之战是汉末乃至中国史上有名的以少胜多的战役，也是曹操与袁绍争夺北方霸权的转折点。官渡一"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          background:
            "东汉末年，轰轰烈烈的黄巾起义虽然被镇压下去了，但它却沉重地打击了汉朝地主阶级的统治，使早已腐朽不堪的东汉政权分崩离析，名存实亡。在镇压黄巾起义的过程中，各地州郡大吏独揽军政大权，地主豪强也纷纷组织“部曲”（私人武装），占据地盘， 形成大大小小的割据势力，转入争权夺利、互相兼并的长期战争，造成中原地区“白骨露于野、千里无鸡鸣”的凄惨景象。当时的割据势力：主要有河北的袁绍、河内的张杨、兖豫的曹操、徐州的吕布、扬州的袁术、江东的孙策、荆州的刘表、幽州的公孙瓒、南阳的张绣等。形成群雄并起的局面，在这些割据势力的连年征战中，袁绍、曹操两大集团逐步壮大起来。 [1]建安元年（196年），曹操迎汉献帝，迁都许县，自始挟天子以令诸侯（“奉天子而征四方”），威势大增。他先后击败吕布、袁术，占据了兖州、徐州以及部分豫州、司隶。建安四年（199年），袁绍最终战胜公孙瓒，据幽州、冀州、青州、并州，尽有河北之地，意欲南向以争天下。这样，华北最重要的两个政治军事集团，决战势所难免。起初形势袁强曹弱。袁绍已无后顾之忧，地广人众，可动员的兵力在十万以上。 [2] 特别是袁绍的统治核心——冀州，在汉末三国时期，“冀州户口最多，田多垦辟，又有桑枣之饶” [3] ，“冀州民人殷盛，兵粮优足” [4] 。曹操则是处于四战之地，除了北方的袁绍，关中诸将尚在观望，南边刘表、张绣不肯降服，东南孙策蠢蠢欲动，暂时依附的刘备也是貌",
          process:
            "前期建安五年（200年）正月，车骑将军董承、偏将军王服、越骑校尉种辑接受了汉献帝的衣带诏，欲诛杀曹操，但事泄，被曹操夷灭三族。 [11] 袁绍终于获得了名正言顺的开战理由，于是，袁绍奉衣带诏 [12] 讨伐曹操，派陈琳书写檄文并公开发布，檄文中把曹操骂得无法忍受。袁、曹两家公开宣战。当曹操正部署对袁绍作战时，参与了衣带诏之谋的刘备起兵反曹。刘备占领下邳，屯据沛县（今江苏沛县）。 [12] 刘备军增至数万人，并与袁绍联系，打算合力攻曹。曹操为保持许都与青、兖二州的联系，避免两面作战，于次年二月亲自率精兵东击刘备，迅速占领沛县，转而进攻下邳，迫降关羽。刘备全军溃败，只身逃往河北投奔袁绍。当曹、刘作战正酣之时，袁绍谋士田丰建议袁绍“举军而袭其后”，但袁绍以幼子有病为辞拒绝采纳，致使曹操从容击败刘备回军官渡 [13] 。曹操派遣臧霸、孙观、孙康等人牵制青州刺史袁谭。二月，袁绍进军黎阳，企图渡河寻求与曹军主力决战。他首先派颜良进攻白马的东郡太守刘延，企图夺取黄河南岸要点，以保障主力渡河。四月，曹操为争取主动，求得初战的胜利，亲自率兵北上解救白马之围。此时谋士荀攸认为袁绍兵多，建议声东击西，分散其兵力，先引兵至延津，伪装渡河攻袁绍后方，使袁绍分兵向西，然后遣轻骑迅速袭击进攻白马的袁军，攻其不备，定可击败颜良。曹操采纳了这一建议，袁绍果然分兵延津。曹操乃乘机率轻骑，派张辽、关羽为前锋，急趋白马。关羽迅速迫近颜良军，冲进万军之中杀死颜良并斩首而还，经过一番交战，关羽望见了颜良麾盖（大将所乘戎车，设幢麾、张盖），在张辽军队的掩护下，关羽策马冲到颜良身边，在万众之中刺死颜良，又拔出腰间佩刀斩其首级而归。从始自终，袁军诸将都不能挡住关羽。曹操挥动着自己手中所持“麾” [14] [15] ，徐晃等人的后续部队奉令冲杀 [16] 。袁军溃散，袁军溃败。 [17-19]曹操解了白马之围后，迁徙白马的百姓沿黄河向西撤退 [20] 。袁绍率军渡河追击，军至延津南，派大将文丑与刘备继续率兵追击曹军，曹操当时的骑兵不足六百，驻于南阪（在白马南）下，而袁军达五六千骑，尚有步兵在后跟进。曹操令士卒解鞍放马，并故意将辎重丢弃道旁。袁军果然中计，纷纷争抢财物。曹操突然挥动着自己手中所持“麾” [14] [15] ，下令发起攻击。徐晃等人翻身上马 [16] ，终于击败袁军，杀了文丑（文丑为乱军所杀，并不是关羽斩杀），顺利退回官渡。颜良、文丑都是河北名将，却被一战而斩，袁绍军队的锐气被挫伤 [21] 。彧，商议要退守许都，荀彧回信说：“袁绍将主力集结于官渡，想要与公决胜负。公以至弱当至强，若不能制，必为所乘，这是决定天下大势的关键所在。当年楚、汉在荥阳、成皋之间，刘邦、项羽没有人肯先退一步，以为先退则势屈。现在公以一当十，扼守要冲而使袁绍不能前进，已经半年了。情势已然明朗，绝无回旋的余地，不久就会发生重大的转变。这正是出奇制胜的时机，千万不可坐失。”于是曹操决心继续坚守待机，同时加强防守，命负责后勤补给的任峻采取十路纵队为一部，缩短运输队的前后距离，并用复阵（两列阵），加强护卫，防止袁军袭击；另一方面积极寻求和捕捉战机，击败袁军，不久派曹仁、史涣截击、烧毁袁军数千辆粮车，增加了袁军的补给困难 [25] 。期间，汝南郡黄巾军刘辟叛变，袁绍使刘备前往相助，又派韩荀钞断曹军西道，皆被曹仁击破 [26] 。江东孙策意欲偷袭许都，却被刺客暗杀 [27] 。奇袭十月，袁绍又派车运粮，并令淳于琼率兵万人护送，夜宿于袁军大营以北约20公里的故市（河南延津县内）、乌巢（今河南延津东南）。恰在这时，袁绍谋士许攸投奔曹操，建议曹操轻兵奇袭乌巢，烧其辎重。曹操立即付诸实行，留曹洪、荀攸守营垒，亲自率领步骑五千，冒用袁军旗号，人衔枚马缚口，各带柴草一束，利用暗夜走小路偷袭乌巢。到达后立即围攻放火。袁绍获知曹操袭击乌巢后，一方面派轻骑救援，另一方面命令张郃、高览率重兵猛攻曹军大营。可曹营坚固，攻打不下。当曹军急攻乌巢淳于琼营时，袁绍增援的部队已经迫近。曹操励士死战，大破袁军，曹军骁将乐进斩杀淳于琼等，并将其粮草全数烧毁。张郃、高览闻得乌巢被破，于是投降曹操，导致了军心动摇，内部分裂，大军崩溃 [28] 。袁绍仓惶带八百骑兵退回河北，曹军先后歼灭和坑杀袁军七万余人，也有说是八万人 [29] 。官渡之战增强了曹操",
          sign:
            " 官渡之战是袁曹双方力量转变，使当时中国北部由分裂走向统一的一次关键性战役，对于三国历史的发展有着极其重要的影响。此战曹军的胜利不是偶然的，袁曹间的兼并战争，虽属于封建割据势力之间的争斗，但它实现了地区统一，客观上符合人民的愿望。 [30]官渡之战是汉末乃至中国史上有名的以少胜多的战役，也是曹操与袁绍争夺北方霸权的转折点。官渡一"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          background:
            "东汉末年，轰轰烈烈的黄巾起义虽然被镇压下去了，但它却沉重地打击了汉朝地主阶级的统治，使早已腐朽不堪的东汉政权分崩离析，名存实亡。在镇压黄巾起义的过程中，各地州郡大吏独揽军政大权，地主豪强也纷纷组织“部曲”（私人武装），占据地盘， 形成大大小小的割据势力，转入争权夺利、互相兼并的长期战争，造成中原地区“白骨露于野、千里无鸡鸣”的凄惨景象。当时的割据势力：主要有河北的袁绍、河内的张杨、兖豫的曹操、徐州的吕布、扬州的袁术、江东的孙策、荆州的刘表、幽州的公孙瓒、南阳的张绣等。形成群雄并起的局面，在这些割据势力的连年征战中，袁绍、曹操两大集团逐步壮大起来。 [1]建安元年（196年），曹操迎汉献帝，迁都许县，自始挟天子以令诸侯（“奉天子而征四方”），威势大增。他先后击败吕布、袁术，占据了兖州、徐州以及部分豫州、司隶。建安四年（199年），袁绍最终战胜公孙瓒，据幽州、冀州、青州、并州，尽有河北之地，意欲南向以争天下。这样，华北最重要的两个政治军事集团，决战势所难免。起初形势袁强曹弱。袁绍已无后顾之忧，地广人众，可动员的兵力在十万以上。 [2] 特别是袁绍的统治核心——冀州，在汉末三国时期，“冀州户口最多，田多垦辟，又有桑枣之饶” [3] ，“冀州民人殷盛，兵粮优足” [4] 。曹操则是处于四战之地，除了北方的袁绍，关中诸将尚在观望，南边刘表、张绣不肯降服，东南孙策蠢蠢欲动，暂时依附的刘备也是貌",
          process:
            "前期建安五年（200年）正月，车骑将军董承、偏将军王服、越骑校尉种辑接受了汉献帝的衣带诏，欲诛杀曹操，但事泄，被曹操夷灭三族。 [11] 袁绍终于获得了名正言顺的开战理由，于是，袁绍奉衣带诏 [12] 讨伐曹操，派陈琳书写檄文并公开发布，檄文中把曹操骂得无法忍受。袁、曹两家公开宣战。当曹操正部署对袁绍作战时，参与了衣带诏之谋的刘备起兵反曹。刘备占领下邳，屯据沛县（今江苏沛县）。 [12] 刘备军增至数万人，并与袁绍联系，打算合力攻曹。曹操为保持许都与青、兖二州的联系，避免两面作战，于次年二月亲自率精兵东击刘备，迅速占领沛县，转而进攻下邳，迫降关羽。刘备全军溃败，只身逃往河北投奔袁绍。当曹、刘作战正酣之时，袁绍谋士田丰建议袁绍“举军而袭其后”，但袁绍以幼子有病为辞拒绝采纳，致使曹操从容击败刘备回军官渡 [13] 。曹操派遣臧霸、孙观、孙康等人牵制青州刺史袁谭。二月，袁绍进军黎阳，企图渡河寻求与曹军主力决战。他首先派颜良进攻白马的东郡太守刘延，企图夺取黄河南岸要点，以保障主力渡河。四月，曹操为争取主动，求得初战的胜利，亲自率兵北上解救白马之围。此时谋士荀攸认为袁绍兵多，建议声东击西，分散其兵力，先引兵至延津，伪装渡河攻袁绍后方，使袁绍分兵向西，然后遣轻骑迅速袭击进攻白马的袁军，攻其不备，定可击败颜良。曹操采纳了这一建议，袁绍果然分兵延津。曹操乃乘机率轻骑，派张辽、关羽为前锋，急趋白马。关羽迅速迫近颜良军，冲进万军之中杀死颜良并斩首而还，经过一番交战，关羽望见了颜良麾盖（大将所乘戎车，设幢麾、张盖），在张辽军队的掩护下，关羽策马冲到颜良身边，在万众之中刺死颜良，又拔出腰间佩刀斩其首级而归。从始自终，袁军诸将都不能挡住关羽。曹操挥动着自己手中所持“麾” [14] [15] ，徐晃等人的后续部队奉令冲杀 [16] 。袁军溃散，袁军溃败。 [17-19]曹操解了白马之围后，迁徙白马的百姓沿黄河向西撤退 [20] 。袁绍率军渡河追击，军至延津南，派大将文丑与刘备继续率兵追击曹军，曹操当时的骑兵不足六百，驻于南阪（在白马南）下，而袁军达五六千骑，尚有步兵在后跟进。曹操令士卒解鞍放马，并故意将辎重丢弃道旁。袁军果然中计，纷纷争抢财物。曹操突然挥动着自己手中所持“麾” [14] [15] ，下令发起攻击。徐晃等人翻身上马 [16] ，终于击败袁军，杀了文丑（文丑为乱军所杀，并不是关羽斩杀），顺利退回官渡。颜良、文丑都是河北名将，却被一战而斩，袁绍军队的锐气被挫伤 [21] 。彧，商议要退守许都，荀彧回信说：“袁绍将主力集结于官渡，想要与公决胜负。公以至弱当至强，若不能制，必为所乘，这是决定天下大势的关键所在。当年楚、汉在荥阳、成皋之间，刘邦、项羽没有人肯先退一步，以为先退则势屈。现在公以一当十，扼守要冲而使袁绍不能前进，已经半年了。情势已然明朗，绝无回旋的余地，不久就会发生重大的转变。这正是出奇制胜的时机，千万不可坐失。”于是曹操决心继续坚守待机，同时加强防守，命负责后勤补给的任峻采取十路纵队为一部，缩短运输队的前后距离，并用复阵（两列阵），加强护卫，防止袁军袭击；另一方面积极寻求和捕捉战机，击败袁军，不久派曹仁、史涣截击、烧毁袁军数千辆粮车，增加了袁军的补给困难 [25] 。期间，汝南郡黄巾军刘辟叛变，袁绍使刘备前往相助，又派韩荀钞断曹军西道，皆被曹仁击破 [26] 。江东孙策意欲偷袭许都，却被刺客暗杀 [27] 。奇袭十月，袁绍又派车运粮，并令淳于琼率兵万人护送，夜宿于袁军大营以北约20公里的故市（河南延津县内）、乌巢（今河南延津东南）。恰在这时，袁绍谋士许攸投奔曹操，建议曹操轻兵奇袭乌巢，烧其辎重。曹操立即付诸实行，留曹洪、荀攸守营垒，亲自率领步骑五千，冒用袁军旗号，人衔枚马缚口，各带柴草一束，利用暗夜走小路偷袭乌巢。到达后立即围攻放火。袁绍获知曹操袭击乌巢后，一方面派轻骑救援，另一方面命令张郃、高览率重兵猛攻曹军大营。可曹营坚固，攻打不下。当曹军急攻乌巢淳于琼营时，袁绍增援的部队已经迫近。曹操励士死战，大破袁军，曹军骁将乐进斩杀淳于琼等，并将其粮草全数烧毁。张郃、高览闻得乌巢被破，于是投降曹操，导致了军心动摇，内部分裂，大军崩溃 [28] 。袁绍仓惶带八百骑兵退回河北，曹军先后歼灭和坑杀袁军七万余人，也有说是八万人 [29] 。官渡之战增强了曹操",
          sign:
            " 官渡之战是袁曹双方力量转变，使当时中国北部由分裂走向统一的一次关键性战役，对于三国历史的发展有着极其重要的影响。此战曹军的胜利不是偶然的，袁曹间的兼并战争，虽属于封建割据势力之间的争斗，但它实现了地区统一，客观上符合人民的愿望。 [30]官渡之战是汉末乃至中国史上有名的以少胜多的战役，也是曹操与袁绍争夺北方霸权的转折点。官渡一"
        }
      ]
    };
  },
  watch: {
    drawer(val) {
      if (!val) {
        this.editData = {};
      }
    }
  },
  methods: {
    addEvent() {
      this.drawer = true;
    },
    openDrewer(row) {
      console.log(row);
      this.editData = row;
      this.drawer = true;
    },
    submitFrom() {
      this.cancelForm();
    },
    cancelForm() {
      this.drawer = false;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },

    handleAvatarSuccess(res, file) {
      this.editData.imgUrl = URL.createObjectURL(file.raw);
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
.drawer-footer {
  text-align: center;
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
</style>