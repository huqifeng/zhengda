<template>
  <div class="businessContent">
    <div class="bjBox">
      <img :src="bjImg" alt />
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "businessContent",
  data() {
    let that = this;
    return {
      bjImg: require("../../assets/businessBJ.png")
    };
  }
};
</script>
<style lang="less" scoped>
.businessContent {
  width: 100%;
  height: auto;
  position: relative;
}
.bjBox {
  position: absolute;
  z-index: -1;
  left: 0;
  top: 24px;
  width: 982px;
  height: 264px;
  img {
    vertical-align: top;
    width: 982px;
    height: 264px;
  }
}
</style>


