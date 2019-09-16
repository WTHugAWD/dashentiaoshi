<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="美食任我吃">
        <div class="tabcontainer">

        </div>
      </van-tab>
      <van-tab title="生活乐翻天">
        <div class="tabcontainer"></div>
      </van-tab>
      <van-tab title="五福临门购">
        <div class="tabcontainer"></div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "HomeTab",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="less">
  .tabcontainer{
    width: 100%;
    height: 10rem;
  }
</style>
