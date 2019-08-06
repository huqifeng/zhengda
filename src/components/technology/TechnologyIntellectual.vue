<template>
  <div class="TechnologyIntellectual">
    <TwoHeaderTitle :op="op"></TwoHeaderTitle>
    <div class="zhuanliBox">
      <h3 class="title">国家重大科技专项</h3>
      <div class="list">
        <div class="li">
          <div class="imgNubBox">
            <div class="imgBox">
              <img src alt />
            </div>
            <div class="nubBox"></div>
          </div>
          <p class="type"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TwoHeaderTitle from "../TwoHeaderTitle.vue";
export default {
  data() {
    return {
      op: [
        {
          type: "en",
          value: "INTELLECTUAL PROPERTY RIGHT"
        },
        {
          type: "cn",
          value: "知识产权"
        }
      ],
      list: [
        {
          title: "国家重大科技专项",
          nub: 27,
          imgUrl: ""
        }
      ]
    };
  },
  components: {
    TwoHeaderTitle
  }
};
</script>
<style lang="less" scoped>
.TechnologyIntellectual {
  width: 1200px;
  margin: 117px auto 0;
}
</style>
