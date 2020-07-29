<template>
  <div class="pro-imforma">
      <!-- 头 -->
      <div class="top">
        <van-nav-bar
          title="商品详情"
          left-arrow
          @click-left="$router.back()"
          :border="false"
        >
        </van-nav-bar>
      </div>

      <!-- 轮播 -->
      <div class="carousel">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in goodsdetail.src" :key="item">
              <img :src="item">
          </van-swipe-item>
        </van-swipe>
      </div>

      <!-- 描述 -->
      <div class="imformation">
          <h3>{{goodsdetail.name}}</h3>
          <span>
              <i>{{goodsdetail.info}}</i>
            {{goodsdetail.infos}}          
          </span>
          <h4>{{goodsdetail.price}}</h4>
      </div>

      <!-- 购买数量 -->
      <div class="pro-num">
          <span>购买数量:</span><van-stepper v-model="value" :max="max" @change="changenum"/>
      </div>

      <!-- 以旧换新 -->
      <div class="tokio">
          <van-cell-group>
            <van-cell 
            :icon="huabei[0].icon" 
            :title="huabei[0].title" 
            color="blue" 
            @click="showprop"
            is-link/>
          </van-cell-group>
      </div>
      <van-popup 
        v-model="show"
        closeable
        position="bottom"
            >
            <div class="porps">
                <h2>服务说明</h2>
                <div class="layer">
                    <div class="huabei">
                        <i><van-icon name="passed" /></i>
                        <h3>支持花呗分期</h3>
                        <p>商品支持花呗分期</p>
                    </div>
                    <div class="n-old">
                        <i><van-icon name="passed" /></i>
                        <h3>可以使用换新鼓励金</h3>
                        <p>换新鼓励金通过参加以旧换新回收旧手机以后获得，旧手机享受额外补贴。
                            <a href="#">现在换机</a>
                        </p>
                    </div>
                </div>
                <div class="closebtn">
                    <button @click="closeprop">关闭</button>
                </div>
            </div>
      </van-popup>

      <!-- 图文详情 -->
      <div class="gooddetail">
          <van-tabs v-model="active">
            <van-tab title="图文详情">
                <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20171115/20171115110719510981_original.jpg" width="414">
                <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20171113/20171113112115957344_original.jpg" width="414">
                <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20161219/20161219093807784269_original.jpg" width="414">
            </van-tab>
            <van-tab title="参数">
                <h2>暂无参数</h2>
            </van-tab>
          </van-tabs>
      </div>
        
      <!-- 添加购物 -->
      <div class="carts">
          <van-goods-action>
            <van-goods-action-icon icon="like-o" color="red" text="收藏" @click="like" />
            <van-goods-action-icon icon="cart-o" text="购物车" :to="'/carts'" :info="prototal"/>
            <van-goods-action-icon icon="shop-o" text="店铺" :to="'/classify'"/>
            <van-goods-action-button @click="addcart" type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" :to="'/account/'+ goodsdetail.id + '/' + changenums" text="立即购买" />
          </van-goods-action>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            value: 1,
            show: false,
            active: 0,
            prototal: 0,
            goodsdetail: {},
            max: 0,
            changenums:1,   //立即购买的数量
            huabei:[
                {id:1,title:'支持花呗分期',title1:'支持以旧换新',icon:'passed',ricon:'arrow'},
            ],
            getvivoscart: function(){
                var getvivoscarts = JSON.parse(localStorage.getItem('vivocart') || '[]');
                return getvivoscarts;
            }(),
            shopsnew:[
                {id: 1, name: 'X9Plus 全网通', num:1, price:'￥2798',max:10,
                    info: '【花呗免息，0首付0利率轻松购机】',
                    infos:'X9s Plus A 5.85英寸大屏，双引擎闪充，4015mAh大电池，持久续航（注：面部识别需升级到最新系统使用）',
                    src:[
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/71/4171_1496689409434hd_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/71/4171_1482112377158_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/71/4171_1482112378797_530x530.png'
                    ]},
                {id: 2, name: 'X20Plus 全面屏', num:1, price:'￥3498',max:10,
                    info: '【4月21日0点-7月31日0点，感恩促销直降200，到手价2598】',
                    infos:'X20A 18:9高清全面屏，Face Wake面部识别，0.1s面部解锁，前后2x1200万像素，2400万感光单元。',
                    src:[
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/40/4440_1508723830538hd_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/40/4440_1508723828993hd_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/40/4440_1508723832425hd_530x530.png'
                    ]},
                {id: 3, name: 'Y69 全面屏手机', num:1, price:'￥2498',max:10,
                    info: '【4月24日—5月1日，购机加赠爱奇艺VIP月卡；直降200元促销，到手价999】',
                    infos:'Y69A 32GB内存，前置1600万柔光自拍，正面指纹解锁，一体式机身设计，分屏多任务。',
                    src:[
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/95/4495_1509454710945hd_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/95/4495_1509454714610hd_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/95/4495_1509454706314hd_530x530.png',
                    ]},
                {id: 4, name: 'Xplay6 128G版', num:1, price:'￥3998',max:10,
                    info: '【0首付0利息购机，购机赠豪礼】',
                    infos:'Xplay6 A 曲面2K屏，全曲面设计；6GB大运存，旗舰精品；骁龙820处理器，强劲核心；后置双摄，2400万感光单元，专业级虚化；超窄边框，超长续航。',
                    src:[
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/66/4266_1496689781362hd_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/66/4266_1500026039430hd_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/66/4266_1490271072649hd_530x530.png',
                    ]},
                {id: 5, name: 'Y55 全网通', num:1, price:'￥1098',max:10,
                    info: '【截止至5月2日，Y55优惠100元促销】',
                    infos:'Y55A 八核处理器，大屏美颜自拍，双卡全网通，支持128GB扩展内存，弧面玻璃，超薄机身',
                    src:[
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/11/4111_1492998667334hd_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/71/4171_1482112377158_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/71/4171_1482112378797_530x530.png'
                    ]},
                {id: 6, name: 'Y66 全网通', num:1, price:'￥1298',max:10,
                    info: '【5.5英寸高清大屏，性价比优选】',
                    infos:'Y66A手机，3GB运存+32GB内存，后置1300万像素，5000万超清合成；3000mAh大电池，持续流畅！',
                    src:[
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/80/4180_1496689544465hd_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/80/4180_1498696044402hd_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/80/4180_1482292661461_530x530.png',
                    ]},

                {id: 101, name: '乐心手环', num:1, price:'￥239',max:10,
                    info: '【首发价239，领券再减20，前50名下单用户送体脂秤】',
                    infos:'全天24小时心率监测，支持12项运动模式全纪录，超长续航，IP68级防水。中奖用户体脂秤将在5月31日前单独发出。',
                    src:[
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/27/5027_1526972514378hd_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/27/5027_1526972617808hd_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/27/5027_1526972611298hd_530x530.png',
                    ]},
                {id: 102, name: 'vivo原装闪充充电器', num:1, price:'￥85',max:10,
                    info: '【vivo原装闪充充电器-9V/2A快充】',
                    infos:'vivo原装旅行充电头，支持双引擎闪充，不含数据线（ 不支持X9Plus/X20Plus低压闪充 ）',
                    src:[
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/20/4020_1481558694236_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/20/4020_1456733531803_530x530.png',
                    ]},
                {id: 103, name: 'vivo XE600i 原装音乐耳机', num:1, price:'￥89',max:10,
                    info: '【直降10元，限时促销】',
                    infos:'vivo原装旅行充电头，支持双引擎闪充，不含数据线（ 不支持X9Plus/X20Plus低压闪充 ）',
                    src:[
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/82/1882_1481558960471_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/82/1882_1447902809866_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/82/1882_1447902810338_530x530.png',
                    ]},
                {id: 104, name: 'vivo原装闪充数据线—2A电流输出', num:1, price:'￥29',max:10,
                    info: '【【限时包邮】】',
                    infos:'X系列，XPlay系列机型原装闪充数据线（注：不支持X9Plus/X20Plus闪充），充电更快速。由于销量火爆，付款订单将按照支付顺序7天内发货！',
                    src:[
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/59/4459_1506593158905hd_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/59/4459_1506593164284hd_530x530.png',
                    ]},
                {id: 105, name: 'vivo X9原装柔性钢化膜', num:1, price:'￥29',max:10,
                    info: '【限时包邮】',
                    infos:'X9原装保护膜，两片装，平面贴膜，2.5D弧面位置不在贴膜覆盖范围，适用X9 Plus机型',
                    src:[
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/83/4183_1482921083765_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/83/4183_1482921084622_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/83/4183_1482921085636_530x530.png',
                    ]},
                {id: 106, name: 'vivo Xplay6原装3D高清保护膜', num:1, price:'￥39',max:10,
                    info: '【限时包邮,两片装】',
                    infos:'原装保护膜，两片装，平面贴膜，2.5D弧面位置不在贴膜覆盖范围，适用vivo Xplay6机型',
                    src:[
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/81/4181_1482720908043_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/81/4181_1482720907295_530x530.png',
                        'https://shopstatic.vivo.com.cn/vivoshop/commodity/81/4181_1482720908843_530x530.png',
                    ]},
            ]

        }
    },
    created(){
        this.getgoodsdetail();
        this.getcartnum();
    },
    methods:{
        showprop(){
            this.show = true
        },
        closeprop(){
            this.show = false
        },
        getgoodsdetail(){
            let id = this.$route.params.id;
            this.goodsdetail = this.shopsnew.find((item, i) => {
                if(item.id == id){
                    return true;
                }
            });
            // let this.getvivoscart = JSON.parse(localStorage.getItem('vivocart') || '[]');
             let c = this.getvivoscart.find(item=>{
                return item.id == id;
            });
            if(this.getvivoscart.length && c){
                this.max = c.max;
            }else{
                this.max = this.goodsdetail.max
            }
            
        },
        addcart(){
            // console.log(this.goodsdetail)
            
            // 购物车里商品信息
            let singleShop = this.goodsdetail
            // let this.getvivoscart = JSON.parse(localStorage.getItem('vivocart') || '[]')
            
            // singleShop.num = this.value;
            
            let isExited = this.getvivoscart.some(item => {
                return item.id == singleShop.id
            })

            if(isExited){
               this.getvivoscart = this.getvivoscart.map(item => {
                    
                    if(item.id == singleShop.id){
                        if(this.value > item.max){
                            this.$toast('您购买的商品已达上限');
                        }else{
                            item.num += this.value;
                            let diff = item.max - this.value;
                            this.max = item.max = diff > 0 ? diff : 0;
                            this.value = 1
                            this.$toast('添加购物车成功');
                            
                        }
                    }
                    // this.prototal += item.num;
                    // this.getcartnum()
                    return item;
                    // localStorage.setItem('vivocart',JSON.stringify(this.getvivoscart))
                })
            }else{
                singleShop.num = this.value;
                let diff = this.max - this.value
                this.max = singleShop.max = diff > 0 ? diff : 0;
                this.getvivoscart.push(singleShop)
                this.value = 1
                this.$toast('添加购物车成功');
            }

            // // 购物车上标
            // this.prototal = this.getvivoscart.map(item =>{
            //     console.log(item)
            // })

            // localStorage.setItem('vivocart',JSON.stringify(this.getvivoscart))
            
        },
        changenum(){
            this.changenums = this.value;
            //立即购买的数量
        },
        like(){
            // alert(11)
            let likeicon = document.getElementsByClassName('van-icon-like-o')[0];
            // let likecolor = likeicon.style.color;

            likeicon.style.color = 'red'
            this.$toast('已收藏')
            // console.log(likeicon)
        },
        getcartnum(){
            this.getvivoscart.map(item =>{
                this.prototal += item.num;
                return item;
            })
        }
    },
    updated () {
        localStorage.setItem('vivocart',JSON.stringify(this.getvivoscart))
    }
}
</script>

<style scoped>
    .pro-imforma{
        padding-top: 46px;
    }
    .gooddetail img{
        width: 100%;
    }
    .carousel{
        text-align: center;
        border-top: solid 1px rgb(247, 244, 244);
    }
    .carousel img{
        width: 240px;
        height: 240px;
    }
    .imformation{
        padding: 15px;
    }
    .imformation h3{
        font-weight: normal;
        line-height: 34px;
    }
    .imformation span{
        font-size: 12px;
        text-align: justify;
    }
    .imformation span i{
        display: inline-block;
        text-align: left;
        color: red;
        font-style: normal;
    }
    .imformation h4{
        font-size: 24px;
        color: red;
        line-height: 36px;
        font-weight: normal;
    }
    .pro-num{
        padding: 13px;
        border-top: solid 1px rgb(219, 218, 218);
        border-bottom: solid 1px rgb(219, 218, 218);
    }
    .pro-num .van-stepper{
        display: inline-block;
        vertical-align: top;
    }
    .pro-num span{
        height: 100%;
        vertical-align: top;
        margin-right: 10px;
    }
    .tokio{
        padding-bottom: 10px;
        background-color: rgb(240, 238, 238);
    }

    .porps{
        padding-bottom: 20px;
    }
    .porps h2{
        text-align: center;
        line-height: 62px;
        font-weight: normal;
        color: #333;
        font-size: 20px;
    }
    .porps .layer{
        margin: 20px 30px;
    }
    .porps .huabei{ 
        margin-bottom: 25px;
    }
    .porps h3{
        font-weight: normal;
        font-size: 18px;
        padding-left: 25px;
        color: #333;
        margin-bottom: 10px;
    }
    .porps i{
        font-size: 20px;
    }
    .porps p{
        line-height: 30px;
        font-size: 14px;
        padding-left: 15px;
        color: #666
    }
    .porps p a{
        color: #00acff
    }
    .porps .closebtn{
        padding:0 15px;
        border-top: solid 1px rgb(235, 232, 232);
        padding-top: 15px
    }
    .porps .closebtn button{
        width: 100%;
        height: 36px;
        border-radius: 18px;
        color: #fff;
        background-color: #00acff;
        border: none;
    }
    /* .van-popup{
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
    } */
    .van-goods-action{
        z-index: 999;
    }
</style>
<style>
    .carousel .van-swipe__indicators{
        bottom: 0;
    }
    .carousel .van-swipe__indicators i{
        /* border-color: gray; */
        background-color: rgb(194, 191, 191);
    }

    .van-popup--bottom{
        max-width: 430px;
        right: 50%;
        /* transform: translateX(-50%) */
    }
</style>