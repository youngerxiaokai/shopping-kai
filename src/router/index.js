import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import '../views/Recommend/Recommend.vue';
import '../views/Search/Search.vue';
import '../views/Chat/Chat.vue';
import '../views/My/My.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Search/Search.vue'),
  },
  {
    path: '/chat',
    name: 'Chat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Chat/Chat.vue'),
  },
  {
    path: '/my',
    name: 'My',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/My/My.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
