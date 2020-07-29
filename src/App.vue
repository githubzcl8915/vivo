<template>
  <div id="app">
    <!-- <div class="top">
      <van-nav-bar
        :title="navs[active].navtext"
        left-arrow
        @click-left="$router.back()"
        :border="false"
      >
      <van-icon class="act" :name="navs[active].navicon" slot="right" />
      </van-nav-bar>
    </div> -->

    <router-view></router-view>

    <van-tabbar route v-model="active" v-if="show">
      <van-tabbar-item 
      :icon="item.icon"
      v-for="(item,index) in navs"
      :key="item.id"
      :to="item.path"
      >
      
      {{navs[index].name}}
      </van-tabbar-item>
    </van-tabbar>
    
  </div>
  
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      active:0,
      path_: ['/home','/classify','/news','/own'],
      navs: [
        { 
          id:1,
          name: '首页', 
          icon: 'wap-home-o', 
          iconed:'wap-home', 
          path:'/home',
          navtext: 'vivo',
          navicon: 'scan'
        },
        { 
          id:2,
          name: '分类',
          icon: 'goods-collect-o',
          iconed:'goods-collect',
          path:'/classify', 
          info: 3,
          navtext: '商品类别',
          navicon: 'cart-o'
        },
        { 
          id:3,
          name: '新闻',
          icon: 'todo-list-o',
          iconed:'todo-list',
          path:'/news',
          navtext: '新闻资讯',
          navicon: 'location-o'
        },
        { 
          id:4,
          name: '我的',
          icon: 'manager-o',
          iconed:'manager',
          path:'/own',
          navtext: '个人中心',
          navicon: 'setting-o'
        },
      ]
    }
  },
  methods: {

  },
  computed:{
    show(){
      // console.log(this.$route.path)
      if(this.path_.indexOf(this.$route.path) != -1){
        return true
      }
    }
  }
}
</script>

<style>
#app {
  max-width: 430px;
  min-height: 100vh;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  position: relative !important;
}
.van-tabbar{
  max-width: 430px;
  left: 50% !important;
  transform: translateX(-50%);
  position: fixed !important
}
.van-nav-bar__right i{
  font-size: 18px ;
}
.top{
  position: fixed;
  max-width: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
}
.top .van-nav-bar{
  width: 430px;
  text-align: center;
}

</style>
