<template>
  <div class="news">
    <oneListPage v-bind="post"></oneListPage>
  </div>
</template>

<script>
import oneListPage from "../components/oneListPage";

export default {
  name: "News",
  data() {
    return {
      post: {
        twoNavName: {
          cn: "新闻中心",
          en: "NEWS CENTRES"
        },
        bannerText: [
          {
            type: "cn",
            text: "新闻动态"
          }
        ],
        threeNavList: [
          {
            title: ["中生", "动态"],
            path: "/news/dynamic"
          },
          {
            title: ["多媒体", "中心"],
            path: "/news/multimedia"
          },
          {
            title: ["行业", "动态"],
            path: "/news/industry"
          },
          {
            title: ["媒体", "报道"],
            path: "/news/reports"
          }
        ],
        coverImgUrl: require("../assets/news/banner.png")
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
