<template>
  <div class="home">
    <ly-tab
      class="home_tab"
      v-model="selectedId"
      :items="items"
      @change="changeItem"
      :options="options">
    </ly-tab>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      selectedId: 0,
      items: [
        { label: '热门' },
        { label: '服饰' },
        { label: '鞋包' },
        { label: '母婴' },
        { label: '百货' },
        // { label: '食品' },
        // { label: '内衣' },
        // { label: '男装' },
        // { label: '电器' },
      ],
      options: {
        activeColor: '#1d98bd',
        // 可在这里指定labelKey为你数据里文字对应的字段
      },
      // 二级路由
      secondeRouter: ['/home/hot', '/home/cloth', '/home/shose', '/home/mother', '/home/baihuo'],
    };
  },
  methods: {
    changeItem(item, index) {
      this.$router.replace(this.secondeRouter[index]);
    },
  },

  components: {
  },
};
</script>
<style lang="scss" scoped>
.home{
  &_tab{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 998;
  }
}

</style>
