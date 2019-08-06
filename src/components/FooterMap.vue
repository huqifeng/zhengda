<template>
  <div class="footerMap">
    <div class="textBox">
      <div class="W12">
        <div class="footerTextImgBox">
          <img src="../assets/footerText.png" alt />
        </div>
      </div>
    </div>
    <div class="navMap">
      <div class="W12">
        <ul class="nav clearFloat">
          <li class="navLi">
            <p class="chinese">法律条款</p>
            <p class="english">LEGAL TERMS</p>
            <p class="line"></p>
          </li>
          <li class="navLi">
            <p class="chinese">法律条款</p>
            <p class="english">LEGAL TERMS</p>
            <p class="line"></p>
          </li>
          <li class="navLi">
            <p class="chinese">法律条款</p>
            <p class="english">LEGAL TERMS</p>
            <p class="line"></p>
          </li>
          <li class="navLi">
            <p class="chinese">法律条款</p>
            <p class="english">LEGAL TERMS</p>
            <p class="line"></p>
          </li>
        </ul>
        <div class="map">
          <img src="../assets/map.png" alt />
        </div>
        <ul class="aboutUs">
          <li>
            <p>
              <i class="iconfont icon-weixin"></i>
            </p>
          </li>
          <li>
            <p>
              <i class="iconfont icon-facebook"></i>
            </p>
          </li>
          <li>
            <p>
              <i class="iconfont icon-twitter"></i>
            </p>
          </li>
        </ul>
        <div class="backTop" @click="backTop">
          <img src="../assets/backTop.png" alt />
        </div>
      </div>
    </div>
    <div class="copyright">© 2016 中国生物制药有限公司 版权所有</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aaa: "000",
      scrollToTop: 0
    };
  },
  methods: {
    backTop() {
      // window.scrollTo(0, 0);
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    scrollToTopFn() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTopFn);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTopFn);
  }
};
</script>
<style lang="less" scoped>
.footerMap {
  width: 100%;
}
.textBox {
  height: 83px;
  background: #fff;
  padding-top: 194px;
  .footerTextImgBox {
    height: 83px;
    width: 1176px;
    margin: 0 auto;
    overflow: hidden;
    img {
      height: 116px;
      width: 1176px;
    }
  }
}
.navMap {
  height: 400px;
  background: #302e26;
  position: relative;
  .nav {
    width: 194 * 4px;
    margin: 0 auto;
    padding-top: 80px;
    height: 84px;
    box-sizing: content-box;
    .navLi {
      display: inline-block;
      height: 84px;
      width: 194px;
      padding-left: 54px;
      box-sizing: border-box;
      text-align: left;
      color: #fff;
      cursor: pointer;
      .chinese {
        height: 15px;
        font-size: 15px;
        line-height: 15px;
      }
      .english {
        height: 9px;
        font-size: 12px;
        line-height: 9px;
        margin-top: 8px;
      }
      .line {
        width: 32px;
        height: 2px;
        background: #ecbe0b;
        margin-top: 10px;
        transition: width 0.5s ease-in;
      }
    }
    .navLi:hover {
      & .line {
        width: 70%;
      }
    }
  }
  .map {
    width: 1200px;
    height: 145px;
    img {
      vertical-align: top;
      width: 1200px;
      height: 145px;
    }
  }
  .aboutUs {
    width: 270px;
    height: 35px;
    margin: 0 auto;
    margin-top: 31px;
    li {
      display: inline-block;
      width: 90px;
      height: 35px;
      text-align: center;
      p {
        display: inline-block;
        width: 35px;
        height: 35px;
        border-radius: 18px;
        background: #ecbe0b;
        color: #302e26;
        transition: color 0.2s ease-in;
        line-height: 35px;
        cursor: pointer;
        i {
          font-size: 26px;
        }
      }
      p:hover {
        color: #fff;
      }
    }
  }
  .backTop {
    width: 70px;
    height: 68px;
    position: absolute;
    top: -34px;
    left: 50%;
    margin-left: -35px;
    z-index: 7;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    img {
      width: 70px;
      height: 68px;
    }
  }
  .backTop:hover {
    transform: translateY(-5px) scale(1.1);
  }
}
.copyright {
  height: 70px;
  background: #000000;
  line-height: 70px;
  text-align: center;
  font-size: 13px;
  font-weight: 400;
  color: rgba(184, 184, 184, 1);
}
</style>
