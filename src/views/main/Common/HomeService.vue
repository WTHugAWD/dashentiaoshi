<template>
  <div class="home-service">
    <div>
      <span class="service-span">金众车旅服务</span>
    </div>
    <div>
      <span class="service-span">金大厨营养餐</span>
    </div>
    <div>
      <span class="service-span">金牛同城速递</span>
    </div>
    <div>
      <span class="service-span">金众之家社区</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeService"
};
</script>

<style lang="less">
.home-service {
  background-color: #fff;
  width: 100%;
  height: 12rem;
  margin-top: 0.2rem;
  position: relative;

  div {
    float: left;
    width: 48%;
    height: 5rem;
    background-color: #eeeeee;
    margin-left: 0.3rem;
    margin-top: 0.4rem;
    position: relative;
  }

  .service-span {
    clear: both;
    position: absolute;
    top: 0.8rem;
    left: 1rem;
    color: #8D8A8A;
  }
}
</style>
