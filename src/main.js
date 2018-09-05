import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/global.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

// 配置axios
Vue.prototype.$http = axios
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// 设置axios拦截器
// 为了配合接口，后台接口每一个访问 都需要token请求头的验证，
// 所以我们再配置axios拦截器 这样就不用每次发送请求，都setheader了
axios.interceptors.request.use(config => {
  const token = window.sessionStorage.getItem('token')
  config.headers.Authorization = token
  console.log(config)
  return config
})

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
