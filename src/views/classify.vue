<template>
  <div class="classify">
      
      <!-- 头 -->
      <div class="top">
        <van-nav-bar
          title="商品类别"
          left-arrow
          @click-left="$router.back()"
          :border="false"
        >
        <van-icon class="act" slot="right" />
        </van-nav-bar>
      </div>

      <!-- <h2>我是分类</h2> -->
      <div class="zcl-aside">
        <van-sidebar v-model="activeKey">
            <van-sidebar-item 
            v-for="(item,index) in navs"
            :key="item.id"
            :title="navs[index].name" 
            :info="item.info"
            @click="toproduct(item.id)"
            >
            </van-sidebar-item>
        </van-sidebar>
      </div>

      <div class="zcl-gird">
        <van-grid :column-num="3" :gutter="10">
            <van-grid-item 
            v-for="item in sorts"
            :key="item.id"
            :to="'/pro-imforma/'+item.id"
            >
                <van-image :src="item.src"  />
            </van-grid-item>
        </van-grid>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            activeKey: 0,
            active: 0,
            navs: [
                { id:1, name:'全部' },
                { id:2, name:'Xplay' },
                { id:3, name:'X系列' },
                { id:4, name:'Y系列' },
                { id:5, name:'充电器' },
                { id:6, name:'保护膜'},
                { id:7, name:'耳机音箱' },
            ],
            classtify:[
                {id: 1, name: 'X9Plus',sort: 3,src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/71/4171_1496689409434hd_530x530.png'}, 
                {id: 2, name: 'X20Plus',sort: 3,src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/40/4440_1508723830538hd_530x530.png'},
                {id: 3, name: 'Y69',sort: 4,src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/95/4495_1509454710945hd_530x530.png'},
                {id: 4, name: 'Xplay6',sort: 2,src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/66/4266_1496689781362hd_530x530.png'},
                {id: 5, name: 'Y55',sort: 4,src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/11/4111_1492998667334hd_530x530.png'},
                {id: 6, name: 'Y66',sort: 4,src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/80/4180_1496689544465hd_530x530.png'},
                {id: 101, name: '乐心手环',sort: 7,src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/27/5027_1526972514378hd_530x530.png'},
                {id: 102, name: '闪充充电器',sort: 5,src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/20/4020_1481558694236_530x530.png'},
                {id: 103, name: '原装音乐耳机',sort: 7,src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/82/1882_1481558960471_530x530.png'},
                {id: 104, name: '原装数据线',sort: 5,src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/59/4459_1506593158905hd_530x530.png'},
                {id: 105, name: '原装钢化膜',sort: 6,src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/83/4183_1482921083765_530x530.png'},
                {id: 106, name: '3d高清保护膜',sort: 6,src:'https://shopstatic.vivo.com.cn/vivoshop/commodity/81/4181_1482720908043_530x530.png'},
            ],
            sorts:[]
        }
    },
    created(){
        this.toproduct(1)
    },
    methods:{
        toproduct(id){
            // console.log(id)
            this.sorts = this.classtify.filter(item => {
                if(id == 1){
                    return item
                }
                return item.sort == id
                // console.log(typeof item.sort)
            })
            // console.log(this.sorts)
        }
    }
}
</script>

<style scoped>
    .classify{
        display: flex;
        padding-top: 46px;
    }
    .van-sidebar{
        width: 85px;
    }
    .zcl-gird{
        flex-grow: 1;
        padding: 12px 0;
        /* padding-right: 0; */
    }
    .zcl-aside{
        width: 85px;
    }
</style>