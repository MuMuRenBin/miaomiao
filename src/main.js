import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'
Vue.prototype.axios=axios;
axios.defaults.baseURL = '/api/'

import { Tabbar, TabbarItem,Tab, Tabs,Icon } from 'vant';
import 'vant/lib/index.css';
import './assets/iconfont/iconfont.css'

Vue.use(Tabbar).use(TabbarItem);
Vue.use(Tab).use(Tabs);
Vue.use(Icon);

Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
