import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
// import '../my-theme/index.less';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

Vue.use(VueAwesomeSwiper /* { default global options } */);

import VueVideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';
Vue.use(VueVideoPlayer);

Vue.config.productionTip = false;

// Vue.use(iView);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
