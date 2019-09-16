<template>
  <div class="nav">
    <div class="nav title">
      <span>
        <img src="~assets/images/热门推荐.png" class="icon" alt />
      </span>
      <div class="more">
        <div class="more-t">查看更多</div>
        <div class="more-i">
          <img src="~/assets/images/gengduo2.png" />
        </div>
      </div>
    </div>
    <div class="nav content">
      <div class="left">
        <img src="~assets/images/2.jpg" alt />
      </div>
      <div class="right">
        <div class="right-title">121212</div>
        <div class="right-content">哈沙河撒飒飒</div>
      </div>
    </div>
    <div class="nav content">
      <div class="left">
        <img src="~assets/images/2.jpg" alt />
      </div>
      <div class="right">
        <div class="right-title">121212</div>
        <div class="right-content">哈沙河撒飒飒</div>
      </div>
    </div>
    <div class="nav content">
      <div class="left">
        <img src="~assets/images/2.jpg" alt />
      </div>
      <div class="right">
        <div class="right-title">121212</div>
        <div class="right-content">哈沙河撒飒飒</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHot',

}
</script>

<style lang="less">
  .nav {
  width: 100%;
  margin-top: 0.5rem;
  background-color: #fff;

  .title {
    height: 2rem;
    padding-top: 0.3rem;

    .icon {
      width: 6rem;
      padding-left: 0.4rem;
    }

    .more {
      float: right;
      font-size: 0.6rem;
      .more-t {
        height: 100%;
        height: 1.2rem;
        display: inline-block;
      }
      .more-i {
        display: inline-block;
        height: 100%;

        img {
          width: 1.3rem;
          height: 0.7rem;
          padding-top: 0.3rem;
        }
      }
    }
  }

  .content {
    height: 6rem;
    .left {
      width: 35%;
      float: left;
      // height: ;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }

    .right {
      float: left;
      width: 60%;
      height: 100%;
      margin-left: 0.5rem;

      .right-title {
        width: 100%;
        height: 2rem;
        font-size: 1rem;
        vertical-align: middle;
        line-height: 2rem;
      }
      .right-content {
        width: 100%;
        height: 3.8rem;
        font-size: 0.6rem;
      }
    }
  }
}
</style>
