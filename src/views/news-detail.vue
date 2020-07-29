<template>
  <div class="news-detail">

    <!-- 头 -->
    <div class="top">
        <van-nav-bar
            title="资讯详情"
            left-arrow
            @click-left="$router.back()"
            :border="false"
        >
        </van-nav-bar>
    </div>

    <div class="cont">
    
        <img src="https://bbs.vivo.com.cn/forum.php?mod=image&aid=6487059&size=720x0&key=95498692e14f5992&type=fixnone" alt="">
        <p>和以往的vivo X系列不同，vivo X21这一次的包装不再沿用白色的简约设计，反而是用了深蓝色的外包装，增加了一点科技感和炫酷感。</p>
        <img src="https://bbs.vivo.com.cn/forum.php?mod=image&aid=6487084&size=720x0&key=7f1f552b52fc3a49&type=fixnone" alt="">
        <p>在附件方面，和X20一样，有透明手机壳x1、充电器、耳机一副。手机本身有原装贴膜，不过自X20开始，就没有再附送多一张贴膜了。
            vivo X21标配的耳机是XE680/XE710两款耳机随机发送，铛儿拿到的是XE710耳机，刚好可以和之前用过的XE600i和XE680做个对比。</p>
        <img src="https://bbs.vivo.com.cn/forum.php?mod=image&aid=6487091&size=720x0&key=6ed55c3127662901&type=fixnone" alt="">
        <p>XE710耳机的外形采用了人耳耳廓仿真外形的设计，佩戴起来比XE680更加舒适。铛儿的耳廓属于较小的类型，所以之前佩戴XE600i和X
            E680耳机时，都很容易下滑掉落，XE710的外形设计对我来说刚刚好，隔音效果也很不错，也不会像XE680一样戴久了出现耳朵疼的情
            况。不过，由于XE710是随机发送的，所以能不能拿到这副标配耳机全靠运气咯~</p>
        <img src="https://bbs.vivo.com.cn/forum.php?mod=image&aid=6487095&size=720x0&key=a6f6e8aeae4cbe9c&type=fixnone" alt="">
        
        <div class="giveassist">
            <button>点赞</button>
            <button>收藏</button>
        </div>

    </div>

  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>

    .cont{
        margin-top: 46px;
        padding: 0 20px;
    }
    .cont img{
        width: 100%;
    }
    .cont p{
        padding: 15px 0;
        font-size: 16px;
    }
    .cont .giveassist{
        padding: 15px 50px 25px;
        display: flex;
        justify-content: space-between
    }
    .cont .giveassist button{
        border: solid 1px skyblue;
        background-color: #fff;
        color: skyblue;
        padding: 10px 40px;
        border-radius: 20px;
    }
</style>