<template>
  <div class="news">

      <!-- 头 -->
      <div class="top">
        <van-nav-bar
          title="新闻资讯"
          left-arrow
          @click-left="$router.back()"
          :border="false"
        >
        <van-icon class="act" slot="right" />
        </van-nav-bar>
      </div>

      <div class="shopnew">
        <ul>
          <li v-for="item in new_" :key="item.id">
            <router-link :to="'/news-detail'">
              <h3>{{item.title}}</h3>
              <img :src="item.src">
              <p>{{item.cont}}</p>
              <span>{{item.time}}</span>
            </router-link>
          </li>
        </ul>
      </div>

  </div>
</template>

<script>
export default {  
  data(){
    return{
      new_:[
        {id:1, title:'vivo X21全面屏手机五大个热门问题详解',
          src:'https://bbsfiles.vivo.com.cn/vivobbs/attachment/portal/201804/18/211307l0sr8tqrpststut0.jpg',
          cont:'X21给人的第一感觉是比X20更加惊艳的，6.28英寸的大屏幕，19:9的屏幕比例，屏占比达到了90.3%，全面屏视野比X20更加广阔。',
          time:'发布日期 2018-4-18'
        },
        {id:2, title:'vivo X21屏幕指纹版，黑科技多到爆',
          src:'https://bbsfiles.vivo.com.cn/vivobbs/attachment/portal/201804/12/190408w8123imwv3w22z4t.jpg',
          cont:'vivo X21屏幕指纹版已经是vivo第二款屏幕指纹手机"简称X21UD"，也是目前全世界在售手机中唯一一款屏幕指纹解锁手机。',
          time:'发布日期 2018-4-18'
        },
        {id:3, title:'vivo X21冰钻黑图赏，黑色也要唱着高调',
          src:'https://bbsfiles.vivo.com.cn/vivobbs/attachment/portal/201804/23/175957thm7fz3m6am6l7fz.jpg',
          cont:'X21带来了3D玻璃机身，这种质感过渡，在黑色版本上基本不会视觉残留，就像黑的看不见接缝，看不到瑕疵。',
          time:'发布日期 2018-4-18'
        },
        {id:4, title:'你的女朋友vivo X21，从内到外都是美',
          src:'https://bbsfiles.vivo.com.cn/vivobbs/attachment/portal/201804/18/210355fmpl8qqnu737qlz9.jpg',
          cont:'X21屏幕指纹版可是拥有一项黑科技的，那就是屏幕指纹解锁。这项科技目前全球只有vivo拥有，没有之一。',
          time:'发布日期 2018-4-18'
        },
      ]
    }
  }
}
</script>

<style scoped>
  .news{
    margin-top: 46px;
  }
  .shopnew{
    margin-bottom: 80px;
  }
  .shopnew ul{

  }
  .shopnew ul li{
    padding: 0 10px;
  }
  .shopnew ul li h3{  
      color: #505b63;
      font-size: 20px;
      font-weight: normal;
      margin-left: 10px;
      line-height: 62px;
  }
  .shopnew ul li img{
    width: 100%;
  }
  .shopnew ul li p{
    padding-top: 12px;
    color: #696969;
    font-size: 12px;
    margin-bottom: 8px;
  }
  .shopnew ul li span{
    color: #696969;
    font-size: 12px;
  }
</style>