<template>
  <div class="list-con">
    <div class="title">
      <span>{{title}}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.list-con {
  width: 100%;
  overflow: hidden;
  .title {
    color: #333333;
    font-size: 20px;
    font-weight: bold;
    line-height: 21px;
    border-bottom: 1px solid #aaaaaa;
    span {
      height: 30px;
      height: 30px;
      line-height: 30px;
      padding: 0 5px;
      text-align: justify;
      display: inline-block;
      border-bottom: 4px solid red;
    }
  }
}
</style>