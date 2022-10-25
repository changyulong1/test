<template>
<div class="header">
     <div>
       <span @click="fallback">
       <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiantouxia"></use>
      </svg>
       </span>
       <span>测试标题</span>
     </div>
     <button @click="upper">上架</button>

   </div>

</template>

<script lang="ts">
import {ref} from 'vue'
import { Dialog } from 'vant';
export default {
      name:"Header",
      setup(props:any,centext:any){

        const fallback = ()=>{
          console.log(666)
          Dialog.confirm({
            message: '确认要退回页面',
          }).then(() => {
            console.log('确定')
          })  .catch(() => {
            console.log('取消')
          });;
        }
        const upper =()=>{
          console.log(555)
          console.log(centext)
          Dialog.confirm({
            message: '请上架产品',
          }).then(() => {
            console.log('确定')
          }).catch(() => {
            console.log('取消')
          });;

        }
        return {fallback,upper}
      }
}
</script>

<style scoped>
.header{
  height: 42px;
  /*background: rgba(120, 120, 120, 0.1);*/
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: rgba(120, 120, 120, 0.1)
}
.header > button{
  width: 49px;
  height: 22px;
  color: white;
  border-radius: 4px;
  background: rgb(61, 151, 255);;
  font-size: 10px;
}
.header>div{
  color: white;
}
.header>div>span{
  display: inline-block;
  margin-right: 10px;
}
.left {

}
.right{

}

</style>
