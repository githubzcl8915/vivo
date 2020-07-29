<template>
  <div class="account">
      <!-- 头 -->
      <div class="top">
          <van-nav-bar
          title="结算"
          left-arrow
          @click-left="$router.back()"
          :border="false"
          >
          <van-icon class="act" slot="right" />
          </van-nav-bar>
      </div>

      <!-- 收货人 -->
      <div class="receiver">
          <van-contact-card
          type="edit"
          :name="areas && areas.name"
          :tel="areas && areas.tel"
          :editable="false"
          >
          </van-contact-card>
      </div>

      <!-- 商品清单 -->
      <div class="shoplist">
          <span>商品清单</span>
          <van-card
            :num="changenums"
            :price="shops.price.slice(1)"
            desc="描述信息"  
            :title="shops.name"
            :thumb="shops.src[0]"
          />
      </div>

      <!-- 发票信息 -->
      <div class="bill">
        <span>发票信息</span>
        <div class="int">
          <p>*请输入发票抬头:</p>
          <input type="text" placeholder="请输入发票信息">
        </div>
      </div>

      <!-- 支付方式 -->
      <div class="pay">
        <span>支付方式</span>
        <van-tabs type="card">
          <van-tab title="在线支付">支持支付宝支付、微信支付、银行卡支付、财富通支付等</van-tab>
          <van-tab title="花呗分期">花呗支付是花呗联合天猫淘宝推出的，面向互联网的赊购服务，通过支付宝轻松还款，0首付</van-tab>
          <van-tab title="货到付款">货到再付款，支持现金交易</van-tab>
        </van-tabs>
      </div>

      <!-- 订单留言 -->
      <div class="words">
        <span>订单留言</span>
        <div class="message">
          <textarea placeholder="限300字（若有特殊需求，请联系商城在线客服)"></textarea>
        </div>
        <div class="msg">
          <ul>
            <li>商品总金额：{{totalprice}}</li>
            <li>运费：0.00</li>
            <li>优惠：¥0.00</li>
            <li>赠送积分：0</li>
          </ul>
        </div>
      </div>

      <!-- 立即结算 -->
      <div class="wind">
        <span>订单总金额:<a>￥{{totalprice}}</a></span>
        <button><router-link :to="'/buysuccess'">立即结算</router-link></button>
      </div>


  </div>
</template>

<script>
export default {
  data(){
    return {
      areas:null,
      shops:{},
      changenums:1, //来自pri-imforma立即购买的数量
      totalprice:0,
      ordernews:[], //订单信息
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
    this.getareas();
    this.getgooddetail()
  },
  methods:{
    getareas(){
      let ad = JSON.parse(localStorage.getItem('vivoaddress'))

      if(ad)this.areas = ad[0];

      // console.log(this.areas)

    } ,
    getgooddetail(){

        let ordernews = JSON.parse(localStorage.getItem('ordernews') || '[]')

        let id = this.$route.params.ids;
        this.changenums = this.$route.params.nums
        this.shops = this.shopsnew.find((item) => {
            if(item.id == id){
                return true;
            }
        });
        this.totalprice = this.changenums * Number(this.shops.price.slice(1))
        // console.log(Number(this.shops.price.slice(1)))

        this.shops.changenums = this.changenums

        let isexised = ordernews.some(item =>{
          return item.id == this.shops.id
        })
        if(isexised){
          // console.log(222)
          ordernews.forEach(item => {
            if(item.id == this.shops.id){
              item.changenums = Number(item.changenums) + Number(this.shops.changenums)
              // console.log(typeof item.changenums)
            }
          });
          // return
        }else{
          ordernews.push(this.shops)
        }

        // ordernews.push(this.shops)
        localStorage.setItem('ordernews',JSON.stringify(ordernews))
        // console.log(this.shops)
                // console.log(ordernews)
    }
  },
}
</script>

<style scoped>
  .account{
    background-color: rgb(240, 238, 238)
  }
  .receiver{
    margin-top: 46px;
  }
  .shoplist{
    padding-top: 10px;
    margin-bottom: 10px;
  }
  .shoplist span{
    background-color: #fff;
    width: 100%;
    display: block;
    line-height: 62px;
    font-size: 16px;
    padding-left: 35px;
    color: #333
  }
  .van-card:not(:first-child){
    margin-top: 0;
  }
  .bill{
    background-color: #fff;
    padding-bottom: 30px;
    margin-bottom: 10px;
  }
  .bill span{
    width: 100%;
    display: block;
    line-height: 62px;
    font-size: 16px;
    padding-left: 35px;
    color: #333;
    border: solid 1px rgb(228, 225, 225)
  }
  .bill .int{
    padding: 0 20px
  }
  .bill .int p{
    margin: 10px 0;
    color: #333
  }
  .bill .int input{
    width: 100%;
    line-height: 44px;
    border: solid 1px rgb(228, 225, 225);
    padding-left: 5px;
  }
  .pay{
    background-color: #fff;
    padding-bottom: 20px;
    margin-bottom: 10px;
  }
  .pay span{
    width: 100%;
    display: block;
    line-height: 62px;
    font-size: 16px;
    padding-left: 35px;
    color: #333;
    border: solid 1px rgb(228, 225, 225);
    margin-bottom: 10px;
  }
  .pay .van-tabs--card{
    padding: 0 15px;
  }
  .pay .van-tab__pane{
    /* border: solid 1px red; */
    margin-top: 20px;
    padding: 10px 20px;
  }
  .words{
    background-color: #fff;
    margin-bottom: 100px;
  }
  .words span{
    width: 100%;
    display: block;
    line-height: 62px;
    font-size: 16px;
    padding-left: 35px;
    color: #333;
    border: solid 1px rgb(228, 225, 225);
    margin-bottom: 10px;
  }
  .words .message{
    padding: 0 20px;
  }
  .words .message textarea{
    width: 100%;
    height: 60px;
    border-color: rgb(231, 228, 228);
    padding: 5px 10px;
    font-size: 12px;
  }
  .words .msg{
    padding: 5px 20px 20px;
  }
  .words .msg ul li{
    color: #999;
  }
  .wind{
    position: fixed;
    width: 100%;
    height: 60px;
    bottom: 0;
    padding: 10px;
    background-color: #fff;
    border-top: solid 1px rgb(233, 232, 232);
    display: flex;
    justify-content: space-between
  }
  .wind span{
    font-size: 18px;
    color: #333;
  }
  .wind span a{
    color: red;
    padding-left: 10px;
    padding-top: 5px;
  }
  .wind button{
    background-color: red;
    border: none;
    padding: 0 20px;
    border-radius: 20px;
  }
  .wind button a{
    color: #fff;
  }
  .van-tab__pane{
    color: #666;
    font-size: 12px;
    min-height: 60px;
  }
</style>