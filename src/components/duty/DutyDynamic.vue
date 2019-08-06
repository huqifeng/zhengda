<template>
  <div class="DutyDynamic">
    <div class="titleBox">
      <img :src="titleImgUrl" alt />
    </div>
    <ul class="listBox">
      <li
        class="listLi"
        v-for="(item,index) in listData"
        :key="index"
        :class="[index%2 == 0?'one':'two']"
      >
        <div class="imgBox">
          <img :src="item.imgUrl" alt />
        </div>
        <div class="textBox">
          <div class="textContent">
            <div class="imgBox">
              <img :src="item.imgUrl" alt />
            </div>
            <div class="textWrap">
              <p class="textTitle1">{{item.title}}</p>
              <p class="textTitle2">{{item.title2}}</p>
              <p class="text">{{item.text}}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titleImgUrl: require("../../assets/duty/dynamic/title1.png"),
      listData: [
        {
          title: "环境保护",
          title2: "Environmental protection",
          text:
            "建设EHS管理体系，高度重视节能减排，提高资源利用率，倡导绿色出行。",
          imgUrl: require("../../assets/duty/dynamic/listImg/img1.png")
        },
        {
          title: "环境保护",
          title2: "Environmental protection",
          text:
            "建设EHS管理体系，高度重视节能减排，提高资源利用率，倡导绿色出行。",
          imgUrl: require("../../assets/duty/dynamic/listImg/img2.png")
        },
        {
          title: "环境保护",
          title2: "Environmental protection",
          text:
            "建设EHS管理体系，高度重视节能减排，提高资源利用率，倡导绿色出行。",
          imgUrl: require("../../assets/duty/dynamic/listImg/img3.png")
        },
        {
          title: "环境保护",
          title2: "Environmental protection",
          text:
            "建设EHS管理体系，高度重视节能减排，提高资源利用率，倡导绿色出行。",
          imgUrl: require("../../assets/duty/dynamic/listImg/img4.png")
        },
        {
          title: "环境保护",
          title2: "Environmental protection",
          text:
            "建设EHS管理体系，高度重视节能减排，提高资源利用率，倡导绿色出行。",
          imgUrl: require("../../assets/duty/dynamic/listImg/img5.png")
        },
        {
          title: "环境保护",
          title2: "Environmental protection",
          text:
            "建设EHS管理体系，高度重视节能减排，提高资源利用率，倡导绿色出行。",
          imgUrl: require("../../assets/duty/dynamic/listImg/img6.png")
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.DutyDynamic {
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
