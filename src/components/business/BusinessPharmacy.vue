<template>
  <div class="contentBox">
    <div class="bjBox">
      <img :src="bjImg" alt />
    </div>
    <div class="leftBox">
      <p class="title1">SinoBiopharmaceutical Limited</p>
      <p class="title2">中国生物制药</p>
      <p class="line"></p>
      <p
        class="textBox"
      >公司所有制造基地的生产车间配备国内外一流的全自动化生产线，均通过中国新版GMP认证许可。其中，北京泰德制药股份有限公司获得日本厚生劳动省颁发的《医药品外国制造业者认证证书》；正大天晴药业通过欧盟GMP认证。多项药品生产位居全国首位。</p>
      <div class="button more">了解更多</div>
    </div>
    <div class="rightBox">
      <div class="swiperWrap">
        <div class="swiperBox">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide class="slide" v-for="(item,index) in bannerContent" :key="index">
              <img :src="item.imgUrl" />
              <div class="slideContent">
                <div class="iconBox">
                  <i :class="['iconfont',item.iconClass]"></i>
                </div>
                <div class="textBox">
                  <p class="icon">
                    <i :class="['iconfont',item.iconClass]"></i>
                  </p>
                  <p class="text">{{item.text}}</p>
                  <p class="line2"></p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="buttonBox">
            <div class="dianBox">
              <div
                v-for="(item,index) in bannerContent"
                :key="index"
                :class="index == activeIndex?'active':''"
              ></div>
            </div>
            <div class="nextLastBox">
              <div class="lastBox" @click="lastClick">
                <i class="iconfont icon-left"></i>
              </div>
              <div class="nextBox" @click="nextClick">
                <i class="iconfont icon-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pharmacy",
  data() {
    let that = this;
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        on: {
          slideChange: function() {
            that.activeIndex = (this.activeIndex - 3 + 5) % 5;
          }
        }
      },
      bannerContent: [
        {
          imgUrl:
            "http://www.rwxqfbj.com/files/attached/201708/24/201708241629559130.jpg",
          text: "最大的肝病药生产商1",
          iconClass: "icon-yao"
        },
        {
          imgUrl:
            "http://www.rwxqfbj.com/files/attached/201708/24/201708241629559130.jpg",
          text: "最大的肝病药生产商2",
          iconClass: "icon-chilun"
        },
        {
          imgUrl:
            "http://www.rwxqfbj.com/files/attached/201708/24/201708241629559130.jpg",
          text: "最大的肝病药生产商3",
          iconClass: "icon-yao"
        },
        {
          imgUrl:
            "http://www.rwxqfbj.com/files/attached/201708/24/201708241629559130.jpg",
          text: "最大的肝病药生产商4",
          iconClass: "icon-chilun"
        },
        {
          imgUrl:
            "http://www.rwxqfbj.com/files/attached/201708/24/201708241629559130.jpg",
          text: "最大的肝病药生产商5",
          iconClass: "icon-yao"
        }
      ],
      activeIndex: "",
      bjImg: require("../../assets/businessBJ.png")
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    lastClick() {
      this.swiper.slidePrev();
    },
    nextClick() {
      this.swiper.slideNext();
    }
  }
};
</script>
<style lang="less" scoped>
.contentBox {
  width: 1200px;
  height: auto;
  margin: 0 auto;
  padding-top: 148px;
}
.contentBox:after {
  content: "";
  clear: both;
  display: block;
}
.leftBox,
.rightBox {
  float: left;
  width: 600px;
}
.leftBox {
  box-sizing: border-box;
  padding-left: 75px;
  padding-top: 160px;
  text-align: left;
}
.title1 {
  font-size: 24px;
  font-family: PingFangSC-Medium;
  font-weight: bold;
  color: rgba(182, 182, 182, 1);
  line-height: 24px;
  height: 24px;
}
.title2 {
  height: 30px;
  font-size: 30px;
  font-family: PingFangSC-Medium;
  font-weight: bold;
  color: rgba(48, 46, 38, 1);
  line-height: 30px;
  margin-top: 6px;
}
.line {
  width: 143px;
  height: 1px;
  position: relative;
  background: #363636;
  margin-top: 50px;
}
.line:before {
  content: "";
  width: 20px;
  height: 3px;
  background: #363636;
  position: absolute;
  left: 0;
  top: -1px;
}
.line:after {
  content: "";
  width: 3px;
  height: 3px;
  border-radius: 2px;
  background: #363636;
  position: absolute;
  right: 0;
  top: -1px;
}
.textBox {
  width: 450px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 24px;
  margin-top: 70px;
}
.more {
  width: 131px;
  height: 38px;
  background: rgba(39, 76, 99, 1);
  border-radius: 4px 4px 4px 4px;
  margin-top: 38px;
  color: #fff;
  line-height: 38px;
  text-align: center;
  font-size: 14px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  transition: background 0.15s ease-in;
  cursor: pointer;
}
.more:hover {
  background: #fadb5a;
}
.rightBox {
  height: 700px;
}
.swiperWrap {
  width: 100%;
  height: 650px;
  position: relative;
}
.swiperBox {
  height: 650px;
  width: 1300px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
  .swiper-container {
    height: 680px;
  }
  .slide {
    height: 650px;
    transition: transform 0.3s ease-out;
    position: relative;
    border: 1px solid rgba(224, 224, 224, 1);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .slideContent {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.36);
      overflow: hidden;
      .iconBox {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        justify-content: center;
        align-items: center;
        display: flex;
        opacity: 0;
        transition: opacity 0.3s ease-in;
        .iconfont {
          font-size: 80px;
          margin-top: -50px;
          color: #fff;
        }
      }
      .textBox {
        position: absolute;
        width: 100%;
        height: 40%;
        left: 0;
        bottom: 0;
        background: #fff;
        transition: transform 0.3s ease-in;
        .icon {
          width: 100%;
          height: 50px;
          text-align: center;
          line-height: 50px;
          margin-top: 50px;
          .iconfont {
            color: #ecbe0b;
            font-size: 40px;
          }
        }
        .text {
          width: 100%;
          font-size: 20px;
          font-family: PingFangSC-Regular;
          font-weight: bold;
          color: rgba(48, 46, 38, 1);
          line-height: 20px;
          margin-top: 10px;
        }
        .line2 {
          width: 35px;
          height: 5px;
          background: rgba(236, 190, 11, 1);
          border-radius: 3px;
          margin: 20px auto 0px;
        }
      }
    }
    .slideContent:hover {
      .iconBox {
        opacity: 1;
      }
      .textBox {
        transform: translateY(100%);
      }
    }
  }
  .swiper-slide-next {
    transform: scale(0.9) translateX(-20px);
  }
  .swiper-slide-next ~ .slide {
    transform: scale(0.8) translateX(-100px);
  }
  .swiper-slide-next ~ .slide ~ .slide {
    transform: scale(0.7) translateX(-300px);
  }
}
.buttonBox {
  margin-top: 10px;
  height: 30px;
  text-align: left;
  margin-left: 10px;
  .dianBox {
    display: inline-block;
    height: 30px;
    width: 110px;
    div {
      float: left;
      width: 8px;
      height: 8px;
      border: 1px solid rgba(137, 137, 137, 1);
      border-radius: 50%;
      background: rgba(137, 137, 137, 1);
      margin: 10px 5px 10px 0;
    }
    .active {
      background: #fff;
    }
  }
  .nextLastBox {
    display: inline-block;
    width: 60px;
    height: 30px;
    div {
      float: left;
      width: 30px;
      height: 30px;
      text-align: center;
      .iconfont {
        font-size: 10px;
        line-height: 30px;
        color: #fff;
      }
    }
    .lastBox {
      background: #fadb5a;
    }
    .nextBox {
      background: #393939;
    }
  }
}
.bjBox {
  position: absolute;
  z-index: -1;
  left: 0;
  top: 24px;
  width: 982px;
  height: 264px;
  img {
    vertical-align: top;
    width: 982px;
    height: 264px;
  }
}
</style>


