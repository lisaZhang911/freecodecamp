import Vue from 'vue'
import Vuex from 'vuex'
import WeatherStore from './weather/store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    weather: WeatherStore
  }
})
