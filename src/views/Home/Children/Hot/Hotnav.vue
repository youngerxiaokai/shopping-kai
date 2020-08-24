<template>
<div class="Hotnav">
  <div class="Hotnav-item">
    <van-icon name="bag-o" />
    <span class="Hotnav-item-title">女装</span>
  </div>
  <div class="Hotnav-item">
    <van-icon name="bag-o" />
    <span class="Hotnav-item-title">女装</span>
  </div>
  <div class="Hotnav-item">
    <van-icon name="bag-o" />
    <span class="Hotnav-item-title">女装</span>
  </div>
  <div class="Hotnav-item">
    <van-icon name="bag-o" />
    <span class="Hotnav-item-title">女装</span>
  </div>
  <div class="Hotnav-item">
    <van-icon name="bag-o" />
    <span class="Hotnav-item-title">女装</span>
  </div>
  <div class="Hotnav-item">
    <van-icon name="bag-o" />
    <span class="Hotnav-item-title">女装</span>
  </div>
  <div class="Hotnav-item">
    <van-icon name="bag-o" />
    <span class="Hotnav-item-title">女装</span>
  </div>
  <div class="Hotnav-item">
    <van-icon name="bag-o" />
    <span class="Hotnav-item-title">女装</span>
  </div>
  <div class="Hotnav-item">
    <van-icon name="bag-o" />
    <span class="Hotnav-item-title">女装</span>
  </div>
  <div class="Hotnav-item">
    <van-icon name="bag-o" />
    <span class="Hotnav-item-title">女装</span>
  </div>
  <div class="Hotnav-item">
    <van-icon name="bag-o" />
    <span class="Hotnav-item-title">女装</span>
  </div>
  <div class="Hotnav-item">
    <van-icon name="bag-o" />
    <span class="Hotnav-item-title">女装</span>
  </div>
  <div class="Hotnav-item">
    <van-icon name="bag-o" />
    <span class="Hotnav-item-title">女装</span>
  </div>
  <div class="Hotnav-item">
    <van-icon name="bag-o" />
    <span class="Hotnav-item-title">女装</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'Hotnav',
};

</script>

<style lang="scss" scoped>
.Hotnav{
  width: 200%;
  display: flex;
  padding: px2rem(10);
  flex-wrap: wrap;
  overflow-x: scroll;
&-item{
    overflow-x: scroll;
    margin-right: px2rem(10);
    width: px2rem(120);
    background: fuchsia;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    ::-webkit-scrollbar{
      display: none;
    }
    &-title{
    font-size: px2rem(30);
    }
  }
}
</style>
