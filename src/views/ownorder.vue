<template>
  <div class="ownorder">

        <!-- 头 -->
        <div class="top">
            <van-nav-bar
            title="我的订单"
            left-arrow
            @click-left="$router.back()"
            :border="false"
            >
            <van-icon class="act" slot="right" />
            </van-nav-bar>
        </div>

        <!-- 订单状态 -->
        <div class="orderstatus">
            <van-tabs v-model="active" :border="false">
                <van-tab title="全部">

                    <!-- 订单详情 -->
                    <div class="orderdetail" v-for="item in ordernews" :key="item.id">
                        <van-panel title="vivo官方旗舰店" status="已完成">
                          <!-- <div>内容</div> -->
                        </van-panel>

                        <van-card
                          :num="item.changenums"
                          :price="item.price.slice(1)"
                          desc="描述信息"  
                          :title="item.name"
                          :thumb="item.src[0]"
                        />

                        <div class="viewdetail">
                          <div class="total">
                            <span>共计<a>{{item.changenums}}</a>件商品</span>
                            <span>总计: <a>{{item.changenums * Number(item.price.slice(1))}}</a></span>
                          </div>
                          <div class="discount">
                            <span>(含运费:<a>0.00</a></span>
                            <span>优惠:<a>0.00</a>)</span>
                          </div>
                          <div class="btns">
                            <button class="del" @click="delitem(item.id)">删除订单</button>
                            <button><router-link :to="'/viewdetail/' + item.id">查看详情</router-link></button>
                          </div>
                        </div>
                    </div>

                </van-tab>
                <van-tab title="待付款">内容 2</van-tab>
                <van-tab title="待收货">内容 3</van-tab>
                <van-tab title="待评价">内容 4</van-tab>
            </van-tabs>
        </div>

        

  </div>
</template>

<script>
export default {
  data(){
    return{
      active: 0,
      ordernews:[],
      totalprice: 0,
      totalnum: 0,
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
    this.orders()
  },
  methods:{
    orders(){

      let ordered = JSON.parse(localStorage.getItem('ordernews') || '[]')
      this.ordernews = ordered

    },
    delitem(id){
      // alert(id)
      let ordered = JSON.parse(localStorage.getItem('ordernews') || '[]')
      this.ordernews = ordered.filter(item => {
        return item.id != id
      })
      localStorage.setItem('ordernews',JSON.stringify(this.ordernews))

    },
  }
}
</script>

<style scoped>
  .orderstatus{
    padding-top: 46px;
  }
  .orderdetail{
    padding-bottom: 20px;
  }
  .viewdetail{
    text-align: right;
    margin-top: 10px;
    padding-right: 20px;
    border-top: solid 1px rgb(241, 241, 241)
  }
  .viewdetail .total{
    padding-top: 10px;
  }
  .viewdetail .total span{
    margin-left: 15px;
    color: #333
  }
  .viewdetail .total span a{
    color: red
  }
  .viewdetail .discount{
    padding-top: 10px;

  }
  .viewdetail .discount span{
    margin-left: 15px;
    color: #333
  }
  .viewdetail .discount span a{
    color: red
  }
  .viewdetail .btns{
    padding-top: 20px;
  }
  .viewdetail .btns button{
    padding: 5px 15px;
    background-color: rgb(247, 70, 70);
    border: none;
    color: #fff;
    border-radius: 5px;
  }
  .viewdetail .btns .del{
    margin-right: 15px;
  }
  .viewdetail .btns a{
    color: #fff;
  }
</style>