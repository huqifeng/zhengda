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
li {
  list-style: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-width: 1200px;
  font-size: 16px;
}
.fullpage {
  min-height: 700px;
}
.W12 {
  width: 1200px;
  margin: 0 auto;
}
</style>
