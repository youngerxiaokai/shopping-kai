<template>
  <div id="app">
    <router-view/>
    <tab-bar />
  </div>
</template>
<script>
import './assets/common.css';
import TabBar from './components/TabBar/TabBar.vue';

export default {
  name: 'App',
  components: {
    TabBar,
  },
};
</script>
<style lang="scss">
#app{
  width: 100%;
  height: 100%;
}
</style>
