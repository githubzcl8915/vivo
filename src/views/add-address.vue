<template>
  <div class="add-address">

        <!-- 头 -->
        <div class="top">
            <van-nav-bar
                title="新增地址"
                left-arrow
                @click-left="$router.back()"
                :border="false"
            >
            <van-icon class="act" slot="right" />
            </van-nav-bar>
        </div>

        <!-- 地址信息 -->
        <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
        />
        
  </div>
</template>

<script>
import areaList from '../area.js';
export default {
    data(){
        return{
            areaList,
            searchResult: [],
            list:[]
        }
    },
    methods: {
        onSave(val) {

            let list = JSON.parse(localStorage.getItem('vivoaddress')|| '[]')                        

            let obj = {}
            if(!list.length){
                obj.id = 1;
            }else{
                obj.id = list.length + 1
            }
            obj.name = val.name;
            obj.tel = val.tel;
            obj.address = val.city + val.county + val.addressDetail
            list.push(obj)

            console.log(list.length + 1)
            // Toast('save');
            // console.log(val)
            localStorage.setItem('vivoaddress',JSON.stringify(list));
            this.$router.back()
        },
        onDelete() {
            Toast('delete');
        },
        onChangeDetail(val) {
            if (val) {
                this.searchResult = [{
                name: '黄龙万科中心',
                address: '杭州市西湖区'
                }];
            } else {
                this.searchResult = [];
            }
        },
    }
}
</script>

<style scoped>
    .van-address-edit{
        margin-top: 46px;
        padding: 10px 15px;
    }
</style>