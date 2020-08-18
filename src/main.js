import Vue from 'vue';
// 引入适配
import './libs/px2rem/hotcss';
// 引入vantage
import Vant from 'vant';
import 'vant/lib/index.css';
// 引入ly-tab
import LyTab from 'ly-tab';
import App from './App.vue';
import router from './router';

Vue.use(LyTab);

Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
