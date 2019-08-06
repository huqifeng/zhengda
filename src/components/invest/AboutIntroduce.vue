<template>
  <div class="contentBox">
    <div class="bjBox">
      <img :src="bjImg" alt />
    </div>
    <div class="titleBox clearFloat">
      <div class="leftBox"></div>
      <div class="rightBox">
        <p class="en">ABOUT SINOBIOPHARM</p>
        <p class="cn">公司介绍</p>
      </div>
    </div>
    <div class="bannerContent clearFloat">
      <div class="leftBox">
        <swiper ref="mySwiper2" class="swiperBox" :options="swiperOption">
          <swiper-slide class="slide" v-for="(item,index) in swiperImgList1" :key="index">
            <img :src="item.imgUrl" />
          </swiper-slide>
        </swiper>

        <div class="buttonBox">
          <div class="dianBox">
            <div
              v-for="(item,index) in swiperImgList1"
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
      <div class="rightBox">
        <p v-for="(item,index) in jianjie" :key="index" :class="[index=='0'?'blod':'']">{{item}}</p>
      </div>
    </div>
    <ul class="roleList clearFloat">
      <li class="roleLi" v-for="(item,index) in roleList" :key="index">
        <div class="imgBox">
          <img :src="item.imgUrl" alt />
        </div>
        <div class="topBox">
          <div class="iconWrap">
            <p class="iconBox">
              <i :class="['iconfont',item.iconName]"></i>
            </p>
            <p class="text">{{item.roleName}}</p>
          </div>
          <div class="textBox">
            <p v-for="(item2,index2) in item.textList" :key="index2">{{item2}}</p>
          </div>
          <div class="bottonText">{{item.en}}</div>
        </div>
      </li>
    </ul>
    <div class="conceptListBox">
      <div class="bjImgBox">
        <img src="../../assets/aboutImg1.png" alt />
      </div>
      <ul class="conceptList">
        <li class="conceptLi" v-for="(item,index) in conceptList" :key="index">
          <div class="iconBox">
            <i :class="['iconfont',item.iconName]"></i>
          </div>
          <p class="title">{{item.title}}</p>
          <div class="contentList">
            <p v-for="(item2,index2) in item.contentList" :key="index2">{{item2}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="teamWrap">
      <div class="titleBox">
        <p class="cn">管理团队</p>
        <p class="en">－ABOUT MANAGEMENT TEAM－</p>
      </div>
      <div class="swiperWrap">
        <swiper ref="mySwiper3" :options="swiperOption2">
          <swiper-slide class="slide" v-for="(item,index) in swiperImgList2" :key="index">
            <div class="bjColor"></div>
            <div class="imgBox">
              <img :src="item.imgUrl" />
              <div class="bj"></div>
            </div>
            <div class="nameBox">
              <p>{{item.name}}</p>
            </div>
            <div class="userBox">
              <p class="nameTitle">
                <span class="name">{{item.name}}</span>
                <span class="title">{{item.title}}</span>
              </p>
              <p class="jianjie">{{item.jianjie}}</p>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "aboutIntroduce",
  data() {
    let that = this;
    return {
      bjImg: require("../../assets/aboutBJ1.png"),
      jianjie: [
        "秉承正大集团“利国、利民、利企业”的经营原则和核心价值观，中国生物制药有限公司（1177.HK）通过在研发、生产、销售领域的持续变革和创新，已发展成为中国制药工业举足轻重的力量，业务覆盖制药、医疗、大健康等领域，控股成员企业20余家。",
        "2018年9月，中国生物制药有限公司位列福布斯中文网发布的“2018 亚洲最佳上市公司50强。中生制药核心企业正大天晴药业集团股份有限公司位列2017 年中国医药工业企业百强榜第17 位，北京泰德制药股份有限公司位列第46 位。",
        "中生制药于2000年在港交所上市，上市以来股价表现优异。2013年入选MSCI全球标准指数之中国指数成份股，2018年入选恒生指数成份股。中生制药在北京、南京、连云港、青岛等地拥有多个具有国际水平的创新研发基地和药品生产基地，涉及肝病、肿瘤、糖尿病、呼吸、心脑血管、抗感染、消化、神经等领域，拥有国内最大的靶向药物研发与生产平台、国家海洋药物中试基地。",
        "中生制药旗下共拥有逾万人的专业推广队伍，近千种产品覆盖全国各级各类医疗机构。先后推出年销售收入过亿元产品三十余个，尤其在肝病领域，多个重磅产品年销售收入超过10 亿元，在中国肝病市场占有率达到24%。秉承“健康、快乐、长寿”的企业理念，中生制药将立足自主创新，并在世界范围内引进创新技术，不断巩固在中国市场的领先地位，与更多的有识之士鼎力合作，共同分享医药健康产业的发展成果，共赢未来。"
      ],
      swiperOption: {
        loop: true,
        on: {
          slideChange: function() {
            that.activeIndex = (this.activeIndex - 3 + 5) % 4;
          }
        }
      },
      swiperOption2: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperImgList1: [
        {
          imgUrl: require("../../assets/businessSwiperImg1.png")
        },
        {
          imgUrl: require("../../assets/businessSwiperImg1.png")
        },
        {
          imgUrl: require("../../assets/businessSwiperImg1.png")
        },
        {
          imgUrl: require("../../assets/businessSwiperImg1.png")
        }
      ],
      roleList: [
        {
          iconName: "icon-chilun",
          roleName: "领跑者",
          imgUrl: require("../../assets/businessListImg1.png"),
          en: "LEADER",
          textList: [
            "特色医疗行业的创新者",
            "特色医疗行业的",
            "特色医疗行业的创新者"
          ]
        },
        {
          iconName: "icon-chilun",
          roleName: "领跑者",
          imgUrl: require("../../assets/businessListImg2.png"),
          en: "LEADER",
          textList: ["特色医疗行业的创新者", "特色医疗行业的"]
        },
        {
          iconName: "icon-chilun",
          roleName: "领跑者",
          imgUrl: require("../../assets/businessListImg3.png"),
          en: "LEADER",
          textList: ["特色医疗行业的创新者", "特色医疗行业的创新者"]
        },
        {
          iconName: "icon-chilun",
          roleName: "领跑者",
          imgUrl: require("../../assets/businessListImg4.png"),
          en: "LEADER",
          textList: [
            "特色医疗行业的创新者",
            "特色医疗行业的",
            "特色医疗行业的创新者"
          ]
        }
      ],
      conceptList: [
        {
          iconName: "icon-chilun",
          title: "公司宗旨",
          contentList: [
            "奉献爱心 ",
            "健康人类",
            "共创美好未来 ",
            "一切为了提高人类的生命质量"
          ]
        },
        {
          iconName: "icon-chilun",
          title: "三利原则",
          contentList: ["利国  ", "利民", "利企业（股东、员工)"]
        },
        {
          iconName: "icon-chilun",
          title: "管理理念",
          contentList: ["管理理念 "]
        }
      ],
      activeIndex: "",
      swiperImgList2: [
        {
          imgUrl: require("../../assets/dongshizhang.png"),
          name: "谢其润小姐",
          title: "执行董事、主席",
          jianjie:
            "现年26岁，本公司之董事会主席、执行董事以及执行董事委员会及提名委员会主席。谢小姐亦是正大天晴董事及北京泰德副董事长。"
        },
        {
          imgUrl: require("../../assets/dongshizhang2.png"),
          name: "谢其润小姐",
          title: "执行董事、主席",
          jianjie:
            "现年26岁，本公司之董事会主席、执行董事以及执行董事委员会及提名委员会主席。谢小姐亦是正大天晴董事及北京泰德副董事长。"
        },
        {
          imgUrl: require("../../assets/dongshizhang3.png"),
          name: "谢其润小姐",
          title: "执行董事、主席",
          jianjie:
            "现年26岁，本公司之董事会主席、执行董事以及执行董事委员会及提名委员会主席。谢小姐亦是正大天晴董事及北京泰德副董事长。"
        },
        {
          imgUrl: require("../../assets/dongshizhang.png"),
          name: "谢其润小姐",
          title: "执行董事、主席",
          jianjie:
            "现年26岁，本公司之董事会主席、执行董事以及执行董事委员会及提名委员会主席。谢小姐亦是正大天晴董事及北京泰德副董事长。"
        },
        {
          imgUrl: require("../../assets/dongshizhang2.png"),
          name: "谢其润小姐",
          title: "执行董事、主席",
          jianjie:
            "现年26岁，本公司之董事会主席、执行董事以及执行董事委员会及提名委员会主席。谢小姐亦是正大天晴董事及北京泰德副董事长。"
        }
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper2.swiper;
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
.bjBox {
  position: absolute;
  z-index: -1;
  right: 0;
  top: 110px;
  width: 1372px;
  height: 284px;
  img {
    vertical-align: top;
    width: 1372px;
    height: 284px;
  }
}
.titleBox {
  width: 100%;
  height: auto;

  .leftBox {
    float: left;
    height: 5px;
    width: 248px;
    height: 5px;
    background: rgba(115, 115, 115, 1);
    border-radius: 3px;
    margin: 0 25px;
    margin-top: 42px;
  }
  .rightBox {
    float: left;
    width: 900px;
    p {
      text-align: left;
    }
    .en {
      height: 42px;
      font-size: 42px;
      font-weight: bold;
      color: rgba(68, 64, 49, 1);
      line-height: 42px;
      margin-bottom: 12px;
    }
    .cn {
      height: 30px;
      font-size: 30px;
      font-weight: 400;
      color: rgba(59, 56, 44, 1);
      line-height: 30px;
    }
  }
}
.bannerContent {
  width: 100%;
  margin-top: 117px;
  .leftBox {
    float: left;
    width: 400px;
    height: 652px;
    margin: 0 70px 0 110px;
    .swiperBox {
      width: 400px;
      height: 600px;
      .slide {
        width: 400px;
        height: 600px;
        // object-fit: cover;
        img {
          width: 400px;
          height: 600px;
          object-fit: cover;
        }
      }
    }
    .buttonBox {
      margin-top: 24px;
      height: 30px;
      text-align: left;
      .dianBox {
        display: inline-block;
        height: 30px;
        margin-right: 30px;
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
  }
  .rightBox {
    float: left;
    width: 620px;
    .blod {
      color: rgba(0, 0, 0, 1);
      margin-top: 52px;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      color: rgba(119, 119, 119, 1);
      line-height: 24px;
      margin-bottom: 30px;
      text-align: left;
    }
  }
}
.roleList {
  width: 100%;
  margin-top: 106px;
  .roleLi {
    float: left;
    width: 300px;
    height: 800px;
    position: relative;
    .imgBox {
      position: absolute;
      z-index: -1;
      img {
        width: 300px;
        height: 800px;
        object-fit: cover;
      }
    }
    .topBox {
      width: 300px;
      height: 800px;
      background: rgba(0, 0, 0, 0.26);
      overflow: hidden;
      position: relative;
      transition: all 0.3s ease-in;
      .iconWrap {
        height: 90px;
        width: 100px;
        color: #fff;
        text-align: center;
        transition: all 0.4s ease-in;
        margin: 320px auto 0;
        position: relative;
        .iconBox {
          margin-bottom: 4px;
          height: 50px;
          line-height: 50px;
          .iconfont {
            font-size: 40px;
          }
        }
        .text {
          height: 20px;
          font-size: 20px;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          line-height: 20px;
        }
      }
      .iconWrap:after {
        content: "";
        position: absolute;
        left: 32px;
        bottom: 0px;
        width: 34px;
        height: 4px;
        background: #fff;
        border-radius: 2px;
      }
      .textBox {
        transition: all 0.4s ease-in;
        opacity: 0;
        width: 120px;
        text-align: center;
        margin: 106px auto 0;
        p {
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 32px;
        }
      }
    }
    .bottonText {
      transition: all 0.4s ease-in;
      position: absolute;
      height: 80px;
      width: 300px;
      left: 0;
      bottom: -36px;
      opacity: 0.28;
      text-align: center;
      z-index: 5;
      font-size: 60px;
      line-height: 80px;
      font-weight: bold;
      font-family: ProstoSans-Bold;
      color: rgba(255, 255, 255, 1);
    }
  }
  .roleLi:hover {
    .topBox {
      background: linear-gradient(
        0deg,
        rgba(242, 194, 8, 0.5),
        rgba(221, 208, 159, 0.5)
      );
    }
    .topBox .iconWrap {
      margin: 167px auto 0;
    }
    .topBox .textBox {
      opacity: 1;
    }
    .topBox .bottonText {
      opacity: 1;
    }
  }
}
.conceptListBox {
  width: 100%;
  height: 350px;
  position: relative;
  margin-top: 190px;
  .bjImgBox {
    position: absolute;
    width: 1920px;
    height: 260px;
    bottom: 8px;
    left: -360px;
    z-index: -1;
  }
  .conceptList {
    width: 1110px;
    height: 350px;
    margin: 0 auto;
    .conceptLi {
      display: inline-block;
      width: 150px;
      margin: 0 110px 0;
      vertical-align: top;
      .iconBox {
        width: 150px;
        height: 150px;
        background: rgba(255, 255, 255, 1);
        border: 3px solid rgba(236, 190, 11, 1);
        border-radius: 50%;
        box-sizing: border-box;
        line-height: 150px;
        .iconfont {
          font-size: 60px;
          color: #ecbe0b;
        }
      }
      .title {
        height: 50px;
        font-size: 20px;
        color: rgba(236, 190, 11, 1);
        line-height: 60px;
      }
      .contentList {
        p {
          font-size: 14px;
          color: rgba(255, 255, 255, 1);
          line-height: 24px;
        }
      }
    }
  }
}
.teamWrap {
  width: 100%;
  margin-top: 160px;
  .titleBox {
    width: 100%;
    text-align: center;
    .cn {
      height: 46px;
      font-size: 30px;
      color: rgba(0, 0, 0, 1);
      line-height: 46px;
    }
    .en {
      height: 20px;
      font-size: 20px;
      color: rgba(0, 0, 0, 1);
      font-weight: bold;
      line-height: 20px;
    }
  }
  .swiperWrap {
    width: 1100px;
    margin: 88px auto 0;
    height: 730px;
    background-image: url("../../assets/jiao.png");
    background-position: right 120px;
    background-repeat: no-repeat, repeat;
    background-size: 1100px;
    .swiper-container {
      height: 730px;
    }
    .slide {
      transform: scale(0.82);
      transition: all 0.3s ease-in;
      height: 680px;
      position: relative;
      .bjColor {
        position: absolute;
        width: 100%;
        height: 436px;
        left: 0;
        bottom: 130px;
        background: #eeeeee;
        transition: background 0.3s ease-in;
        z-index: -1;
      }
      .imgBox {
        width: 348px;
        height: 550px;
        margin: 0 auto;
        img {
          width: 348px;
          height: 550px;
          object-fit: cover;
        }
      }
      .nameBox {
        position: absolute;
        opacity: 1;
        transition: opacity 0.3s ease-in;
        height: 50px;
        top: 450px;
        left: -10px;
        p {
          height: 50px;
          padding: 0 20px;
          font-size: 20px;
          line-height: 50px;
          background: #f9c706;
          font-weight: bold;
        }
      }
      .userBox {
        opacity: 0;
        transition: opacity 0.3s ease-in;
        width: 320px;
        height: 210px;
        position: absolute;
        left: 14px;
        bottom: 10px;
        background: rgba(247, 247, 247, 1);
        box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.1);
        .nameTitle {
          width: 342px;
          height: 50px;
          background: rgba(48, 46, 38, 1);
          position: absolute;
          left: -11px;
          top: 14px;
          line-height: 50px;
          color: #ecbe0b;
          span {
            display: inline-block;
          }
          .name {
            font-size: 20px;
            font-weight: bold;
          }
          .title {
            font-size: 17px;
            margin-left: 12px;
          }
        }
        .jianjie {
          width: 220px;
          margin: 80px auto 0;
          font-size: 14px;
          color: rgba(0, 0, 0, 1);
          line-height: 24px;
        }
      }
    }
    .swiper-slide-next {
      transform: scale(1);
      .userBox {
        opacity: 1;
      }
      .nameBox {
        opacity: 0;
      }
      .bjColor {
        background: #f9c706;
      }
    }
    .swiper-pagination {
      .swiper-pagination-bullet-active {
        background: #fff !important;
      }
    }
  }
}
</style>


