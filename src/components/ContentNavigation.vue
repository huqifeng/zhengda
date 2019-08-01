<template>
  <div class="contentNavigation">
    <div class="oneListBox listBox"></div>
    <div class="twoListBox listBox"></div>
  </div>
</template>
<script>
export default {
  name: "ContentNavigation",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.contentNavigation {
  width: 1200px;
  margin: 0 auto;
  background: #ecbe0b;
  border-radius: 4px;
  height: 72px;
  .listBox {
    height: 72px;
  }
  .oneListBox {
    height: 72px;
    float: left;
    background: #302e26;
    border-right: 5px solid #ffd323;
    padding: 0 30px;
  }
}
</style>


