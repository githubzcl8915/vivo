<template>
  <div class="own">

      <!-- 头 -->
      <div class="top">
        <van-nav-bar
          title="个人中心"
          left-arrow
          @click-left="$router.back()"
          @click-right="member"
          :border="false"
        >
        <van-icon class="act" name="contact" slot="right" />
        </van-nav-bar>
      </div>

      <!-- <h2>我是我的</h2> -->
      <div class="zcl-banner">
          <div class="avatar">
              <img src="../assets/lbj-min1.jpg">
              <h3>LBJ</h3>
              <p>我是谁，我在哪，我在干什么？</p>
          </div>
      </div>

        <van-grid :column-num="3" :border="false">
            <van-grid-item
                v-for="item in integral"
                :key="item.id"
            >
            <span class="zcl-num">{{item.num}}</span>
            <p class="zcl-names">{{item.names}}</p>
            </van-grid-item>
        </van-grid>

      <div class="zcl-order">
        <router-link :to="'/ownorder'">
            <van-panel title="我的订单" status="全部订单 >"></van-panel>
            <div class="zcl-gird">
                <van-grid :border="false">
                    <van-grid-item
                    v-for="item in order"
                    :key="item.id"
                    :icon="item.icon" 
                    :text="item.title"
                    :to="'/ownorder'" />
                </van-grid>
            </div>
        </router-link>
      </div>

      <van-cell-group>
        <van-cell 
        v-for="(items,i) in groups"
        :key="items.id"
        :icon="items.icon" 
        :title="items.name" 
        @click="codeshow(i)"
        is-link 
        :to="items.path"
        >
        </van-cell>
      </van-cell-group>

    <!-- 扫码分享 -->
    <van-dialog
      v-model="show"
      title="扫描二维码"
      show-cancel-button
      :showCancelButton ="closebtn"
    >
    <img src="../assets/images/timg.jpg">
    </van-dialog>

  </div>
</template>

<script>
export default {
    data(){
        return {
            show: false,
            closebtn:false,
            groups:[
                {id:1,name:'我的收藏',icon:'star-o',path:'/collection'},
                {id:2,name:'我的收货地址',icon:'records',path:'/address'},
                {id:3,name:'我的购物车',icon:'shopping-cart-o',path:'/carts'},
                {id:4,name:'扫码分享',icon:'qr',fn: () => {
                    this.show = true
                }},
                {id:5,name:'关于我们',icon:'info-o',path:'/aboutown'},
            ],
            integral:[
                {id:1,num:0, names:'优惠券'},
                {id:2,num:0, names:'换奖励金'},
                {id:3,num:0, names:'积分'},
            ],
            order:[
                {id:1, icon: 'send-gift-o', title:'待付款'},
                {id:2, icon: 'video-o', title: '待收货'},
                {id:3, icon: 'flower-o', title: '待评价'},
                {id:4, icon: 'notes-o', title: '退款/收货'},
            ]
        }
    },
    methods:{
        codeshow(i){
            // console.log(this.groups[i].name)
            if(this.groups[i].name == '扫码分享'){
                this.show = true
            }
        },
        member(){
            // alert(111)
            this.$router.push('/member')
        }
    }
}
</script>

<style scoped>
    .own{
        margin-top: 46px;
    }
    .zcl-banner{
        width: 100%;
        height: 160px;
        background-image: linear-gradient(rgb(106, 194, 252),rgb(30, 164, 247));
        display: flex;
        justify-content: center;
        align-items: center
    }
    .avatar{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column
    }
    .avatar h3{
        color: #fff;
        font-weight: normal;
    }
    .avatar p{
        color: #fff;
        font-size: 12px;
    }
    img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
    .zcl-gird{
        padding-top: 20px;
        background-color: #fff;
    }
    .zcl-num{
        margin-bottom: 3px;
    }
    .zcl-num,
    .zcl-names{
        color: #333;
        font-size: 12px;
    }
    .zcl-order{
        padding: 5px 0;
        background-color: rgb(248, 246, 246)
    }
    .van-cell__value span{
        color: #333
    }
    .van-dialog__content img{
        width: 120px;
        height: 120px;
        display: block;
        margin: 0 auto;
        border-radius: 0
    }
    .van-nav-bar__right i {
        padding-right: 10px;
    }
</style>
<style>
.zcl-order .van-grid-item__icon{
    font-size: 34px;
    color: rgb(51, 155, 253);
}
.zcl-order  span{
    color: #333
}
</style>