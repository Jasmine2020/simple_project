import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(VeeValidate)
Validator.localize('zh_CN', zh)

axios.defaults.baseURL = 'http://localhost:3000'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
