import Vue from 'vue'

const getTodayWeather = () => Vue.axios.get('/api/today');

export default {
  getTodayWeather
}
