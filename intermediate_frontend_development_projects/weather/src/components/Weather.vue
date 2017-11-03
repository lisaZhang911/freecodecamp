<template>
  <div id="weather">
    <img class="logo" src="../../static/loginlogo.png"/>
    <h1 class="logoTitle">天气预报</h1>
    <hr/>
    <h2 class="todayTitle">今天天气</h2>
    <ul class="todayList">
      <li><b>温度：</b>{{getTodayWeather.temperature}}</li>
      <li><b>湿度：</b>{{getTodayWeather.humidity}}</li>
      <li><b>天气情况：</b>{{getTodayWeather.wind}}</li>
      <li><b>风力：</b>{{getTodayWeather.wind}}</li>
      <li><b>穿衣建议：</b>{{getTodayWeather.dressing_advice}}</li>
      <li><b>uv指数：</b>{{getTodayWeather.uv_index}}</li>
      <li><b>洗车指数：</b>{{getTodayWeather.wash_index}}</li>
      <li><b>旅游指数：</b>{{getTodayWeather.travel_index}}</li>
      <li><b>运动指数：</b>{{getTodayWeather.exercise_index}}</li>
    </ul>
    <hr/>
    <h1 class="todayTitle">未来5天天气预报</h1>
    <ul class="futureList">
      <li v-for="item in getFutureWeather">
        <h3>{{item.date}}</h3>
        <h4>{{item.week}}</h4>
        <p><span>{{item.weather}}</span><span>{{item.temperature}}</span></p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Weather',
  data () {
    return {
      cityName: '昆明'
    }
  },
  computed: {
    ...mapGetters([
      'getTodayWeather',
      'getFutureWeather'
    ])
  },
  mounted () {
    this.$store.dispatch('getTodayWeather');
    this.$store.dispatch('getFutureWeather')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#weather{
  width:70%;
  margin: 5% auto;
}
#weather .logo{
  float: left;
  width:13%
}
#weather .logoTitle{
  text-align: center;
  font-size: 26px;
}
#weather .todayTitle{
  font-size: 22px;
}
#weather .todayList{
  width: 80%;
  margin: 0 auto
}
#weather .todayList li {
  display: block;
  text-align: left;
  margin-bottom: 3%
}
#weather .todayList li b {
  width: 80px;
  display: inline-block;
}
#weather .futureList h3,
#weather .futureList h4 {
  font-weight: normal;
}
#weather .futureList h3{
  font-size: 17px;
  display: inline;
}
#weather .futureList h4 {
  font-size: 16px;
  display: inline;
}
#weather .futureList li {
  margin: 0 10px 0 0
}
</style>
