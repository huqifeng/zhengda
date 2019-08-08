<template>
  <div class="CareerConcept">
    <div class="titleBox">
      <img :src="titleImgUrl1" alt />
    </div>
    <div class="listBox">
      <ul class="listBox">
        <li
          class="listLi"
          v-for="(item,index) in listData"
          :key="index"
          :class="[index%2 == 0?'one':'two']"
        >
          <div class="imgBox">
            <i :class="['iconfont',item.iconfont]"></i>
            <i class="iconfont icon-UP-"></i>
          </div>
        </li>
      </ul>
      <div class="lastBtnBox">
        <i class="iconfont icon-left"></i>
      </div>
      <div class="nextBtnBox">
        <i class="iconfont icon-right"></i>
      </div>
    </div>
    <div class="imgTextBox">
      <div class="imgBox">
        <img :src="listData[activeListNub].imgUrl" alt />
      </div>
      <div class="textBox">
        <p class="text1">{{listData[activeListNub].text1}}</p>
        <p class="text2">{{listData[activeListNub].text2}}</p>
        <p class="text3">{{listData[activeListNub].text3}}</p>
        <p class="text4">{{listData[activeListNub].text4}}</p>
      </div>
    </div>
    <div class="titleBox">
      <img :src="titleImgUrl2" alt />
    </div>
    <div class="bannerSwiperBox">
      <div class="bjBox">
        <img :src="bannerSwpierBj" alt />
      </div>
      <ul class="bannerTopList">
        <li class="bannerTopLi" v-for="(item,index) in listData2" :key="index">
          <p class="cn">{{item.cn}}</p>
          <p class="en">{{item.en}}</p>
        </li>
      </ul>
      <div class="swiperBtnBox">
        <div class="leftBox">
          <i class="iconfont icon-left"></i>
        </div>
        <div class="rightBox">
          <i class="iconfont icon-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titleImgUrl1: require("../../assets/career/concept/titleImg1.png"),
      titleImgUrl2: require("../../assets/career/concept/titleImg2.png"),
      bannerSwpierBj: require("../../assets/career/concept/contentBj.png"),
      listData: [
        {
          iconfont: "icon-boshi",
          imgUrl: require("../../assets/career/concept/listImg1.png"),
          title1: "the people",
          title2: "人",
          title3: "用对人 高效工作 经济体 ",
          title4: "The right people High performance Economic  ecosystem "
        },
        {
          iconfont: "icon-boshi",
          imgUrl: require("../../assets/career/concept/listImg1.png"),
          title1: "the people",
          title2: "人",
          title3: "用对人 高效工作 经济体 ",
          title4: "The right people High performance Economic  ecosystem "
        },
        {
          iconfont: "icon-boshi",
          imgUrl: require("../../assets/career/concept/listImg1.png"),
          title1: "the people",
          title2: "人",
          title3: "用对人 高效工作 经济体 ",
          title4: "The right people High performance Economic  ecosystem "
        },
        {
          iconfont: "icon-boshi",
          imgUrl: require("../../assets/career/concept/listImg1.png"),
          title1: "the people",
          title2: "人",
          title3: "用对人 高效工作 经济体 ",
          title4: "The right people High performance Economic  ecosystem "
        },
        {
          iconfont: "icon-boshi",
          imgUrl: require("../../assets/career/concept/listImg1.png"),
          title1: "the people",
          title2: "人",
          title3: "用对人 高效工作 经济体 ",
          title4: "The right people High performance Economic  ecosystem "
        },
        {
          iconfont: "icon-boshi",
          imgUrl: require("../../assets/career/concept/listImg1.png"),
          title1: "the people",
          title2: "人",
          title3: "用对人 高效工作 经济体 ",
          title4: "The right people High performance Economic  ecosystem "
        }
      ],
      listData2: [
        {
          cn: "诚信",
          en: "Sincerity"
        },
        {
          cn: "激情",
          en: "Passion"
        },
        {
          cn: "使命",
          en: "Mission"
        },
        {
          cn: "责任",
          en: "Responsibility"
        }
      ],
      activeListNub: 2
    };
  }
};
</script>
<style lang="less" scoped>
.CareerConcept {
  width: 1200px;
  margin: 0 auto;
}
.titleBox {
  width: 365px;
  height: 70px;
  margin: 180px auto 0;
  img {
    vertical-align: top;
    width: 365px;
    height: 70px;
  }
}
.listBox {
  width: 1000px;
  margin: 85px auto 0;
  .listLi {
    height: 350px;
    .imgBox,
    .textBox {
      width: 500px;
      height: 350px;
    }
    .imgBox {
      img {
        width: 500px;
        height: 350px;
        object-fit: cover;
      }
    }
    .textBox {
      position: relative;
      .textContent {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        transition: all 0.2s ease-in;
        .imgBox {
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          position: absolute;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .textWrap {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          background: #f5f5f5;
          border: 1px solid rgba(206, 206, 206, 1);
          box-sizing: border-box;
          padding: 0 53px 0 38px;
          transition: all 0.2s ease-in;
          .textTitle1 {
            height: 36px;
            font-size: 36px;
            font-weight: bold;
            color: rgba(43, 43, 43, 1);
            line-height: 36px;
            margin-top: 87px;
            transition: color 0.2s ease-in;
          }
          .title2 {
            height: 20px;
            font-size: 20px;
            color: rgba(144, 144, 144, 1);
            line-height: 20px;
            margin-top: 21px;
            transition: color 0.2s ease-in;
          }
          .text {
            height: 48px;
            font-size: 18px;
            color: rgba(87, 86, 86, 1);
            line-height: 24px;
            margin-top: 50px;
            transition: color 0.2s ease-in;
          }
        }
      }
      .textContent:hover {
        width: 110%;
        .textWrap {
          background: rgba(0, 0, 0, 0.65);
          .textTitle1,
          .textTitle2,
          .text {
            color: #fff !important;
          }
        }
      }
    }
  }

  .one {
    .imgBox {
      float: left;
    }
    .textBox {
      float: right;
      text-align: left;
      .textContent {
        left: 0;
      }
      .textWrap {
        left: 0;
      }
    }
  }
  .two {
    .imgBox {
      float: right;
    }
    .textBox {
      float: left;
      text-align: right;
      .textContent {
        right: 0;
      }
      .textWrap {
        right: 0;
      }
    }
  }
}
</style>
