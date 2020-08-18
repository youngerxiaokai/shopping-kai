<template>
  <div class="TabBar">
    <div class="TabBar-item" @click="SwitchPath('/home')">
      <van-icon name="home-o" :color=" $route.path.includes('/home') ? 'blue' : '' "/>
      <span :class=" {on: $route.path.includes('/home')}" class="TabBar-item_title">主页</span>
    </div>
    <div class="TabBar-item" @click="SwitchPath('/search')">
      <van-icon name="search" :color=" $route.path.includes('/search') ? 'blue' : '' "/>
      <span class="TabBar-item_title" :class=" {on: $route.path.includes('/search')}">搜索</span>
    </div>
    <div class="TabBar-item" @click="SwitchPath('/chat')">
      <van-icon name="chat-o" :color=" $route.path.includes('/chat') ? 'blue' : '' "/>
      <span class="TabBar-item_title" :class=" {on: $route.path.includes('/chat')}">聊天</span>
    </div>
    <div class="TabBar-item" @click="SwitchPath('/recommend')">
      <van-icon name="good-job-o" :color=" $route.path.includes('/recommend') ? 'blue' : '' "/>
      <span class="TabBar-item_title" :class=" {on: $route.path.includes('/recommend')}">推荐</span>
    </div>
    <div class="TabBar-item" @click="SwitchPath('/my')">
      <van-icon name="manager-o" :color=" $route.path.includes('/my') ? 'blue' : '' "/>
      <span class="TabBar-item_title" :class=" {on: $route.path.includes('/my')}">我的</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {
    };
  },
  methods: {
    SwitchPath(routePath) {
      console.log(this.$router, '!!!!!!!!!!!!!!!!');
      this.$router.replace({ path: routePath });
    },
  },
  created() {
  },

};
</script>

<style lang="scss" scoped>
.TabBar{
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: fixed;
  z-index: 10000;
  // left: 0;
  bottom: 0;
  &-item{
    display: flex;
    flex-direction: column;
    &_title{
    font-size: 40px;
    }
    .on{
      color: blue;
    }
  }
}
</style>>
