<template>
  <div class="about">
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
          cn: "关于中生",
          en: "SINOBIOPHARM"
        },
        bannerText: [
          {
            type: "cn",
            text: "奉献爱心"
          },
          {
            type: "cn",
            text: "健康人类"
          },
          {
            type: "cn",
            text: "共创美好未来"
          }
        ],
        threeNavList: [
          {
            title: ["公司", "介绍"],
            path: "/about/introduce"
          },
          {
            title: ["使命", "愿景"],
            path: "/about/medical"
          },
          {
            title: ["管理", "团队"],
            path: "/about/team"
          },
          {
            title: ["组织", "架构"],
            path: "/about/health"
          },
          {
            title: ["重大", "事迹"],
            path: "/about/health"
          },
          {
            title: ["公司", "荣誉"],
            path: "/about/honor"
          }
        ],
        coverImgUrl: require("../assets/businessBannerImg.png"),
        bjImg: require("../assets/businessBJ.png")
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
