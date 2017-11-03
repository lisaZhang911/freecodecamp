import weatherServ from '../../service/weatherService';
import { GET_TODAY } from '../mutation-types';

const getTodayWeather = ({ commit }) => weatherServ.getTodayWeather()
    .then(({ data }) => {
      //console.log(data)
      commit("GET_TODAY", data)
    })

//const getWeather = ({ commit },   ) => console.log(cityname)

export default {
  getTodayWeather
}
