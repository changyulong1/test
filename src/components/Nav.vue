<template>
  <div class="nav">
  <span v-for="(time, index) in list" :key="index" :class="text===time.id?'active':''" @click="active(time.id)">{{  time.name }}</span>
  </div>
</template>

<script lang="ts">

import axios from "axios";
import '../mock/index'
import {ref,onMounted,onUnmounted} from 'vue'
export default {
      name:"Nav",
      emits:['update:id'],
  setup(props:any,centext:any) {
    const text = ref<number>(1)
    const list = ref<[{name:string,id:number}]>()
    onMounted(()=>{
      axios.get('/home/article').then((res)=>{
        list.value = res.data
      })
    })

    const active = (id:number)=>{
      text.value = id
      centext.emit('update:id', id)
    }
    return {text,list,active}
  }
}
</script>

<style scoped>
.nav{
  display: flex;
  justify-content: center;
  padding: 20px 10px;
}
.nav > span{
  margin: 0 20px;
  color: rgba(255, 255, 255, 0.65);
}
span.active{
  color: rgb(255, 255, 255);
  position: relative;
}
span.active:after{
  content: "";
  display: inline-block;
  width: 14px;
  height: 3px;
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 6px;
  background: #535bf2;;
}
</style>
