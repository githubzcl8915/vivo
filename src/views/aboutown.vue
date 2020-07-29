<template>
  <div class="aboutown">

        <!-- 头 -->
        <div class="top">
            <van-nav-bar
            title="关于我们"
            left-arrow
            @click-left="$router.back()"
            :border="false"
            >
            <van-icon class="act" slot="right" />
            </van-nav-bar>
        </div>

        <div class="myself">
            <img src="../assets/images/carousel1.jpg" width="100%">
        </div>

        <div class="company">
            <div class="left">
                <span>公司详情<p></p></span>
                <ul>
                    <li><a>公司名称:</a><a>vivo</a></li>
                    <li><a>联系电话:</a><a>18270034647</a></li>
                    <li><a>公司地址:</a><a>江西南昌青山湖区</a></li>
                    <li><a>最新新品:</a><a>vivo x30</a></li>
                    <li><a>合作公司:</a><a>oppo</a></li>
                </ul>
            </div>
            <div class="right">
                <span>公司详情<p></p></span>
                <ul>
                    <li><a>公司名称:</a><a>vivo</a></li>
                    <li><a>最新新品:</a><a>vivo x30</a></li>
                    <li><a>合作公司:</a><a>oppo</a></li>
                </ul>
            </div>
        </div>

        <div class="copy">
            <p>Copyright © 2013-2019 vivo</p>
        </div>

  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },

}
</script>

<style scoped>

    .myself{
        height: 260px;
        background-color: blue;
        padding-top: 46px;
    }
    .myself img{
        height: 100%;
    }
    .company{
        padding: 15px 20px;
    }
    .company .left{
        margin-bottom: 30px;
    }
    .company .left span{
        color: blue;
        font-size: 18px;
    }
    .company .left span p{
        background-color: skyblue;
        width: 100%;
        height: 10px;
        margin-top: 5px;
    }
    .company .left ul li{
        line-height: 30px;
    }
    .company .left ul li a{
        color: #333;
        margin-right: 15px;
    }

    .company .right{
        margin-bottom: 30px;
    }
    .company .right span{
        color: blue;
        font-size: 18px;
    }
    .company .right span p{
        background-color: skyblue;
        width: 100%;
        height: 10px;
        margin-top: 5px;
    }
    .company .right ul li{
        line-height: 30px;
    }
    .company .right ul li a{
        color: #333;
        margin-right: 15px;
    }
    .copy{
        position: fixed;
        bottom: 0;
        background-color: rgb(233, 233, 235);
    }
    .copy p{
        width: 430px;
        font-size: 12px;
        text-align: center;
        color: #666;
        padding: 10px 50px;
    }
</style>