import Vue from 'vue';
// 引入适配
import './libs/px2rem/hotcss';
import './libs/px2rem/px2rem.scss';
// 引入vantage
import Vant from 'vant';
import 'vant/lib/index.css';

// 引入ly-tab
import LyTab from 'ly-tab';

import Swiper from 'vue-awesome-swiper';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.css';
import App from './App.vue';
import router from './router';

Vue.use(Swiper);

Vue.use(LyTab);

Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
