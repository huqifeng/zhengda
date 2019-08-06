<template>
  <div class="newsDynamic">
    <div class="title">
      <img :src="titleImg1" alt />
    </div>
    <div class="bannerBox">
      <div class="swiperBox">
        <swiper ref="mySwiper4" :options="swiperOption6">
          <swiper-slide class="slide" v-for="(item,index) in swiperData" :key="index">
            <div class="leftBox">
              <div class="leftContent">
                <p class="leftTitle">{{item.title}}</p>
                <p class="content">{{item.content}}</p>
                <p class="time">
                  <i class="iconfont icon-time"></i>
                  <span class="timeText">{{item.time}}</span>
                </p>
              </div>
            </div>
            <div class="rightBox">
              <div class="imgBox">
                <img :src="item.imgUrl" alt />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="lastBtn swiperBtn" @click="lastClick">
        <i class="iconfont icon-left"></i>
      </div>
      <div class="nextBtn swiperBtn" @click="nextClick">
        <i class="iconfont icon-right"></i>
      </div>
    </div>
    <div class="newListWrap">
      <div class="titleBox">
        <img :src="titleImg2" alt />
      </div>
      <ul class="newsList">
        <li class="newsLi" v-for="(item,index) in newsData" :key="index">
          <div class="leftBox">
            <div class="imgBox">
              <img :src="item.imgUrl" alt />
            </div>
            <div class="typeImgBox">
              <img :src="item.type=='img'?imgTypeImg:videoTypeImg" alt />
            </div>
          </div>
          <div class="rightBox">
            <div class="titleTextBox">
              <p class="titleText">{{item.title}}</p>
              <p class="timeBox">
                <i class="iconfont icon-time"></i>
                <span class="time">{{item.data}}</span>
              </p>
            </div>
            <p class="contentBox">{{item.content}}</p>
          </div>
        </li>
      </ul>
      <Page :total="100" :page-size="4" class-name="ivuPage" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    // let that = this;
    return {
      swiperData: [
        {
          title: "2019中国化药研发实力排行榜TOP100 揭晓：正大天晴居首 ",
          content:
            "6月21日，由药智网、新华健康智库、西南大学、重庆市中药研究院、重庆市医疗保险研究会共同主办的「2019中国医药健康产业发展大....",
          time: "2019-07-23",
          imgUrl: require("../../assets/news/dynamic/banner/banner1.png")
        },
        {
          title: "2019中国化药研发实力排行榜TOP100 揭晓：正大天晴居首 ",
          content:
            "6月21日，由药智网、新华健康智库、西南大学、重庆市中药研究院、重庆市医疗保险研究会共同主办的「2019中国医药健康产业发展大....",
          time: "2019-07-23",
          imgUrl: require("../../assets/news/dynamic/banner/banner2.png")
        },
        {
          title: "2019中国化药研发实力排行榜TOP100 揭晓：正大天晴居首 ",
          content:
            "6月21日，由药智网、新华健康智库、西南大学、重庆市中药研究院、重庆市医疗保险研究会共同主办的「2019中国医药健康产业发展大....",
          time: "2019-07-23",
          imgUrl: require("../../assets/news/dynamic/banner/banner3.png")
        }
      ],
      newsData: [
        {
          type: "img",
          imgUrl: require("../../assets/news/dynamic/newsList/newli1.png"),
          title:
            "正大天晴首款造影剂产品获批上市正大天晴首款造影剂产品获批上市正大天晴首款造影剂产品获批上市 ",
          data: "2016-10-14",
          content:
            "近日，正大天晴研发的磁共振造影剂钆塞酸二钠注射液（显爱）获得国家药品监督管理局颁发的药品注册批件。该产品为国内首仿，也是正大天晴首个造影剂产品。"
        },
        {
          type: "img",
          imgUrl: require("../../assets/news/dynamic/newsList/newli2.png"),
          title: "正大天晴首款造影剂产品获批上市 ",
          data: "2016-10-14",
          content:
            "近日，正大天晴研发的磁共振造影剂钆塞酸二钠注射液（显爱）获得国家药品监督管理局颁发的药品注册批件。该产品为国内首仿，也是正大天晴首个造影剂产品。近日，正大天晴研发的磁共振造影剂钆塞酸二钠注射液（显爱）获得国家药品监督管理局颁发的药品注册批件。该产品为国内首仿，也是正大天晴首个造影剂产品。近日，正大天晴研发的磁共振造影剂钆塞酸二钠注射液（显爱）获得国家药品监督管理局颁发的药品注册批件。该产品为国内首仿，也是正大天晴首个造影剂产品。"
        },
        {
          type: "video",
          imgUrl: require("../../assets/news/dynamic/newsList/newli3.png"),
          title: "正大天晴首款造影剂产品获批上市 ",
          data: "2016-10-14",
          content:
            "近日，正大天晴研发的磁共振造影剂钆塞酸二钠注射液（显爱）获得国家药品监督管理局颁发的药品注册批件。该产品为国内首仿，也是正大天晴首个造影剂产品。"
        },
        {
          type: "img",
          imgUrl: require("../../assets/news/dynamic/newsList/newli4.png"),
          title: "正大天晴首款造影剂产品获批上市 ",
          data: "2016-10-14",
          content:
            "近日，正大天晴研发的磁共振造影剂钆塞酸二钠注射液（显爱）获得国家药品监督管理局颁发的药品注册批件。该产品为国内首仿，也是正大天晴首个造影剂产品。"
        }
      ],
      titleImg1: require("../../assets/news/dynamic/title1.png"),
      titleImg2: require("../../assets/news/dynamic/title2.png"),
      imgTypeImg: require("../../assets/news/dynamic/imgTypeImg.png"),
      videoTypeImg: require("../../assets/news/dynamic/videoTypeImg.png"),
      swiperOption6: {
        loop: true
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper4.swiper;
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
.newsDynamic {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  padding-top: 298px;
}
.bannerBox {
  width: 1130px;
  height: 450px;
  background: rgba(246, 246, 246, 1);
  border: 3px solid rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 13px 0px rgba(221, 221, 221, 0.75);
  margin: 0 auto;
  position: relative;
}
.title {
  position: absolute;
  left: 20px;
  top: 173px;
  width: 356px;
  height: 214px;
  z-index: 10;
  img {
    width: 356px;
    height: 214px;
  }
}
.swiperBox {
  width: 100%;
  height: 1130px;
}
.slide {
  .leftBox,
  .rightBox {
    display: inline-block;
    width: 50%;
    height: 450px;
    vertical-align: top;
  }
  .leftBox {
    text-align: left;
    .leftContent {
      width: 450px;
      margin: 152px 0 0 72px;
      .leftTitle {
        font-size: 24px;
        font-family: PingFangSC-Medium;
        font-weight: bold;
        color: rgba(56, 56, 56, 1);
        line-height: 36px;
        width: 430px;
      }
      .content {
        width: 450px;
        font-size: 16px;
        font-family: PingFangSC-Regular;
        color: rgba(72, 72, 72, 1);
        line-height: 26px;
        margin-top: 28px;
      }
      .time {
        height: 20px;
        font-size: 14px;
        font-weight: bold;
        color: rgba(72, 72, 72, 1);
        line-height: 20px;
        margin-top: 38px;
        .timeText {
          display: inline-block;
          margin-left: 10px;
        }
      }
    }
  }
  .rightBox {
    .imgBox {
      width: 488px;
      height: 282px;
      margin: 83px 0 0 0;
      .imgBox {
        width: 488px;
        height: 282px;
        vertical-align: top;
      }
    }
  }
}

.swiperBtn {
  position: absolute;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 1);
  transition: all 0.25s ease-in;
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  top: 190px;
  z-index: 10;
  color: #000;
  cursor: pointer;
  .iconfont {
    font-size: 30px;
  }
}
.swiperBtn:hover {
  background: #ecbe0b;
  color: #fff;
  border: 1px solid #ecbe0b;
}
.lastBtn {
  left: -25px;
}
.nextBtn {
  right: -25px;
}
.newListWrap {
  width: 1130px;
  border: 1px solid rgba(229, 229, 229, 1);
  position: relative;
  margin: 168px auto 0;
  padding: 98px 86px 60px 66px;
  box-sizing: border-box;
  .titleBox {
    position: absolute;
    width: 347px;
    height: 30px;
    top: -15px;
    left: 376px;
  }
  .newsList {
    width: 100%;
    .newsLi {
      width: 100%;
      height: 194px;
      margin-bottom: 36px;
      .leftBox {
        display: inline-block;
        vertical-align: top;
        width: 326px;
        height: 193px;
        position: relative;
        .typeImgBox {
          position: absolute;
          width: 62px;
          height: 62px;
          border: 3px solid rgba(255, 255, 255, 1);
          right: -34px;
          bottom: 34px;
          box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0);
        }
        .imgBox {
          width: 326px;
          height: 193px;
          transition: box-shadow 0.15s ease-in;
          img {
            width: 326px;
            height: 193px;
            object-fit: cover;
          }
        }
        .imgBox:hover {
          box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.25);
        }
      }
      .rightBox {
        width: 580px;
        height: 193px;
        vertical-align: top;
        display: inline-block;
        margin-left: 70px;
        text-align: left;
        .titleTextBox {
          line-height: 24px;
          height: 24px;
          font-size: 24px;
          margin-top: 40px;
          .titleText {
            width: 470px;
            line-height: 24px;
            height: 24px;
            font-size: 24px;
            font-weight: bold;
            color: #484848;
            overflow: hidden;
            float: left;

            white-space: nowrap; /*内容超宽后禁止换行显示*/
            overflow: hidden; /*超出部分隐藏*/
            text-overflow: ellipsis; /*文字超出部分以省略号显示*/
          }
          .timeBox {
            float: right;
            width: 110px;
            height: 24px;
            font-size: 14px;
            color: #484848;
            line-height: 24px;
            .iconfont {
              font-size: 14px;
            }
            .time {
              display: inline-block;
              margin-left: 10px;
            }
          }
        }
        .contentBox {
          margin-top: 32px;
          height: 72px;
          font-size: 14px;
          color: rgba(138, 138, 138, 1);
          line-height: 24px;
          overflow: hidden;

          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          display: -webkit-box;
        }
      }
    }
  }
}
.ivuPage {
  margin-top: 60px;
}
</style>


