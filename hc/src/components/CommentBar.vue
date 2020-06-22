<template>
  <div class="con">
    <div class="name">{{publisher}}：</div>
    <div class="comment">
      {{content}}
      <span class="date">{{date}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    publisher: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.con {
  padding: 10px 0;
  display: flex;
  border-bottom: 1px solid #ccc;
  .name {
    // width: 100px;
    color:#32a2d5;
  }
  .comment {
    flex: 1;
    word-wrap: break-word;
  }
  .date {
    display: inline-block;
    font-size: 12px;
  }
}
</style>