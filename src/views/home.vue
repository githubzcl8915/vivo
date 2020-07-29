<template>
  <div class="home">

      <!-- 头 -->
      <div class="top">
        <van-nav-bar
          title="vivo"
          left-arrow
          @click-left="$router.back()"
          :border="false"
        >
        <van-icon class="act" slot="right" />
        </van-nav-bar>
      </div>

      <div class="logo-fo">
        <img :src="offs">
      </div>
      <!-- 轮播 -->
      <div class="carousel">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item><img src="../assets/images/carousel1.jpg"></van-swipe-item>
          <van-swipe-item><img src="../assets/images/carousel2.jpg"></van-swipe-item>
        </van-swipe>
      </div>

      <!-- shoplist -->
      <div class="shoplist">
        <van-row>
          <van-col span="6"><router-link :to="'/pro-detail'"><img src="../assets/images/list1.jpg"></router-link></van-col>
          <van-col span="6"><router-link :to="'/pro-details'"><img src="../assets/images/list2.jpg"></router-link></van-col>
          <van-col span="6"><router-link :to="'/pro-details'"><img src="../assets/images/list3.jpg"></router-link></van-col>
          <van-col span="6"><router-link :to="'/pro-detail'"><img src="../assets/images/list4.jpg"></router-link></van-col>
        </van-row>
      </div>

      <!-- shops -->
      <div class="shops">
        <h2>爆款产品</h2>
        <div class="goods">
          <img src="../assets/images/goods.jpg">
        </div>
        <van-grid :column-num="2">
          <van-grid-item
            v-for="item in allshops"
            :key="item.id"
            :to="'/pro-imforma/' + item.id"
          >
            <div class="products">
              <div class="pic">
                <img :src="item.src">
              </div>
              <p class="pro-name">{{item.name}}</p>
              <p class="pro-details">{{item.details}}</p>
              <p class="pro-price">{{item.price}}</p>
            </div>
          </van-grid-item>
        </van-grid>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      offs: require('../assets/images/official.png'),
      allshops:[
        {id: 1, name: 'X9Plus 全网通', details:'优惠200元|限量促销', price:'￥2798',src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/71/4171_1496689409434hd_530x530.png'},
        {id: 2, name: 'X20Plus 全面屏', details:'6.43英寸大屏|0.1s快速解锁', price:'￥3498',src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/40/4440_1508723830538hd_530x530.png'},
        {id: 3, name: 'Y69 全面屏手机', details:'前置2400万像素', price:'￥2498',src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/95/4495_1509454710945hd_530x530.png'},
        {id: 4, name: 'Xplay6 128G版', details:'后置双摄|免费镭射镌刻', price:'￥3998',src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/66/4266_1496689781362hd_530x530.png'},
        {id: 5, name: 'Y55 全网通', details:'大屏美颜自拍', price:'￥1098',src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/11/4111_1492998667334hd_530x530.png'},
        {id: 6, name: 'Y66 全网通', details:'5.5英寸大屏|支持花呗分期', price:'￥1298',src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/80/4180_1496689544465hd_530x530.png'},
      ],
    }
  }
}
</script>

<style scoped>
  .home{
    margin-top: 46px;
    margin-bottom: 50px;
  }
  .logo-fo{

  }
  .logo-fo img{
    width: 100%;
    height: 30px;
  }
  .carousel img{
    width: 100%;
    height: 280px;
  }
  .shoplist{
    text-align: center;
  }
  .shoplist img{
    height: 55px;
  }
  .shops{
    border-top: solid 1px rgb(242, 242, 250);
  }
  .shops h2{
    font-weight: normal;
    font-size: 14px;
    line-height: 42px;
    padding-left: 15px;
  }
  .shops img{
    width: 100%;
    height: 150px;
  }
  .pic{
    padding-top: 20px;
    padding-bottom: 5px;
    text-align: center;
  }
  .pic img{
    width: 85px;
    height: 75px;
  }
  .products p{
    font-size: 14px;
    text-align: center;
    line-height: 20px;
  }
  .pro-name{
    font-weight: bold;
  }
  .pro-price{
    color: red
  }
  
</style>