import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import vant from 'vant';
import 'vant/lib/index.css';

console.log(vant)
import App from './App.vue'
const app = createApp(App)



app.use(ElementPlus)
app.use(vant)
app.mount('#app')
