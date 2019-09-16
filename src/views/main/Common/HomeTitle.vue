<template>
  <div class="home-title">
    <van-row>
      <van-col span="5">
        <span class="sp-l">青岛</span>
        <span class="img-l">
          <img src="~assets/icons/weizhi.png" class="icon" alt="">
        </span>
      </van-col>
      <van-col span="14">
        <van-search placeholder="请输入搜索关键词"  shape="round" v-model="value" />
      </van-col>
      <van-col span="5">
        <span class="sp-q">签到</span>
        <span class="img-q">
          <img src="~assets/icons/qiandao.png" class="icon" alt="">
        </span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "HomeTitle",
  data(){
    return {
      value: ''
    }
  }
};
</script>

<style lang="less">
*{
  background-color: none;
}
.home-title {
  width: 100%;
  height: 2.5rem;
  background-color: #f1f1f1;
  position:fixed;
  top:0;
  left:0;
  z-index: 100;

  .sp-l {
    display: inline-block;
    height: 2.5rem;
    line-height: 2.5rem;
    vertical-align: middle;
    text-align: center;
    margin-left: 1rem;
    // margin-right: 1rem;
    font-size: 0.8rem;
  }

  .img-l {
    display: inline-block;
    height: 2.5rem;
    line-height: 2.5rem;
    vertical-align: middle;
    margin-right: 0.5rem;

    .icon{
      padding-top:0.5rem;
      height: 1.2rem;
    }
  }

  .sp-q {
    margin-left: 0.2rem;
    display: inline-block;
    height: 2.5rem;
    line-height: 2.5rem;
    vertical-align: middle;
    text-align: center;
    font-size: 0.8rem;
  }

  .img-q {
    display: inline-block;
    height: 2.5rem;
    line-height: 2.5rem;
    vertical-align: middle;
    margin-left: 0.5rem;
    .icon{
      padding-top:0.6rem;
      height: 1.2rem;
    }
  }

  .van-search{
    background: none !important;
    width: 100%;
    padding: 3px 0px !important;
  }
}
</style>
