<template>
  <div class="article-manage">
    <el-button type="primary" @click="addArticle">发布文章</el-button>
    <br />
    <br />
    <el-table :data="tableData" style="width: 60%">
      <el-table-column prop="name" label="名称" width="300"></el-table-column>
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
        <el-form-item label="标题" label-width="80px">
          <el-input v-model="editData.name" autocomplete="off" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="标签" label-width="80px">
          <el-input v-model="editData.lable" placeholder="请输入标签（4字以内）"></el-input>
        </el-form-item>
        <el-form-item label="详情" label-width="80px">
          <el-input v-model="editData.about" type="textarea" :rows="8" placeholder="请输入内容（1000字以内）"></el-input>
        </el-form-item>
        <el-form-item label="图片" label-width="80px">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="editData.imgUrl" :src="editData.imgUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
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
          name: "文章一",
          lable: "标签一",
          about:
            " 魏武帝曹操（155年－220年3月15日），本名吉利，字孟德，小名阿瞒，谥号武皇帝（魏武帝），沛国谯县人 [1-2] 。东汉末年杰出的政治家、军事家、文学家、书法家 [3] ，曹魏政权的奠基人。东汉末年，天下大乱，曹操以汉朝天子刘协的名义征讨四方，对内消灭二袁、吕布、刘表、马超、韩遂等割据势力，对外降服南匈奴、乌桓、鲜卑等，统一了中国北方，并实行一系列政策恢复经济生产和社会秩序，扩大屯田、兴修水利、奖励农桑、重视手工业、安置流亡人口、实行“租调制”，从而使中原社会渐趋稳定、经济出现转机。建安十八年（213年），曹操获封魏公，建立魏公国，定都河北邺城，而后进爵魏王。去世后，其子曹丕称帝，追尊曹操为武皇帝，庙号太祖。曹操喜欢用诗歌、散文来抒发自己政治抱负，反映民生疾苦，是魏晋文学的代表人物，鲁迅赞之为“改造文章的祖师”。同时曹操擅长书法，唐朝张怀瓘《书断》将曹操的章草评为“妙品”。",
          imgUrl: ""
          // "data:image/jpg;base64,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"
        },
        {
          date: "2016-05-04",
          name: "文章二",
          lable: "标签二",
          about:
            " 魏武帝曹操（155年－220年3月15日），本名吉利，字孟德，小名阿瞒，谥号武皇帝（魏武帝），沛国谯县人 [1-2] 。东汉末年杰出的政治家、军事家、文学家、书法家 [3] ，曹魏政权的奠基人。东汉末年，天下大乱，曹操以汉朝天子刘协的名义征讨四方，对内消灭二袁、吕布、刘表、马超、韩遂等割据势力，对外降服南匈奴、乌桓、鲜卑等，统一了中国北方，并实行一系列政策恢复经济生产和社会秩序，扩大屯田、兴修水利、奖励农桑、重视手工业、安置流亡人口、实行“租调制”，从而使中原社会渐趋稳定、经济出现转机。建安十八年（213年），曹操获封魏公，建立魏公国，定都河北邺城，而后进爵魏王。去世后，其子曹丕称帝，追尊曹操为武皇帝，庙号太祖。曹操喜欢用诗歌、散文来抒发自己政治抱负，反映民生疾苦，是魏晋文学的代表人物，鲁迅赞之为“改造文章的祖师”。同时曹操擅长书法，唐朝张怀瓘《书断》将曹操的章草评为“妙品”。",
          imgUrl:
            "data:image/jpg;base64,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"
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
    addArticle() {
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