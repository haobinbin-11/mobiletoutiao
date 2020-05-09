import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
Vue.config.productionTip = false
//  创建Vue根实例 将 router strore 配置到
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
