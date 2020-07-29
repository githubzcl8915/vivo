<template>
  <div class="pro-detail">

      <!-- 头 -->
      <div class="top">
        <van-nav-bar
          title="选购手机"
          left-arrow
          @click-left="$router.back()"
          :border="false"
        >
        </van-nav-bar>
      </div>

      <!-- <h2>我是详情</h2> -->
      <!-- <van-tabs v-model="active">
        <van-tab title="全部" background="blue">      
          <div class="sort">
            <span>价格升序</span>
            <span>价格降序</span>
            <span>销量优先</span>
          </div>
          <div class="products">
              <van-grid :column-num="2">
                <van-grid-item
                v-for="item in allshops"
                :key="item.id"
                :to="'/pro-imforma/' + item.id"
                >
                    <div class="product">
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
        </van-tab>
        <van-tab title="Xplay系列">Xplay系列</van-tab>
        <van-tab title="X系列">X系列</van-tab>
        <van-tab title="Y系列">Y系列</van-tab>
      </van-tabs> -->

      <van-tabs v-model="active" @click="topros">
        <van-tab :title="item.title" background="blue" v-for="item in classtit" :key="item.id" >      
            <div class="sort">
                <span>价格升序</span>
                <span>价格降序</span>
                <span>销量优先</span>
            </div>
            <div class="products" v-for="data in classdata" :key="data.id">
                <van-grid :column-num="2">
                    <van-grid-item
                    :key="data.id"
                    :to="'/pro-imforma/' + data.id"
                    >
                        <div class="product">
                            <div class="pic">
                                <img :src="data.src">
                            </div>
                            <p class="pro-name">{{data.name}}</p>
                            <p class="pro-detailss">{{data.details}}</p>
                            <p class="pro-price">{{data.price}}</p>
                        </div>
                    </van-grid-item>
                </van-grid>
            </div>
        </van-tab>
    </van-tabs>

      <!-- 排序 -->
      
  </div>
</template>

<script>
export default {
    data(){
        return{
            active: 0,
            classtit:[
                {id:1 , title:'全部'},
                {id:2 , title:'Xplay系列'},
                {id:3 , title:'X系列'},
                {id:4 , title:'Y系列'},
            ],
            classdata:[],
            allshops:[
                {id: 1, name: 'X9Plus 全网通',sort:1, details:'优惠200元|限量促销', price:'￥2798',src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/71/4171_1496689409434hd_530x530.png'},
                {id: 2, name: 'X20Plus 全面屏',sort:3, details:'6.43英寸大屏|0.1s快速解锁', price:'￥3498',src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/40/4440_1508723830538hd_530x530.png'},
                {id: 3, name: 'Y69 全面屏手机',sort:3, details:'前置2400万像素', price:'￥2498',src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/95/4495_1509454710945hd_530x530.png'},
                {id: 4, name: 'Xplay6 128G版',sort:2, details:'后置双摄|免费镭射镌刻', price:'￥3998',src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/66/4266_1496689781362hd_530x530.png'},
                {id: 5, name: 'Y55 全网通',sort:1, details:'大屏美颜自拍', price:'￥1098',src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/11/4111_1492998667334hd_530x530.png'},
                {id: 6, name: 'Y66 全网通',sort:2, details:'5.5英寸大屏|支持花呗分期', price:'￥1298',src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/80/4180_1496689544465hd_530x530.png'},
            ],
        }
    },
    created(){
        this.topros(0)
    },
    methods:{
        topros(e){
            // console.log(e)//索引
            this.classdata = this.allshops.filter(item => {
                if(e == 0){
                    return item
                }else{
                    return item.sort == e
                }
            })
        }
    }
}
</script>

<style scoped>
    .pro-detail{
        margin-top: 46px;
        display: block;
        clear: both;
        content: '';
    }
    .sort{
        background-color: rgb(240, 238, 238)
    }
    .sort span{
        display: inline-block;
        width: 33.33%;
        text-align: center;
        line-height: 34px;
    }
    .products{
        float: left;
        width: 50%;
    }
    .product p{
        font-size: 12px;
        text-align: center;
    }
    .product .pro-price{
        color: red;
        line-height: 26px;
    }
    .pic{
        text-align: center;
    }
    .pic img{
        width: 96px;
        height: 96px;
    }
    .van-grid-item{
        margin: 0 auto
    }
</style>
<style>
    .pro-detail .van-tabs__wrap{
        position: fixed;
        width: 430px;
        top: 46px;
        z-index: 999;
        margin-bottom: 44px;
    }
    .pro-detail .van-tabs__content{
        margin-top: 90px;
    }
</style>