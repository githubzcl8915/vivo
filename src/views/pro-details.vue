<template>
  <div class="pro-details">

      <!-- 头 -->
      <div class="top">
        <van-nav-bar
          title="选购配件"
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
                        <p class="pro-detailss">{{item.details}}</p>
                        <p class="pro-price">{{item.price}}</p>
                        </div>
                    </van-grid-item>
                </van-grid>
          </div>
        </van-tab>
        <van-tab title="充电器">充电器</van-tab>
        <van-tab title="保护膜">保护膜</van-tab>
        <van-tab title="耳机音箱">耳机音箱</van-tab>
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
                {id:2 , title:'充电器'},
                {id:3 , title:'保护膜'},
                {id:4 , title:'耳机音箱'},
            ],
            classdata:[],
            allshops:[
                {id: 101, name: '乐心手环',sort:1, details:'优惠200元|限量促销', price:'￥2798',src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/27/5027_1526972514378hd_250x250.png'},
                {id: 102, name: 'vivo原装充电器',sort:3,  details:'6.43英寸大屏|0.1s快速解锁', price:'￥3498',src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/20/4020_1481558694236_530x530.png'},
                {id: 103, name: 'vivo原装音乐耳机',sort:2,  details:'前置2400万像素', price:'￥2498',src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/82/1882_1481558960471_530x530.png'},
                {id: 104, name: 'vivo原装数据线',sort:1,  details:'后置双摄|免费镭射镌刻', price:'￥3998',src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/73/4273_1491007460873hd_250x250.png'},
                {id: 105, name: 'vivoX9原装钢化膜',sort:2,  details:'大屏美颜自拍', price:'￥1098',src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/83/4183_1482921083765_530x530.png'},
                {id: 106, name: 'vivo保护膜',sort:3,  details:'5.5英寸大屏|支持花呗分期', price:'￥1298',src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/81/4181_1482720908043_250x250.png'},
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
    .pro-details{
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
        text-align:center;
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
    .pro-details .van-tabs__wrap{
        position: fixed;
        width: 430px;
        top: 46px;
        z-index: 999;
        margin-bottom: 44px;
    }
    .pro-details .van-tabs__content{
        margin-top: 90px;
    }
</style>