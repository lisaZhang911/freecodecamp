import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
