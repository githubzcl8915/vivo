<template>
    <div class="address">
      <!-- <h2>我是地址</h2> -->
        <!-- 头 -->
        <div class="top">
            <van-nav-bar
                title="管理收货地址"
                left-arrow
                @click-left="$router.back()"
                :border="false"
            >
            <van-icon class="act" slot="right" />
            </van-nav-bar>
        </div>

        <!-- 添加的地址信息 -->
        <div class="person-address">
            <van-address-list
                :list="list"
                v-model="chosenAddressId"
                @add="onAdd"
                @edit="onEdit"
            />
        </div>

        <!-- 添加地址 -->
        <van-address-list
            v-model="chosenAddressId"
            @add="onAdd"
            @edit="onEdit"
        />
    </div>
</template>

<script>
export default {
    data(){
        return{
            chosenAddressId: '1',
            list:[
                
            ]
        }
    },
    created(){
        this.getarea()
    },
    methods:{
        onAdd(){
            // console.log(this.$route)
            this.$router.push('/add-address')
        },
        onEdit(){
            console.log(111)
        },
        getarea(){
            // let obj = {}
            // let a = JSON.parse(localStorage.getItem('vivoaddress')|| '[]')
            // if(!this.list.length){
            //     obj.id = 1;
            // }else{
            //     obj.id = this.list.length + 1
            // }
            // obj.name = a.name;
            // obj.tel = a.tel;
            // obj.address = a.city + a.county + a.addressDetail
            // this.list.push(obj)
            // console.log(this.list)

            let a = JSON.parse(localStorage.getItem('vivoaddress')|| '[]')            
            a.forEach(item => {
                this.list.push(item)
            });
        }
    }
}
</script>

<style scoped>
    .address{
        margin-top: 46px;
    }
    .person-address{
        margin-top: 50px;
    }
</style>