import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(lazyload,{
  loading: require("./assets/img/common/placeholder.png")
})

new Vue({
  router,
  store,
  lazyload,
  render: h => h(App)
}).$mount('#app')
