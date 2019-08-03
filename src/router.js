import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  mode: 'hash',

  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: resolve => require(['@/views/About.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => {
            require(['@/components/about/AboutIntroduce.vue'], resolve);
          }
        }
      ]
    },
    {
      path: '/technology',
      name: 'technology',
      component: resolve => require(['@/views/Technology.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => {
            require([
              '@/components/technology/TechnologyPlatform.vue'
            ], resolve);
          }
        }
      ]
    },
    {
      path: '/business',
      name: 'business',
      component: resolve => require(['@/views/Business.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => {
            require(['@/components/business/BusinessPharmacy.vue'], resolve);
          }
        },
        {
          path: 'pharmacy',
          component: resolve => {
            require(['@/components/business/BusinessPharmacy.vue'], resolve);
          }
        },
        {
          path: 'medical',
          component: resolve => {
            require(['@/components/business/BusinessPharmacy.vue'], resolve);
          }
        },
        {
          path: 'health',
          component: resolve => {
            require(['@/components/business/BusinessPharmacy.vue'], resolve);
          }
        }
      ]
    }
  ]
});
