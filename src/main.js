import Vue from 'vue'
import App from './App.vue'

// 导入normalize样式
import './assets/css/normalize.css'

// 导入路由
import router from './router/index.js'

// 载入vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
