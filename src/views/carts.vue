<template>
  <div class="carts">

        <!-- 头 -->
        <div class="top">
            <van-nav-bar
            title="购物车"
            left-arrow
            @click-left="$router.back()"
            :border="false"
            >
            <van-icon class="act" slot="right" />
            </van-nav-bar>
        </div>

        <!-- 商品 -->
        <div class="shopgoods">

              <van-cell-group v-if="!commodity.length">
                <van-cell value="暂无商品 !" />
            </van-cell-group>
            <van-card
            v-for="item in commodity"
            :key="item.id"
            :num="item.num"
            :price="item.price.slice(1)"
            :desc="item.info"  
            :title="item.name"
            :thumb="item.src[0]"
            v-else
            >
                <div slot="footer">
                    <van-button size="mini" @click="delshop(item.id)">移除</van-button>
                    <!-- <van-button size="mini">按钮</van-button>
                    <van-button size="mini">按钮</van-button> -->
                </div>
            </van-card>
        </div>

        <!-- 提交订单 -->
        <van-submit-bar
            :price="totalcalcu"
            button-text="提交订单"
            @submit="onSubmit"
            :decimal-length="2"
            >
            <van-checkbox v-model="checked">全选</van-checkbox>
        </van-submit-bar>

  </div>
</template>

<script>
export default {
    data(){
        return{
            checked: false,
            commodity:[],
            totalprice: 0,
            trims: 2,
            commodity:function(){
                var getgoods =  JSON.parse(localStorage.getItem('vivocart') || '[]');
                return getgoods;
            }()
        }
    },
    // created(){
    //     this.getgoods();
    // },
    methods:{
        onSubmit(){
            alert('没有商品')
        },
        // getgoods(){
        //     this.commodity = JSON.parse(localStorage.getItem('vivocart') || '[]')
        //     // console.log(this.commodity)
        // },
        delshop(id){
            // 移除单个商品
            // console.log(111)
            this.commodity = this.commodity.filter(item =>{
                return item.id != id
            })
            localStorage.setItem('vivocart', JSON.stringify(this.commodity) );
            // console.log(this.commodity)

        },
    },
    computed:{

        totalcalcu(){
            var total = 0;
            // this.commodity = JSON.parse(localStorage.getItem('vivocart') || '[]')
            this.commodity.forEach(item => {
                total += item.num * parseInt(item.price.slice(1));
                this.totalprice = total * 100
            });
            
            return this.totalprice
            localStorage.setItem('vivocart', JSON.stringify(this.commodity) );

        }

    },
    updated(){
        // console.log(11)
        // this.totalprice
        // console.log(this.totalprice)
        
    }
}
</script>

<style scoped>
    .shopgoods{
        padding: 55px 15px 0;
    }
    .van-submit-bar{
        padding: 0 15px;
    }
    .van-button--mini{
        background-color: red;
        border: none;
        color: #fff;
        height: 30px;
        padding: 3px 20px;
        border-radius: 15px;
    }
    .van-cell__value--alone{
        text-align: center;
        color: red;
        font-size: 18px;
    }
</style>