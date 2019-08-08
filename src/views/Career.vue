<template>
  <div class="Career">
    <oneListPage v-bind="post"></oneListPage>
  </div>
</template>

<script>
import oneListPage from "../components/oneListPage";

export default {
  name: "Career",
  data() {
    return {
      post: {
        twoNavName: {
          cn: "职业发展",
          en: "CAREER DEVELOPMENT"
        },
        bannerText: [
          {
            type: "cn",
            text: "职业发展"
          },
          {
            type: "en",
            text: "CAREER "
          },
          {
            type: "en",
            text: "DEVELOPMENT"
          }
        ],
        threeNavList: [
          {
            title: ["用人理念", "与人才观"],
            path: "/career/concept"
          },
          {
            title: ["员工", "活动"],
            path: "/career/activity"
          },
          {
            title: ["员工", "风采"],
            path: "/career/elegant"
          },
          {
            title: ["招聘", "信息"],
            path: "/career/recruitment"
          },
          {
            title: ["联系", "我们"],
            path: "/career/contact"
          }
        ],
        coverImgUrl: require("../assets/career/careerBannerBj.png")
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
