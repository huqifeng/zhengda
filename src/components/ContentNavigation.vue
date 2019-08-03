<template>
  <div class="contentNavigation">
    <div class="oneListBox listBox">
      <div class="oneLiBox">
        <div class="leftLine"></div>
        <div class="rightTextBox">
          <p class="cn">首页</p>
          <p class="en">HOME</p>
        </div>
      </div>
      <div class="segmenter">···</div>
      <div class="oneLiBox">
        <div class="leftLine"></div>
        <div class="rightTextBox">
          <p class="cn">{{twoNavName.cn}}</p>
          <p class="en">{{twoNavName.en}}</p>
        </div>
      </div>
    </div>
    <div class="twoListBox listBox">
      <router-link
        tag="div"
        class="twoLiBox"
        v-for="(item,index) in threeNavList"
        :key="index"
        :to="item.path"
      >
        {{item.title[0]}}
        <br />
        {{item.title[1]}}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContentNavigation",
  props: ["twoNavName", "threeNavList"],
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.contentNavigation {
  width: 1200px;
  margin: 23px auto 0px;
  background: #ecbe0b;
  border-radius: 4px;
  height: 72px;
  overflow: hidden;
  .listBox {
    height: 72px;
  }
  .oneListBox {
    height: 72px;
    float: left;
    background: #302e26;
    border-right: 5px solid #ffd323;
    padding: 0 30px;
    .oneLiBox {
      height: 34px;
      margin: 19px 22px 19px 0;
      float: left;
      .leftLine {
        float: left;
        width: 4px;
        height: 34px;
        border-radius: 2px 2px;
        background: #ffffff;
        margin-right: 4px;
      }
      .rightTextBox {
        float: left;
        height: 34px;
        color: #ffffff;
        text-align: left;
        .cn {
          height: 17px;
          font-size: 17px;
          line-height: 17px;
          margin-bottom: 5px;
        }
        .en {
          height: 14px;
          font-size: 14px;
          line-height: 14px;
        }
      }
    }
    .segmenter {
      float: left;
      height: 34px;
      margin: 19px 32px 19px 0;
      line-height: 34px;
      color: #fff;
      font-size: 24px;
    }
  }
  .twoListBox {
    height: 72px;
    float: right;
    .twoLiBox {
      float: left;
      text-align: left;
      // width: 36px;
      font-size: 14px;
      line-height: 18px;
      color: #302e27;
      padding: 6px 6px;
      font-weight: 800;
      border-radius: 6px;
      margin: 12px 13px;
      position: relative;
      border: 2px solid rgba(0, 0, 0, 0);
      cursor: pointer;
    }
    .twoLiBox:hover {
      &:after {
        content: "";
        position: absolute;
        width: 2px;
        height: 2px;
        background: #ffd323;
        right: -2px;
        bottom: 8px;
      }
      &:before {
        content: "";
        position: absolute;
        width: 2px;
        height: 2px;
        background: #ffd323;
        right: -2px;
        bottom: 14px;
      }
      & {
        border: 2px solid #302e27;
      }
    }
    .router-link-active:after {
      content: "";
      position: absolute;
      width: 2px;
      height: 2px;
      background: #ffd323;
      right: -2px;
      bottom: 8px;
    }
    .router-link-active:before {
      content: "";
      position: absolute;
      width: 2px;
      height: 2px;
      background: #ffd323;
      right: -2px;
      bottom: 14px;
    }
    .router-link-active {
      border: 2px solid #302e27;
    }
  }
}
</style>


