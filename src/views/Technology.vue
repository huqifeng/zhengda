<template>
  <div class="Technology">
    <oneListPage v-bind="post"></oneListPage>
  </div>
</template>

<script>
import oneListPage from "../components/oneListPage";

export default {
  name: "Technology",
  data() {
    return {
      post: {
        twoNavName: {
          cn: "我们的技术",
          en: "OUR TECHNOLOGY"
        },
        bannerText: [
          {
            type: "cn",
            text: "我们的技术"
          }
        ],
        threeNavList: [
          {
            title: ["研发", "平台"],
            path: "/technology/platform"
          },
          {
            title: ["研发", "团队"],
            path: "/technology/team"
          },
          {
            title: ["知识", "产权"],
            path: "/technology/property "
          },
          {
            title: ["在研", "产品"],
            path: "/technology/ing"
          }
        ],
        coverImgUrl: require("../assets/jishuBanner.png")
      }
    };
  },
  components: {
    oneListPage
  }
};
</script>
<style scoped lang="less">
</style>
