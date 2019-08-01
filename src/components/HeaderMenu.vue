<template>
  <div class="HeaderMenu">
    <div class="top">
      <div class="language">CN / EN</div>
      <div class="seach"></div>
    </div>
    <div class="bottom">
      <div class="logoBox">
        <img src="../assets/sinologo.png" alt />
      </div>
      <ul class="menuBox">
        <li class="menuLi" v-for="(item,index) in menu" v-bind:key="index">
          <div class="menuLiTextBox">
            <p class="text">{{item.title}}</p>
            <div class="bottomLine"></div>
          </div>
          <ul class="menuLiList" v-if="item.list &&item.list.length>0">
            <li v-for="(item2,index2) in item.list" v-bind:key="index2">{{item2.title}}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aa: "222",
      theme1: "light",
      menu: [
        {
          title: "关于中生",
          path: "",
          list: [
            {
              title: "关于中生",
              path: ""
            },
            {
              title: "关于中生",
              path: ""
            },
            {
              title: "关于中生",
              path: ""
            }
          ]
        },
        {
          title: "我们的业务",
          path: ""
        },
        {
          title: "我们的技术",
          path: ""
        },
        {
          title: "新闻中心",
          path: ""
        },
        {
          title: "社会责任",
          path: ""
        },
        {
          title: "投资者关系",
          path: ""
        },
        {
          title: "职业发展",
          path: ""
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.HeaderMenu {
  width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
  font-size: 16px;
}
.top {
  height: 30px;
  text-align: right;
}
.language {
  display: inline-block;
  width: 100px;
  height: 28px;
  border: 1px solid rgba(252, 200, 0, 1);
  border-radius: 14px;
  text-align: center;
  line-height: 28px;
  font-size: 16px;
  font-family: PingFangSC-Light;
  font-weight: 300;
  color: rgba(251, 199, 0, 1);
  vertical-align: top;
  margin-right: 32px;
}
.seach {
  display: inline-block;
  width: 30px;
  height: 30px;
  vertical-align: top;
}
.bottom {
  height: 50px;
}
.logoBox {
  float: left;
  img {
    height: 50px;
    width: 237px;
  }
}
.menuBox {
  float: right;
  height: 50px;
  width: 932px;
  text-align: right;
  .menuLi {
    display: inline-block;
    height: 30px;
    position: relative;
    margin: 20px 25px 0;
    cursor: pointer;
    .menuLiTextBox {
      height: 30px;
      .text {
        height: 26px;
        line-height: 18px;
        font-size: 18px;
        font-weight: 600;
        color: #fff;
        transition: color 0.2s ease-in;
      }
      .bottomLine {
        opacity: 0;
        height: 4px;
        width: 100%;
        border-bottom: 2px solid #fcc800;
        position: relative;
        transition: opacity 0.2s ease-in;
      }
      .bottomLine:before {
        content: "";
        width: 0;
        height: 0;
        border-width: 4px;
        border-style: solid;
        border-color: transparent transparent #fcc800 transparent;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
    .menuLiList {
      position: absolute;
      left: 0;
      top: 29px;
      display: none;
      padding-top: 21px;
      text-align: center;
      width: 100%;
      li {
        height: 30px;
        font-size: 16px;
        color: #fff;
        transition: color 0.2s ease-in;
      }
      li:hover {
        color: #fcc800;
      }
    }
  }
  .menuLi:hover {
    & .menuLiTextBox .text {
      color: #fcc800;
    }
    & .menuLiTextBox .bottomLine {
      opacity: 1;
    }
    & .menuLiList {
      display: block;
    }
  }
  .menuLiActive {
    .menuLiTextBox .text {
      color: #fcc800;
    }
    .menuLiTextBox .bottomLine {
      opacity: 1;
    }
    .menuLiList {
      display: block;
    }
  }
}
</style>
