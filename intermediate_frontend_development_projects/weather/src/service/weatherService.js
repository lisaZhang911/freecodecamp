import Vue from 'vue'
// import axios from 'axios'
// import vueAxios from 'vue-axios'
// Vue.use(axios,vueAxios)

const getWeather = (cityName) => Vue.axios.get('/api/');

export default {
  getWeather
}
