import weatherServ from '../../service/weatherService'

const getWeather = ({ commit }, { cityname }) => weatherServ.getWeather(cityname)

//const getWeather = ({ commit },   ) => console.log(cityname)

export default {
  getWeather
}
