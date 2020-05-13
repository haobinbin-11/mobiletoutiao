import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载 Vant 组件库样式
import 'vant/lib/index.css'

// 加载 Vant 组件库
import Vant from 'vant'

// 手动设置 REM 基准值 (html 标签字体大小)
import 'amfe-flexible'

// 加载全局样式(放在最后方便覆盖第三方包样式)
import './styles/index.css'

import './utils/dayjs'
Vue.use(Vant)
Vue.config.productionTip = false
//  创建Vue根实例 将 router strore 配置到
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
