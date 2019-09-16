<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item v-for='(item, index) in tabbars' :key="index" :name="item.name" :to="item.to">
        <span>{{ item.title }}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.icon.active : item.icon.normal" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: "home",
      tabbars: [
        {
          name: 'home',
          title: '首页',
          icon: {
            normal: require('assets/icons/icon-shouye.png'),
            active: require('assets/icons/icon-shouye2.png')
          },
          to: '/home'
        },
        {
          name: 'information',
          title: '资讯',
          icon: {
            normal: require('assets/icons/icon-zixun.png'),
            active: require('assets/icons/icon-zixun2.png')
          },
          to: '/information'
        },
        {
          name: 'order',
          title: '订单',
          icon:{
            normal: require('assets/icons/icon-dingdan.png'),
            active: require('assets/icons/icon-dingdan2.png')
          },
          to: '/order'
        },
        {
          name: 'user',
          title: '我的',
          icon:{
            normal: require('assets/icons/icon-wode.png'),
            active: require('assets/icons/icon-wode2.png')
          },
          to: '/user'
        }
      ]
    };
  }
};
</script>

<style lang="less">
html,body{
  height: 100%;
}
body {
  margin: 0px;
  padding: 0px;
  background-color: #f3f3f3;
  overflow-y: auto;
  height: 100%;
}
#app{
  height: 100%;
}
</style>
