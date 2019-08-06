<template>
  <div class="duty">
    <oneListPage v-bind="post"></oneListPage>
  </div>
</template>

<script>
import oneListPage from "../components/oneListPage";

export default {
  name: "duty",
  data() {
    return {
      post: {
        twoNavName: {
          cn: "社会责任",
          en: "SOCIAL RESPONSIBILITY"
        },
        bannerText: [
          {
            type: "cn", //en
            text: "社会责任"
          }
        ],
        threeNavList: [
          {
            title: ["实战", "动态"],
            path: "/duty/dynamic"
          },
          {
            title: ["社会责", "任报告"],
            path: "/duty/report"
          },
          {
            title: ["社会责", "任理念"],
            path: "/duty/concept"
          }
        ],
        coverImgUrl: require("../assets/duty/banner.png")
        // bjImg: require("../assets/businessBJ.png")
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
