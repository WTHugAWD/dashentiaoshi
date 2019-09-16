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
    <div class="nav content1">
      <div class="gold">热销 金榜</div>
      <div class="recommend">每周推荐</div>
      <div class="season">采摘 温泉 季时优惠</div>
      <div class="food">美食超值套餐 特惠</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePre"
};
</script>

<style lang="less">
.content1 {
  width: 100%;
  height: 225px;
}

.gold {
  width: 55%;
  height: 100px;
  float: left;
  margin-left: 5px;
  background-color: #ffedef;
  padding-top: 15px;
  padding-left: 20px;
  color: #f698a3;
}

.recommend {
  width: 30%;
  height: 205px;
  background-color: #e5eafe;
  float: right;
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 15px;
  padding-left: 20px;
  color: #9aacf9;
}

.season {
  width: 29%;
  height: 85px;
  float: left;
  background-color: #ebfaf5;
  margin-left: 5px;
  margin-top: 5px;
  font-size: 10px;
  padding-left: 5px;
  padding-top: 15px;
  color: #b3e9d6;
}
.food {
  width: 26%;
  height: 85px;
  float: left;
  background-color: #eef7fc;
  margin-left: 8px;
  margin-top: 5px;
  font-size: 10px;
  padding-left: 5px;
  padding-top: 15px;
  color: #83ccf7;
}

.content div {
  border-radius: 10px;
}
</style>
