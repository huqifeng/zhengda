<template>
  <div class="TwoHeaderTitle">
    <div class="TwoHeaderTitleBox">
      <p :class="[item.type]" v-for="(item,index) in op" :key="index">{{item.value}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["op"],
  mounted() {
    // console.log(this.op);
  }
};
</script>
<style lang="less" scoped>
.TwoHeaderTitle {
  width: 100%;
  position: relative;

  .TwoHeaderTitleBox {
    width: 100%;
    box-sizing: border-box;
    padding-left: 37px;
    text-align: left;
    position: relative;
    .en {
      height: 30px;
      font-size: 30px;
      // font-family: PingFangSC-Ultralight;
      color: rgba(68, 64, 49, 1);
      line-height: 30px;
      margin-bottom: 10px;
    }

    .cn {
      height: 30px;
      font-size: 30px;
      font-family: SourceHanSansCN-Regular;
      font-weight: bold;
      color: rgba(59, 56, 44, 1);
      line-height: 30px;
    }
  }

  .TwoHeaderTitleBox:before {
    content: "";
    width: 10px;
    height: 100%;
    border-radius: 5px 5px;
    position: absolute;
    left: 0;
    top: 0px;
    background: #ecbf0b;
  }
}
</style>


