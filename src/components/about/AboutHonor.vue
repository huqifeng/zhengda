<template>
  <div class="contentBox">
    <TwoHeaderTitle :op="op"></TwoHeaderTitle>
    <p class="jiangxiang">{{jiangxiang}}</p>
    <div class="lineTimeBox">
      <div class="topTextBox textBox">
        <div class="topOneBox">
          <p class="textAglinLeft">中国生物制药有限公司首次被《福布斯》评选为全球上市公司2000强</p>
          <p class>中生制药评选成为2017年度港股综合实力100強</p>
        </div>
        <div class="topTwoBox">
          <p class="textAglinCenter">中国生物获选成为恒生综合行业指数－消费品制造业和恒生综合小市值指数成份股</p>
        </div>
        <div class="topThreeBox">
          <p class="textAglinCenter">
            中国生物获
            <br />《福布斯杂志》选为
            <br />2005年亚太区内市值
            <br />在十亿美元以下最优
            <br />秀公司之一
          </p>
          <p class="textAglinCenter">
            中国生物获
            <br />经济一周》评定为
            <br />「2005年香港
            <br />杰出企业」
          </p>
        </div>
      </div>
      <div class="lineImgBox">
        <img :src="lineImgUrl" alt />
      </div>
      <div class="bottomTextBox textBox">
        <div class="bottomOneBox">
          <p class="textAglinLeft">
            中国生物制药有限公司
            被《财富》评选为
            「中国500强」企业之一
          </p>
          <p class="textAglinLeft">
            中国生物制药入选美国
            《PharmExec》全球制药企业TOP50
          </p>
          <p class="textAglinLeft">
            中国生物制药纳入
            MSCI中国指数
          </p>
        </div>
        <div class="bottomTwoBox">
          <p class="textAglinCenter">
            中国生物制药有限公司
            被评为福布斯亚洲
            Fabulous 50 公司，中生制药是五家
            被入选制药公司之一
          </p>
        </div>
        <div class="bottomThreeBox">
          <p class="textAglinCenter">
            《资本杂志》评选为
            「中国杰出企业成就奖」
          </p>
        </div>
      </div>
    </div>
    <div class="ziJiangxiang">
      <p class="jiangxiang zi">{{zijiangxiang}}</p>
      <div class="jianjie">
        <div class="imgBox">
          <img :src="ziJXImgUrl" alt />
        </div>
        <div class="textBox">
          <p class="text" v-for="(item,index) in textList" :key="index">{{item}}</p>
        </div>
      </div>
      <p class="jiangxiang can">{{zijiangxiang}}</p>
      <div class="jinjiangBox">
        <div class="leftbox box">
          <div class="buttonBox">
            <p class="text">
              天晴甘美
              <br />及生产办法
            </p>
            <img :src="yaoImgUrl" alt />
          </div>
          <p class="bottomText">
            获得由
            <br />《世界知识产权组织》
            <br />和《国家知识产权局》
            <br />联合授予
            <br />第十届中国专利奖金奖
          </p>
        </div>
        <div class="rightbox box">
          <div class="buttonBox">
            <p class="text">
              天晴甘美
              <br />注射液
            </p>
            <img :src="zhenImgUrl" alt />
          </div>
          <p class="bottomText">
            获得在中国
            <br />知识产权局主办的
            <br />「第三届中国国际专利与名牌博览会」
            <br />上夺得金奖
          </p>
        </div>
      </div>
    </div>
    <div class="qitaJiangxiang">
      <p class="title">其 | 他 | 奖 |项</p>
      <div class="textBox">
        <p class="text" v-for="(item,index) in qitaTextList" :key="index">{{item}}>{{item}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import TwoHeaderTitle from "../TwoHeaderTitle.vue";
export default {
  name: "aboutHonor",
  data() {
    return {
      op: [
        {
          type: "en",
          value: "CORPOPATE"
        },
        {
          type: "en",
          value: "HONOUR"
        },
        {
          type: "cn",
          value: "公司荣誉"
        }
      ],
      jiangxiang: "中国生物制药重要奖项",
      zijiangxiang: "子公司重要奖项",
      lineImgUrl: require("../../assets/about/honor/lineTime.png"),
      ziJXImgUrl: require("../../assets/about/honor/ziJXImg.png"),
      textList: [
        "正大天晴被中国医药工业信息中心评为「二零一四年中国医药研发产品线最佳工业企业」Industrial Information Centre.",

        "正大天晴被国家发展改革委员会、科技部、财政部、海关总署及国家税务总局评为「国家认定企业技术中心」",

        "正大天晴被中国医药统计局选为「二零一三年度中国医药工业百强第25名」",

        "正大天晴获得江苏省人民政府授予「二零一二年度江苏省科学技术奖」"
      ],
      yaoImgUrl: require("../../assets/about/honor/yao.png"),
      zhenImgUrl: require("../../assets/about/honor/zhen.png"),
      zyTextList: [
        "正大天晴被中国医药工业信息中心评为「二零一四年中国医药研发产品线最佳工业企业」Industrial Information Centre.",
        "正大天晴被国家发展改革委员会、科技部、财政部、海关总署及国家税务总局评为「国家认定企业技术中心」",
        "正大天晴被中国医药统计局选为「二零一三年度中国医药工业百强第25名」",
        "正大天晴获得江苏省人民政府授予「二零一二年度江苏省科学技术奖」"
      ],
      qitaTextList: [
        "甘利欣注射液和胶囊」在健康报社、健康文摘报社、中国卫生杂志及大众健康杂志联合举办的百姓安全用药调查活动中，被评为「百姓放心药品牌」.",
        "「天晴甘美注射液」获江苏省政府授予「江苏省科技进步二等奖」",
        "「天晴甘平肠溶胶囊」获中国科学技术部颁发「国家火炬计划项目证书」.",
        "「凯时注射液」获得中国科学技术部、中国商务部、中国国家质量监督检验检疫总局",
        "及国家环境保护总局共同颁布的「国家重点新产品」证书"
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper2.swiper;
    }
  },
  methods: {},
  components: {
    TwoHeaderTitle
  }
};
</script>
<style lang="less" scoped>
.contentBox {
  width: 1200px;
  height: auto;
  margin: 0 auto;
  padding-top: 105px;
}
.jiangxiang {
  height: 67px;
  font-size: 36px;
  font-family: SourceHanSansCN-Bold;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  line-height: 67px;
  padding-left: 40px;
  background: #dcdbdb;
  text-align: left;
  margin-top: 70px;
}
.lineTimeBox {
  width: 100%;
  margin-top: 60px;
  .textBox {
    width: 100%;
    position: relative;
    height: 300px;
    div {
      position: absolute;
      width: 225px;
      p {
        width: 225px;
        font-size: 18px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: rgba(4, 4, 4, 1);
        line-height: 31px;
      }
      .textAglinLeft {
        text-align: left;
      }
      .textAglinCenter {
        text-align: center;
      }
    }
  }
  .lineImgBox {
    width: 100%;
    height: 181px;
    margin-left: 99px;
    margin-top: 21px;
    text-align: left;
    img {
      vertical-align: top;
      width: 939px;
      height: 181px;
    }
  }
  .topTextBox {
    div {
      bottom: 0;
      p {
        margin-top: 31px;
      }
    }
    .topOneBox {
      left: 294px;
    }
    .topTwoBox {
      left: 605px;
    }
    .topThreeBox {
      left: 891px;
    }
  }
  .bottomTextBox {
    margin-top: 25px;
    div {
      top: 0;
      p {
        margin-bottom: 31px;
      }
    }
    .bottomOneBox {
      left: 99px;
    }
    .bottomTwoBox {
      left: 471px;
    }
    .bottomThreeBox {
      left: 768px;
    }
  }
}
.ziJiangxiang {
  width: 1200px;
  margin-top: 81px;
  .jianjie {
    position: relative;
    width: 1200px;
    height: 603px;
    .imgBox {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      img {
        vertical-align: top;
        width: 100%;
        height: 100%;
      }
    }
    .textBox {
      width: 692px;
      position: absolute;
      width: 692px;
      height: 320px;
      top: 195px;
      right: 60px;
      p {
        font-size: 18px;
        font-family: SourceHanSansCN-Bold;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 31px;
        margin-bottom: 31px;
        text-align: left;
      }
    }
    .textBox:before {
      content: "";
      width: 10px;
      height: 54px;
      border-radius: 5px 5px;
      background: #fff;
      position: absolute;
      left: -32px;
      top: 0;
    }
  }
  .can {
    background: #ecbe0b;
    margin-top: 0;
  }
  .jinjiangBox {
    height: 656px;
    background: #f1efef;
    .box {
      display: inline-block;
      width: 50%;
      height: 100%;
      vertical-align: top;
      text-align: center;
      .buttonBox {
        width: 276px;
        height: 276px;
        background: rgba(48, 46, 38, 1);
        border-radius: 50%;
        overflow: hidden;
        display: inline-block;
        margin-top: 112px;
        .text {
          margin-top: 30px;
          text-align: center;
          font-size: 26px;
          font-family: SourceHanSansCN-Bold;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          line-height: 31px;
          margin-top: 58px;
        }
        img {
          margin-top: 22px;
        }
      }
      .bottomText {
        font-size: 18px;
        font-family: SourceHanSansCN-Bold;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        line-height: 31px;
        margin-top: 32px;
      }
    }
  }
}
.qitaJiangxiang {
  margin-top: 55px;
  .title {
    height: 28px;
    font-size: 24px;
    font-family: SourceHanSansCN-Bold;
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
    line-height: 28px;
    margin-left: 180px;
    text-align: left;
  }
  .textBox {
    width: 756px;
    margin: 53px 0 0 258px;
    position: relative;
    .text {
      width: 756px;
      font-size: 18px;
      font-family: SourceHanSansCN-Bold;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
      line-height: 31px;
      text-align: left;
      margin-bottom: 31px;
    }
  }
  .textBox:before {
    content: "";
    width: 10px;
    height: 54px;
    border-radius: 5px 5px;
    background: #73807e;
    position: absolute;
    left: -74px;
    top: 0;
  }
}
</style>


