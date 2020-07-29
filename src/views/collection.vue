<template>
  <div class="collection">

        <div class="top">
        <van-nav-bar
            title="我的收藏"
            left-arrow
            @click-left="$router.back()"
            :border="false"
        >
        <van-icon class="act"  slot="right" />
        </van-nav-bar>
        </div>
        
      <!-- <h2>我是收藏页面</h2> -->
      <van-tabs v-model="active" title-active-color="red">
        <van-tab v-for="item in shop" :key="item.id" >
            <div slot="title">
                <van-icon />{{item.name}}
            </div>

            <!-- 收藏商品 -->
            <div class="collect-pro" v-if="item.name=='商品'">
                <div class="collect-odd" v-for="item in collection" :key="item.id">
                    <van-card
                        num="2"
                        price="2.00"
                        desc="描述信息"  
                        title="商品标题"
                        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                    />
                </div>
            </div>

            <!-- 收藏文章 -->
            <div class="collect-art" v-else>
                <div class="article" v-for="item in collection" :key="item.id">
                    <h3>vivo X21冰钻黑图赏，黑色也要唱着高调</h3>
                    <p>X21带来了3D玻璃机身，这种质感过渡，在黑色版本上基本不会视觉残留，就像黑的看不见接缝，看不到瑕疵。</p>
                    <div class="time-del">
                        <span>2019-8-23</span>
                        <span @click="delart"><van-icon name="bag" color="gray" size="20"/></span>
                    </div>
                </div>
            </div>
            
        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
export default {
    data(){
        return {
            active:0,
            shop:[
                {id:1, name:'商品',cont:'我是商品'},
                {id:2, name:'文章',cont:'我是文章'},
            ],
            collection:[
                {id:1},
                {id:2},
                {id:3},
            ]
        }
    },
    methods:{
        delart(){
            alert('抱歉，暂时无法删除!')
        }
    }
}
</script>

<style scoped>
    .collection{
        margin-top: 45px;
        background-color: rgb(243, 242, 242);
        height: 100vh
    }
    .van-tabs{
        position: fixed;
        top: 46px;
        width: 100%;
    }
    .collect-odd{
        margin-bottom: 10px;
    }
    .collect-pro{
        padding: 0 10px;
    }
    .collect-art{
        padding: 0 5px;
    }
    .article{
        background-color: #fff;
        padding: 5px 10px;
        margin-bottom: 10px;
    }
    .article h3{
        color: #333;
        line-height: 20px;
        margin-bottom: 10px;
        color: rgb(248, 77, 77)
    }
    .article p{
        line-height: 20px;
        margin-bottom: 10px;
        color: #666
    }
    .article .time-del{
        display: flex;
        justify-content: space-between;
    }
</style>
<style>
    .van-tabs__content{
        margin-top: 10px;
    }
</style>