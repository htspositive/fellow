<template>
  <div class="item">
    <span>{{title}}：</span>
    <span class="detail">
      <slot></slot>
    </span>
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
.item {
  display: inline-block;
  margin:0 30px 15px 0;
  .detail {
    color: black;
  }
}
</style>