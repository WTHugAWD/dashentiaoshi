<template>
  <div style="height:100%;">
    <van-nav-bar title="资讯详情" left-text="返回" fixed="true" left-arrow @click-left="onClickReturn"></van-nav-bar>
    <div class="info-container">
      <div class="title">
        生命的感悟
      </div>
      <div class="time">
        2019-01-21
      </div>
      <div class="content">
        男：

秦时明月汉时关

万里长征人未还

但使龙城飞将在

不教胡马度阴山

女：

狼烟千里乱葬岗

乱世孤魂无人访

无言苍天笔墨寒

笔刀春秋以血偿

男：

谈爱恨 不能潦草

战鼓敲啊敲

用信任 立下誓言我来熬

女：

这缘分 像一道桥

旌旗飘啊飘

你想走

就请立马抽刀

爱一笔勾销

合：

谈爱恨 不能潦草

红尘烧啊烧

以生死 无愧证明谁重要

女：

这缘分 像一道桥

故事瞧一瞧

男：

走天涯

你我卸下战袍

合：

梦回长城谣

男：

秦时明月汉时关

万里长征人未还

但使龙城飞将在

不教胡马度阴山

女：

血肉筑城万箭穿

盔甲染血映月光

远方胡笳催断肠

狼嚎骤起震边关

谈爱恨 不能潦草

战鼓敲啊敲

用信任 立下誓言我来熬

男：

这缘分 像一道桥

旌旗飘啊飘

你想走

就请立马抽刀

爱一笔勾销

合：

谈爱恨 不能潦草

红尘烧啊烧

男：

以生死 无愧证明谁重要

女：

这缘分 像一道桥

故事瞧一瞧

男：

走天涯

你我卸下战袍

合：

梦回长城谣

这缘分 像一道桥

故事瞧一瞧

走天涯

你我卸下战袍

梦回长城谣
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InformationInfo",
  methods:{
    onClickReturn(){
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less">
.van-nav-bar .van-icon {
  color: black;
}
.van-nav-bar__arrow + .van-nav-bar__text {
  color: black;
}
.info-container{
  height: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: #fff;

  .title{
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    vertical-align: middle;
  }

  .time{
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    vertical-align: middle;
    font-size: 0.4rem;
    font-weight: lighter;
  }

  .content{
    height: 90%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>
