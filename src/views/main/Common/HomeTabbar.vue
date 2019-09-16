<template>
  <div>
    <van-nav-bar title="标题" left-text="返回" left-arrow>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "HomeTabbar"
};
</script>

<style lang="less">
.van-nav-bar .van-icon {
  color: black;
}
.van-nav-bar__text {
  color: black;
}
</style>
