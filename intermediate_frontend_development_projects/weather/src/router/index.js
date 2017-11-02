import Vue from 'vue'
import Router from 'vue-router'
import Weather from '@/components/Weather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Weather
    }
  ]
})
