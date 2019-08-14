import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import { Tabbar, TabbarItem,Tab, Tabs,Icon } from 'vant';
import 'vant/lib/index.css';
import './assets/iconfont/iconfont.css'

Vue.use(Tabbar).use(TabbarItem);
Vue.use(Tab).use(Tabs);
Vue.use(Icon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
