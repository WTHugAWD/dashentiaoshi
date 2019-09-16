<template>

  <div class="info">
    <a v-for="(item, index) in informationList" :key="index" :href="`/informationInfo?id=` + item.id">
      <div class="information">
        <div class="info-container">
          <div class="left">
            <img :src="item.img" />
          </div>
          <div class="right">
            <div class="right-top">{{item.title}}</div>
            <div class="right-center">{{item.content}}</div>
            <div class="right-bottom">{{item.time}}</div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Information",
  data() {
    return {
      informationList: [
        {
          id: "123",
          img: require("assets/images/zixunt.png"),
          title: "凤凰古城双飞9日游",
          content:
            "丽江-阳朔-世外-刘三姐-张家界-玻璃栈桥-凤凰古城双飞9日游 桂湘全",
          time: "创建时间：2019.10.12"
        },
        {
          id: "123",
          img: require("assets/images/zixunt.png"),
          title: "凤凰古城双飞9日游",
          content:
            "丽江-阳朔-世外-刘三姐-张家界-玻璃栈桥-凤凰古城双飞9日游 桂湘全",
          time: "创建时间：2019.10.12"
        },
        {
          id: "123",
          img: require("assets/images/zixunt.png"),
          title: "凤凰古城双飞9日游",
          content:
            "丽江-阳朔-世外-刘三姐-张家界-玻璃栈桥-凤凰古城双飞9日游 桂湘全",
          time: "创建时间：2019.10.12"
        },
        {
          id: "123",
          img: require("assets/images/zixunt.png"),
          title: "凤凰古城双飞9日游",
          content:
            "丽江-阳朔-世外-刘三姐-张家界-玻璃栈桥-凤凰古城双飞9日游 桂湘全",
          time: "创建时间：2019.10.12"
        },
        {
          id: "123",
          img: require("assets/images/zixunt.png"),
          title: "凤凰古城双飞9日游",
          content:
            "丽江-阳朔-世外-刘三姐-张家界-玻璃栈桥-凤凰古城双飞9日游 桂湘全",
          time: "创建时间：2019.10.12"
        },
        {
          id: "123",
          img: require("assets/images/zixunt.png"),
          title: "凤凰古城双飞9日游",
          content:
            "丽江-阳朔-世外-刘三姐-张家界-玻璃栈桥-凤凰古城双飞9日游 桂湘全",
          time: "创建时间：2019.10.12"
        },
        {
          id: "123",
          img: require("assets/images/zixunt.png"),
          title: "凤凰古城双飞9日游",
          content:
            "丽江-阳朔-世外-刘三姐-张家界-玻璃栈桥-凤凰古城双飞9日游 桂湘全",
          time: "创建时间：2019.10.12"
        },
        {
          id: "123",
          img: require("assets/images/zixunt.png"),
          title: "凤凰古城双飞9日游",
          content:
            "丽江-阳朔-世外-刘三姐-张家界-玻璃栈桥-凤凰古城双飞9日游 桂湘全",
          time: "创建时间：2019.10.12"
        }
      ]
    };
  }
};
</script>

<style lang="less">
.info {
  margin-bottom: 50px;

  a {
    color: black;
  }
}
.information {
  width: 100%;
  height: 100%;
  background-color: #fff;

  .info-container {
    width: 100%;
    height: 8rem;
    margin-bottom: 0.8rem;
    border-bottom: 1px solid #e8e8e8;

    .left {
      padding-top: 0.3rem;
      padding-left: 0.3rem;
      float: left;
      width: 42%;

      img {
        border-radius: 5px;
        width: 100%;
        height: auto;
      }
    }

    .right {
      float: left;
      width: 54%;
      margin-left: 0.4rem;

      .right-top {
        height: 1.8rem;
        font-size: 1.2rem;
        font-weight: 500;
        margin-top: 0.3rem;
      }

      .right-center {
        height: 3.8rem;
        font-size: 0.8rem;
        margin-top: 0.2rem;
      }

      .right-bottom {
        width: 100%;
        height: 1.8rem;
        line-height: 1.8rem;
        vertical-align: middle;
        font-size: 0.5rem;
      }
    }
  }
}
</style>
