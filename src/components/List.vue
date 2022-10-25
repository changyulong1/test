<template>
  <div class="list">
     <div v-for="(time, index) in data" :key="index">
       <div>
         <div class="loog">
           <span class="left"><img src="../assets/images/tag1.png" alt=""></span>
           <span class="right"><img src="../assets/images/atlas.png" alt=""></span>
         </div>
         <img :src="`src/assets/images/${time.img}`" alt="图片">
         <div class="biaoji">
           <span><img v-if="time.isCast" src="../assets/images/cast.png" alt=""></span>
           <span><img v-if="time.isExchange" src="../assets/images/exchange.png" alt=""></span>
         </div>
         <div class="text">{{ time.name }}}</div>
       </div>
       <div class="bottom"><span>{{ time.id }}</span> <span class="right"><img  :src="`src/assets/images/${time.is3D ? '3d.png' : '2d.png'}`" alt=""></span></div>
       <div class="button"><button @click="lower(time.id)">下架</button></div>
     </div>
   </div>
</template>

<script lang="ts">
import {Dialog} from "vant";

export default {
      name:"List",
      props:['data'],
      setup(props:any,centext:any){
        const lower = (id:number)=>{
          console.log(3333)
          Dialog.confirm({
            message: `确认要把${id}下架`,
          }).then(() => {
            console.log('确定')
          }).catch(() => {
            console.log('取消')
          });;
        }
        return {lower}
      }
}
</script>

<style  scoped>

.list{
  display: flex;
  padding: 0 10px;
  flex-wrap:wrap;
  width:100%;
}
.list > div{
  width: 50%;
  padding: 0 10px;
  margin-bottom: 10px;

}
.list > div >div{
  position: relative;

}
.list > div > div >.loog{
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
}
.list > div > div >.loog > .left{
  width: 48px;
  height: 17px;
  margin: 8px;
}
.list > div > div >.loog > .right{
  width: 25px;
  height: 25px;
  margin: 6px;
}
.list > div > div >img{
  width: 100%;
}
.list > div > div >.text{
  width: 100%;
  position: absolute;
  bottom: 0;
  color: white;
  font-size: 14px;
  margin-bottom: 8px;
  text-align: center;
}
.list > div > div >.biaoji{
  position: absolute;
  bottom: 34px;
  right: 0;
  display: flex;
  flex-direction: column;
}
.list > div > div >.biaoji >span{
  width: 29px;
  height: 27px;
}
.list > div >.bottom{
  display: flex;
  justify-content: space-between;
  color: white;
}
.list > div >.bottom > .right{
  width: 23px;
  height: 23px;
}

.list > div > .button{
  display: flex;
  justify-content: end;


}
.list > div > .button >button {
  background:  rgb(227, 81, 81);;
  font-size: 14px;
  color: white;
  padding: 1px 11px 3px;

}
</style>
