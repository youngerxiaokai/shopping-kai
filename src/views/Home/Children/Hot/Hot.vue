<template>
  <div class='Hot'>
    <!-- 1轮播图 -->
    <van-swipe :autoplay="2000" @change="onChange">
      <van-swipe-item v-for="(item, index) in images" :key="index">
          <img :src="item.images" width="100%" height="600px"/>
      </van-swipe-item>
    </van-swipe>
    <!-- nav导航 -->
    <hotnav />
  </div>
</template>

<script>
import Hotnav from './Hotnav.vue';

export default {
  name: 'Hot',
  components: {
    Hotnav,
  },
  data() {
    return {
      images: [
        {
          images: 'https://img.yzcdn.cn/vant/apple-1.jpg',
          url: 'https://www.baidu.com/',
        },
        {
          images: 'https://img.yzcdn.cn/vant/apple-2.jpg',
          url: 'http://fanyi.youdao.com/',
        },
      ],
    };
  },
  methods: {
    onChange(index) {
      // console.log('index', index);
    },

  },
  mounted() {

  },
};
</script>

<style lang='scss' scoped>

.Hot{
  height: 100%;
  width: 100%;
  top: 69px;
  position: fixed;
  background: #f5f5f5;
  .swiper-container{

  }
}

</style>
