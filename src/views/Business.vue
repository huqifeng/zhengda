<template>
  <div class="business">
    <oneListPage v-bind="post"></oneListPage>
  </div>
</template>

<script>
import oneListPage from "../components/oneListPage";

export default {
  name: "Business",
  data() {
    return {
      post: {
        twoNavName: {
          cn: "我们的业务",
          en: "OUR BUSINESS"
        },
        bannerText: [
          {
            type: "cn",
            text: "国内外一流的全自动化生产线"
          },
          {
            type: "cn",
            text: "获得多项国际认证"
          }
        ],
        threeNavList: [
          {
            title: ["制药", "业务"],
            path: "/business/pharmacy"
          },
          {
            title: ["医疗", "业务"],
            path: "/business/medical"
          },
          {
            title: ["大健康", "业务"],
            path: "/business/health"
          }
        ],
        coverImgUrl: require("../assets/businessBannerImg2.png")
      }
    };
  },
  components: {
    oneListPage
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>