import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';
import '../views/Recommend/Recommend.vue';
import '../views/Search/Search.vue';
import '../views/Chat/Chat.vue';
import '../views/My/My.vue';

import '../views/Home/Children/Hot/Hot.vue';
import '../views/Home/Children/Baihuo.vue';
import '../views/Home/Children/Cloth.vue';
import '../views/Home/Children/Mother.vue';
import '../views/Home/Children/Shose.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'hot',
        name: 'Hot',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/Children/Hot/Hot.vue'),
      },
      {
        path: 'Baihuo',
        name: 'Baihuo',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/Children/Baihuo.vue'),
      },
      {
        path: 'cloth',
        name: 'Cloth',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/Children/Cloth.vue'),
      },
      {
        path: 'mother',
        name: 'Mother',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/Children/Mother.vue'),
      },
      {
        path: 'shose',
        name: 'Shose',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/Children/Shose.vue'),
      },
      {
        path: '/',
        name: 'hot',
        redirect: '/home/hot',
      },
    ],
  },
  {
    path: '/recommend',
    name: 'Recommend',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Recommend/Recommend.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ '../views/Search/Search.vue'),
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "about" */ '../views/Chat/Chat.vue'),
  },
  {
    path: '/my',
    name: 'My',
    component: () => import(/* webpackChunkName: "about" */ '../views/My/My.vue'),
  },
  {
    path: '/',
    name: 'Hot',
    redirect: '/home',
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
