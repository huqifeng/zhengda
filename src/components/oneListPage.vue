<template>
  <div class="oneListPage">
    <div class="fullpage">
      <div class="section" id="section0">
        <div class="headerImgBox">
          <img :src="coverImgUrl" alt />
        </div>
        <div class="pagecontent">
          <div class="menu">
            <HeaderMenu></HeaderMenu>
          </div>
          <div class="HeaderTextWrap">
            <div class="HeaderTextBox">
              <div class="wrap">
                <div>
                  <p
                    v-for="(item,index) in bannerText"
                    :key="index"
                    :class="item.type=='cn'?'chinese':'english'"
                  >{{item.text}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <ContentNavigation v-bind="post"></ContentNavigation>
      <div class="businessContent">
        <router-view></router-view>
      </div>
    </div>
    <FooterMap></FooterMap>
  </div>
</template>

<script>
import Fullpage from "fullpage.js";
import HeaderMenu from "./HeaderMenu";
import FooterMap from "./FooterMap";
import ContentNavigation from "./ContentNavigation";

export default {
  name: "onListPage",
  data() {
    return {
      fullpage: "",
      post: {
        twoNavName: this.twoNavName,
        threeNavList: this.threeNavList
      }
    };
  },
  props: ["twoNavName", "threeNavList", "coverImgUrl", "bannerText"],
  mounted() {
    this.fullpage = new Fullpage(".fullpage", {
      anchors: ["firstPage"],
      sectionsColor: ["#4A6FB1"],
      autoScrolling: false,
      css3: true,
      fitToSection: false
    });
  },
  beforeDestroy() {
    this.fullpage.destroy("all");
  },
  components: {
    HeaderMenu,
    FooterMap,
    ContentNavigation
    // BusinessContent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.pagecontent {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 4;
  left: 0;
  top: 0;
}
#section0 .menu {
  position: absolute;
  z-index: 5;
  width: 100%;
  left: 0;
  top: 0;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/*solves problem with overflowing video in Mac with Chrome */
#section0 {
  overflow: hidden;
}
.headerImgBox {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.HeaderTextWrap {
  position: absolute;
  width: 100%;
  height: 300px;
  right: 57%;
  top: 50%;
  margin-top: -150px;
  background: rgba(0, 0, 0, 0.66);
  text-align: right;
  .HeaderTextBox {
    display: inline-block;
    height: 100%;
    width: 442px;
    .wrap {
      height: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      text-align: left;
      p {
        color: #fff;
        line-height: 60px;
      }
      .chinese {
        font-size: 30px;
      }
      .english {
        font-size: 36px;
      }
    }
  }
}
.businessContent {
  width: 100%;
  height: auto;
  position: relative;
}
</style>