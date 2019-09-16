<template>
  <div>
    <van-grid :column-num="4">
      <van-grid-item v-for="(item, index) in gridList" :key="index" :icon="item.icon" :text="item.text" />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "HomeGrid",
  data(){
    return {
      gridList: [
        {
          icon: require('assets/icons/icon-youhuiquan.png'),
          text: '优惠券'
        },
        {
          icon: require('assets/icons/icon-lvyou.png'),
          text: '旅游攻略'
        },
        {
          icon: require('assets/icons/icon-jiaoyuzhuanqu.png'),
          text: '教育联盟'
        },
        {
          icon: require('assets/icons/icon-jinzhongyouxuan.png'),
          text: '金众优选'
        },
        {
          icon: require('assets/icons/icon-xianshigou.png'),
          text: '限时购'
        },
        {
          icon: require('assets/icons/icon-meishiyanxuan.png'),
          text: '美食严选'
        },
        {
          icon: require('assets/icons/icon-jiaozhoushangjia.png'),
          text: '胶州商家'
        },
        {
          icon: require('assets/icons/icon-gengduofuwu.png'),
          text: '更多服务'
        },
      ]
    }
  }
};
</script>

<style lang="less">
</style>
