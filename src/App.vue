<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style lang="less">
@import "./assets/font/font.css";
li {
  list-style: none;
}
body,
ul,
li,
p,
h1,
h2,
h3 {
  padding: 0 0;
  margin: 0 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-width: 1200px;
  font-size: 16px;
  overflow: hidden;
}
.fullpage {
  min-height: 700px;
}
.W12 {
  width: 1200px;
  margin: 0 auto;
}
.clearFloat:after {
  content: "";
  clear: both;
  display: block;
}

.ivuPage {
  .ivu-page-prev,
  .ivu-page-next {
    border: none;
    a {
      font-size: 24px;
      color: #000;
    }
  }
  .ivu-page-item {
    border: none;
    width: 32px !important;
    height: 32px !important;
    position: relative;
    border-radius: 50% 50%;
    a {
      color: #fff;
      position: absolute;
      z-index: 9;
      left: -2px;
      top: 0;
      width: 26px;
      height: 26px;
      font-size: 16px;
    }
  }

  .ivu-page-item:before {
    content: "";
    width: 26px;
    height: 26px;
    position: absolute;
    left: 3px;
    top: 3px;
    border-radius: 50% 50%;
    background: #302e26;
  }
  .ivu-page-item-active:before {
    background: #ecbe0b;
  }
}
</style>
