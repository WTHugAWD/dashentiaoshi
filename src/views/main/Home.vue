<template>
  <div style="margin-bottom:52px;">
    <home-title />
    <home-swipe />
    <home-grid />
    <home-hot />
    <home-pre />
    <home-service/>
    <home-tab />
  </div>
</template>

<script>
import HomeTitle from "./Common/HomeTitle.vue"
import HomeSwipe from "./Common/HomeSwipe.vue"
import HomeGrid from "./Common/HomeGrid.vue"
import HomeHot from './Common/HomeHot.vue'
import HomePre from './Common/HomePre.vue'
import HomeService from './Common/HomeService.vue'
import HomeTab from './Common/HomeTab.vue'

export default {
  name: "Home",
  components: {
    HomeTitle,
    HomeSwipe,
    HomeGrid,
    HomeHot,
    HomePre,
    HomeService,
    HomeTab
  },
  data() {
    return {
      value: null
    };
  },
  methods(){

  }
};
</script>

<style lang="less">

</style>

