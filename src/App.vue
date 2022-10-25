<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import List from './components/List.vue'
import  {ref,onMounted,reactive,onUnmounted} from 'vue'
import "./icon.js"
import axios from "axios";
import './mock/index'
const data = ref<Data>()
const listdata = ref<Data>()
const boxWidth = ref()
onMounted(()=>{
  axios.get('/home/data').then((res)=>{
    listdata.value = res.data.data
    data.value = res.data.data.filter((time:RootState) =>{ return time.categoryId === 1})
  })
})
const getId = (val:number)=>{
  if(typeof listdata.value !== 'undefined'){
    data.value = listdata.value.filter(time =>{
      return time.categoryId === val
    })
  }
}
window.onresize = () => {
  return (() => {
    console.log(document.body.clientWidth);
    boxWidth.value.style.maxWidth = document.body.clientWidth +'px'
  })()
}

</script>

<template>
 <div class="wrap" ref="boxWidth">
  <Header></Header>
   <Nav @update:id="getId"></Nav>
   <List :data ="data"></List>
 </div>
</template>

<style  scoped>
.wrap{
  width: 414px;
  height: 100%;
  background: rgb(21, 22, 42);
}


</style>
