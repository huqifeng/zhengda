<template>
  <div class="TwoHeaderTitle">
    <div class="TwoHeaderTitleBox">
      <p class="en">{{op.en1}}</p>
      <p class="en">{{op.en2}}</p>
      <p class="cn">{{op.cn}}</p>
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
  height: 120px;
  position: relative;

  .TwoHeaderTitleBox {
    width: 100%;
    box-sizing: border-box;
    padding-left: 37px;
    text-align: left;

    .en {
      height: 30px;
      font-size: 30px;
      font-family: PingFangSC-Ultralight;
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
    height: 104px;
    border-radius: 5px 5px;
    position: absolute;
    left: 0;
    top: 3px;
    background: #ecbf0b;
  }
}
</style>


