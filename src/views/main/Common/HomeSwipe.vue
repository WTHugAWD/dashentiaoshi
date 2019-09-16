<template>
  <div class="home swipe">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="~assets/images/banner.png" class="banner" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="~assets/images/banner.png" class="banner" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="~assets/images/banner.png" class="banner" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="~assets/images/banner.png" class="banner" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import {getBanner} from 'api/home.js'
export default {
  name: "HomeSwipe",
  data() {
    return {

    };
  },
  methods:{
    GetBanner(){
      getBanner(1).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  created(){
    this.GetBanner();
  }
};
</script>

<style lang="less">
.banner{
  width: 100%;
  height: auto;
}
</style>
