<template>
  <div class="TechnologyPlatform">
    <ul class="listBox">
      <li class="listLi" v-for="(item,index) in list" :key="index">
        <div class="bottomBox">
          <div class="iconBox">
            <i :class="['iconfont',item.iconName]"></i>
          </div>
          <p class="percentage">{{item.percentage}}</p>
          <p class="text1">{{item.text1}}</p>
        </div>
        <div class="topBox">
          <div class="iconBox">
            <i :class="['iconfont',item.iconName]"></i>
          </div>
          <p class="nub">{{item.nub}}人</p>
          <p class="text2">{{item.text2}}</p>
          <ul class="textList">
            <li class="textLi" v-for="(item2,index2) in item.textList" :key="index2">{{item2}}</li>
          </ul>
        </div>
      </li>
    </ul>
    <div class="videoBox">
      <!-- <video autoplay="autoplay" class="video">
        <source src="../../assets/video2.mp4" type="video/mp4" />
      </video>-->
      <video-player
        class="video video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      ></video-player>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          iconName: "icon-boshi",
          percentage: "69%",
          text1: "硕士以上人员比例",
          nub: "200",
          text2: "2018年研发人数数量",
          textList: [
            "2013年研发人数500人",
            "2018年研发人数翻四倍",
            "达到两千人规模"
          ]
        },
        {
          iconName: "icon-boshi",
          percentage: "69%",
          text1: "硕士以上人员比例",
          nub: "200",
          text2: "2018年研发人数数量",
          textList: [
            "2013年研发人数500人",
            "2018年研发人数翻四倍",
            "达到两千人规模"
          ]
        },
        {
          iconName: "icon-boshi",
          percentage: "69%",
          text1: "硕士以上人员比例",
          nub: "200",
          text2: "2018年研发人数数量",
          textList: [
            "2013年研发人数500人",
            "2018年研发人数翻四倍",
            "达到两千人规模"
          ]
        },
        {
          iconName: "icon-boshi",
          percentage: "69%",
          text1: "硕士以上人员比例",
          nub: "200",
          text2: "2018年研发人数数量",
          textList: [
            "2013年研发人数500人",
            "2018年研发人数翻四倍",
            "达到两千人规模"
          ]
        }
      ],
      videoSrc: "",
      playerOptions: {
        live: true,
        autoplay: true, // 如果true，浏览器准备好时开始播放
        muted: false, // 默认情况下将会消除任何音频
        loop: true, // 是否视频一结束就重新开始
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
          remainingTimeDisplay: false,
          currentTimeDisplay: false, // 当前时间
          volumeControl: false, // 声音控制键
          playToggle: false, // 暂停和播放键
          progressControl: false, // 进度条
          fullscreenToggle: true // 全屏按钮
        },
        sources: [
          {
            type: "video/mp4",
            src: require("../../assets/video2.mp4") // 视频地址-改变它的值播放的视频会改变
          }
        ],
        notSupportedMessage: "此视频暂无法播放，请稍后再试" // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
      }
    };
  }
};
</script>
<style lang="less" scoped>
.TechnologyPlatform {
  width: 1200px;
  margin: 0 auto;
  margin-top: 125px;
  .listBox {
    width: 100%;
    .listLi {
      display: inline-block;
      width: 372px;
      margin: 0 84px;
      height: 478px;
      position: relative;
    }
  }
  .topBox {
    opacity: 0;
    transition: all 0.2s ease-in;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    box-sizing: border-box;
    border: 2px solid rgba(237, 237, 237, 1);
    border-radius: 10px;
    text-align: center;
    .iconBox {
      height: 100px;
      line-height: 100px;
      margin-top: 40px;
      .iconfont {
        font-size: 100px;
        color: #ecbe0b;
      }
    }
    .nub {
      height: 34px;
      font-size: 34px;
      font-weight: bold;
      color: rgba(48, 46, 39, 1);
      line-height: 34px;
      margin-top: 10px;
    }
    .text2 {
      height: 24px;
      font-size: 24px;
      color: rgba(48, 46, 39, 1);
      line-height: 24px;
      margin: 54px auto 30px;
    }
    .textList {
      .textLi {
        height: 32px;
        font-size: 18px;
        color: rgba(81, 81, 81, 1);
        line-height: 32px;
      }
    }
  }
  .bottomBox {
    opacity: 1;
    transition: all 0.2s ease-in;
    .iconBox {
      width: 200px;
      height: 200px;
      margin: 40px auto 0;
      background: rgba(239, 239, 239, 1);
      border-radius: 50%;
      line-height: 200px;
      .iconfont {
        font-size: 100px;
        color: #ecbe0b;
      }
    }
    .percentage {
      height: 34px;
      font-size: 34px;
      font-weight: bold;
      color: #302e27;
      line-height: 34px;
      margin: 35px auto 25px;
    }
    .text1 {
      height: 24px;
      font-size: 24px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(48, 46, 39, 1);
      line-height: 24px;
    }
  }
  .listLi:hover {
    .topBox {
      opacity: 1;
    }
    .bottomBox {
      opacity: 0;
    }
  }
  .videoBox {
    width: 1200px;
    height: 675px;
  }
  .video {
    width: 1200px;
    height: 675px;
  }
}
</style>
