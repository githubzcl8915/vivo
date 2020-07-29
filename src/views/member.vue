<template>
  <div class="member">
        <!-- 头 -->
        <div class="top">
            <van-nav-bar
            title="会员登录"
            left-arrow
            @click-left="$router.back()"
            :border="false"
            >
            <van-icon class="act" name="contact" slot="right" />
            </van-nav-bar>
        </div>

        <div class="memberin">
            <div class="memberinfo">
                <van-cell-group>
                <van-field
                    v-model="username"
                    required
                    clearable
                    label="用户名"
                    right-icon="question-o"
                    placeholder="请输入用户名"
                    @click-right-icon="$toast('question')"
                />

                <van-field
                    v-model="password"
                    type="password"
                    label="密码"
                    right-icon="eye-o"
                    placeholder="请输入密码"
                    required
                    @click-right-icon="ops"
                />
                </van-cell-group>
            </div>

            <div class="inbtn">
                <van-button type="info" size="large">登录</van-button>
            </div>

            <div class="mode">
                <van-divider>其他方式登录</van-divider>
            </div>

            <!-- 登录方式 -->
            <div class="register">
                <div class="qq">
                    <van-icon name="user-circle-o" size="45" color="#1989fa"/>
                    <p>QQ</p>
                </div>
                <div class="wx">
                    <van-icon name="manager-o" size="45" color="#1989fa"/>
                    <p>微信</p>
                </div>
            </div>
        </div>

        


  </div>
</template>

<script>
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        ops(){
            // alert(this.type)
            let a = document.getElementsByClassName('van-field__control')[1]

            if(a.type == 'text'){
                a.type = 'password'
            }else if(a.type == 'password'){
                a.type = 'text'
            }

        }
    }
}
</script>

<style scoped>
.van-nav-bar__right i{
    padding-right: 10px;
}
.van-nav-bar__title{
    color: rgb(34, 120, 250);
}
.memberin{
    padding: 80px 30px 0;
}
.memberinfo{
    margin-bottom: 45px;
}
.inbtn{
    margin-bottom: 20px;
}
.register{
    padding: 30px 80px;
    display: flex;
    justify-content: space-between
}
.register p{
    text-align: center;
    color: rgb(68, 68, 247);
    font-size: 14px;
}
.register .qq{

}
.register .wx{

}
/* .van-icon{
    color: rgb(34, 120, 250);
} */
</style>

<style>

</style>