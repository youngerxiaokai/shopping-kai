import Vue from 'vue';
import App from './App.vue';
import router from './router';
// 引入适配
import './libs/px2rem/hotcss';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
