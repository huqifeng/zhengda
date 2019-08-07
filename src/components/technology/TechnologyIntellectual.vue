<template>
  <div class="TechnologyIntellectual">
    <TwoHeaderTitle :op="op"></TwoHeaderTitle>
    <h3 class="title">国家重大科技专项</h3>
    <div class="list">
      <div class="li" v-for="(item,index) in list" :key="index">
        <div class="imgNubBox">
          <div class="imgBox">
            <img :src="item.imgUrl" alt />
          </div>
          <div class="nubBox">
            <span>{{item.nub}}</span>项
          </div>
        </div>
        <p class="type">{{item.title}}</p>
      </div>
    </div>
    <h3 class="title">专利证书</h3>
    <div class="nubImgBox">
      <div class="imgBox">
        <img :src="nubImgBj" alt />
      </div>
      <ul class="nubBox">
        <li class="nubLi" v-for="(item,index) in nubList" :key="index">
          <p class="nub">
            <span class="nubText">{{item.nub}}</span>
            <span class="xiang">项</span>
          </p>
          <p class="nubName">{{item.text}}</p>
        </li>
      </ul>
    </div>
    <div class="intellectualImg">
      <img :src="intellectualImg" alt />
    </div>
  </div>
</template>
<script>
import TwoHeaderTitle from "../TwoHeaderTitle.vue";
export default {
  data() {
    return {
      op: [
        {
          type: "en",
          value: "INTELLECTUAL PROPERTY RIGHT"
        },
        {
          type: "cn",
          value: "知识产权"
        }
      ],
      list: [
        {
          title: "国家重大科技专项",
          nub: 27,
          imgUrl: require("../../assets/technology/intellectual/listImg1.png")
        },
        {
          title: "获得科技项目",
          nub: 27,
          imgUrl: require("../../assets/technology/intellectual/listImg2.png")
        }
      ],
      nubList: [
        {
          nub: 695,
          text: "发明专利总数"
        },
        {
          nub: 762,
          text: "新提交发明专利申请"
        },
        {
          nub: 762,
          text: "国家发明专利"
        }
      ],
      nubImgBj: require("../../assets/technology/intellectual/nubImgBj.png"),
      intellectualImg: require("../../assets/technology/intellectual/intellectualImg.png")
    };
  },
  components: {
    TwoHeaderTitle
  }
};
</script>
<style lang="less" scoped>
.TechnologyIntellectual {
  width: 1200px;
  margin: 117px auto 0;
  .title {
    font-size: 36px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    line-height: 40px;
    text-align: center;
    height: 40px;
    margin: 110px auto 75px;
  }
  .list {
    width: 100%;
    text-align: center;
    height: 400px;
    .li {
      width: 350px;
      height: 400px;
      margin: 0 80px;
      display: inline-block;
      .imgNubBox {
        width: 350px;
        height: 350px;
        position: relative;
        border-radius: 30px;
        overflow: hidden;
        .imgBox {
          position: absolute;
          left: 0;
          top: 0;
          width: 350px;
          height: 350px;
          img {
            vertical-align: top;
            width: 350px;
            height: 350px;
          }
        }
        .nubBox {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          background: rgba(56, 61, 85, 0.8);
          opacity: 0.8;
          border-radius: 30px;
          font-size: 36px;
          line-height: 350px;
          text-align: center;
          color: #fff;
          opacity: 0;
          transition: opacity 0.2s ease-in;
          cursor: pointer;
          span {
            font-size: 45px;
          }
        }
        .nubBox:hover {
          opacity: 1;
        }
      }
      .type {
        height: 26px;
        font-size: 26px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(87, 87, 87, 1);
        line-height: 26px;
        margin-top: 21px;
      }
    }
  }
  .nubImgBox {
    width: 100%;
    height: 600px;
    position: relative;
    .imgBox {
      position: absolute;
      width: 1920px;
      height: 600px;
      left: -360px;
      top: 0;
      z-index: -1;
      img {
        width: 1920px;
        height: 600px;
        vertical-align: top;
      }
    }
    .nubBox {
      width: 1200px;
      height: 192px;
      text-align: center;

      .nubLi {
        width: 360px;
        height: 192px;
        margin-top: 193px;
        display: inline-block;
        text-align: center;
        .nub {
          height: 162px;
          font-size: 53px;
          font-family: PingFangSC-Semibold;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          line-height: 162px;
          text-align: center;
          .nubText {
            font-size: 73px;
          }
        }
        .nubName {
          height: 30px;
          font-size: 30px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 30px;
        }
      }
    }
  }
  .intellectualImg {
    width: 710px;
    height: 206px;
    margin: 44px auto 0;
    box-shadow: 0px 10px 20px 0px rgba(146, 146, 146, 0.14);
    border-radius: 9px 9px 9px 9px;
    overflow: hidden;
    img {
      width: 710px;
      height: 206px;
    }
  }
}
</style>
