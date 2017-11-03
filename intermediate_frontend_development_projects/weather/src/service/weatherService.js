import Vue from 'vue'

const getTodayWeather = () => Vue.axios.get('/api/today');
const getFutureWeather = () => Vue.axios.get('/api/future');

export default {
  getTodayWeather,
  getFutureWeather
}
