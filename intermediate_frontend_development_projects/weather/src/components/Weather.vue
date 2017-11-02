<template>
  <div id="weather">
    <img class="logo" src="../../static/loginlogo.png"/>
    <h1 class="logoTitle">天气预报</h1>
    <hr/>
    <h2 class="todayTitle">今天天气</h2>
    <ul class="todayList">
      <li>温度:</li>
      <li>湿度：</li>
      <li>天气情况：</li>
      <li>风力：</li>
      <li>穿衣建议：</li>
      <li>uv指数：</li>
      <li>洗车指数：</li>
      <li>旅游指数：</li>
      <li>运动指数：</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      cityName: '昆明'
    }
  },
  mounted () {
    //console.log('mm')
    this.$store.dispatch('getWeather',{cityname:this.cityName})
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
#weather .todayList {
  width: 55%;
  margin: 0 auto
}
#weather li {
  display: block;
  text-align: left;
  margin-bottom: 3%
}
</style>
