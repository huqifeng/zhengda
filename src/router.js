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
        },
        {
          path: 'introduce',
          component: resolve => {
            require(['@/components/about/AboutIntroduce.vue'], resolve);
          }
        },
        {
          path: 'honor',
          component: resolve => {
            require(['@/components/about/AboutHonor.vue'], resolve);
          }
        },
        {
          path: 'team',
          component: resolve => {
            require(['@/components/about/AboutTeam.vue'], resolve);
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
        },
        {
          path: 'platform',
          component: resolve => {
            require([
              '@/components/technology/TechnologyPlatform.vue'
            ], resolve);
          }
        },
        {
          path: 'intellectual',
          component: resolve => {
            require([
              '@/components/technology/TechnologyIntellectual.vue'
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
    },
    {
      path: '/news',
      name: 'news',
      component: resolve => require(['@/views/News.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => {
            require(['@/components/news/NewsDynamic.vue'], resolve);
          }
        }
      ]
    },
    {
      path: '/duty',
      name: 'duty',
      component: resolve => require(['@/views/Duty.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => {
            require(['@/components/duty/DutyDynamic.vue'], resolve);
          }
        },
        {
          path: 'dynamic',
          component: resolve => {
            require(['@/components/duty/DutyDynamic.vue'], resolve);
          }
        }
      ]
    },
    {
      path: '/career',
      name: 'career',
      component: resolve => require(['@/views/Career.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => {
            require(['@/components/career/CareerConcept.vue'], resolve);
          }
        },
        {
          path: 'concept',
          component: resolve => {
            require(['@/components/career/CareerConcept.vue'], resolve);
          }
        }
      ]
    }
  ]
});
