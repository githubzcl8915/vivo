<template>
  <div class="viewdetail">
      
        <!-- 头 -->
        <div class="top">
            <van-nav-bar
            title="订单详情"
            left-arrow
            @click-left="$router.back()"
            :border="false"
            >
            <van-icon class="act" slot="right" />
            </van-nav-bar>
        </div>

        <!-- 订单状态 -->
        <div class="orderstatu">
            <p>订单状态 : 已完成</p>
        </div>

        <!-- 收货信息 -->
        <div class="recevie">
            <p class="flexs">
                <span>收货人: <a>{{areas[0].name}}</a></span>
                <span>电话: <a>{{areas[0].tel}}</a></span>
            </p>
            <p>收货地址: <a>{{areas[0].address}}</a></p>
        </div>

        <!-- 商品信息 -->
        <van-card
        :num="ordernews.changenums"
        :price="ordernews.price.slice(1)"
        :desc="ordernews.info"  
        :title="ordernews.name"
        :thumb="ordernews.src[0]"
        />

        <div class="glod">
            <ul>
                <li>商品总金额: <a>￥{{ordernews.changenums * ordernews.price.slice(1)}}.00</a></li>
                <li>运费: <a>0.00</a></li>
                <li>优惠: <a>0.00</a></li>
            </ul>
        </div>

        <div class="totals">
            <p>总计: <a>￥{{ordernews.changenums * ordernews.price.slice(1)}}.00</a></p>
        </div>


  </div>
</template>

<script>
export default {
    data(){
        return{
            ordernews:[], //商品信息
            areas:{}, //地址
        }
    },
    created(){
        this.areas = JSON.parse(localStorage.getItem('vivoaddress') || '[]')
        // console.log(orders,this.areas)
        this.getordernews()
    },
    methods:{
        getordernews(){
            let id = this.$route.params.ides
            let orders = JSON.parse(localStorage.getItem('ordernews') || '[]');
            this.ordernews = orders.find(item => {
                return item.id == id
            });
            // console.log(id)
            console.log(this.ordernews)
        }
    }   
}
</script>

<style scoped>
    .orderstatu{
        padding-top: 46px;
        background-image: linear-gradient(90deg,rgb(149, 189, 248),rgb(111, 176, 250))
    }
    .orderstatu p{
        padding: 30px;
        color: #fff;
        font-size: 18px;
    }
    .recevie{
        padding: 15px 30px;
        border-bottom: solid 1px rgb(236, 236, 238)
    }
    .recevie p{
        font-size: 15px;
    }
    .recevie p a{
        padding-left: 8px;
        font-size: 14px;
    }
    .flexs{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }
    .flexs span{
        font-size: 15px;
    }
    .flexs span a{
        padding-left: 8px;
    }
    .glod{
        padding: 20px 30px;
        border-bottom: solid 1px rgb(230, 227, 227)
    }
    .glod ul li{
        line-height: 32px;
    }
    .glod ul li a{
        color: red;
    }
    .totals{
        position: fixed;
        bottom: 0;
        padding: 15px 30px;
        border-bottom: solid 1px rgb(231, 228, 228)
    }
    .totals p{
        text-align: right;
    }
    .totals p a{
        color: red;
    }
</style>