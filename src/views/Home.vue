<template>
  <div class="home">
    <div class="fullpage">
      <div class="section" id="section0">
        <video id="myVideo" loop muted data-autoplay>
          <source src="../assets/首页.mp4" type="video/mp4" />
        </video>
        <div class="pagecontent">
          <div class="menu">
            <HeaderMenu></HeaderMenu>
          </div>
          <div class="videoTextBox">
            <div class="textBox">
              <p class="chinese">
                奉献爱心
                <br />健康人类
                <br />共创美好未来
              </p>
              <p class="english">Leading the Way in Medical Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterMap></FooterMap>
  </div>
</template>

<script>
import Fullpage from "fullpage.js";
import HeaderMenu from "../components/HeaderMenu";
import FooterMap from "../components/FooterMap";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    new Fullpage(".fullpage", {
      anchors: ["firstPage"],
      sectionsColor: ["#4A6FB1"],
      autoScrolling: false,
      css3: true,
      fitToSection: false
    });
  },
  components: {
    HeaderMenu,
    FooterMap
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#myVideo {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-color: black; /* in case the video doesn't fit the whole page*/
  background-image: /* our video */ ;
  background-position: center center;
  background-size: contain;
  object-fit: cover; /*cover video background */
  z-index: 3;
}

/* Layer with position absolute in order to have it over the video
  * --------------------------------------- */

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
.videoTextBox {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 50%;
  margin-top: -160px;
  .textBox {
    width: 1200px;
    height: 400px;
    text-align: left;
    color: #fff;
    margin: 0 auto;
    p {
      margin-left: 107px;
    }
    .chinese {
      font-size: 58px;
      font-weight: bold;
      line-height: 85px;
    }
    .english {
      font-size: 36px;
      font-weight: 600;
      line-height: 24px;
      margin-top: 36px;
    }
  }
}
</style>
