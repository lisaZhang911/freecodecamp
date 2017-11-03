import weatherServ from '../../service/weatherService';
import { GET_TODAY, GET_FUTURE } from '../mutation-types';

const getTodayWeather = ({ commit }) => weatherServ.getTodayWeather()
    .then(({ data }) => {
      //console.log(data)
      commit("GET_TODAY", data)
    });
const getFutureWeather = ({ commit }) => weatherServ.getFutureWeather()
    .then(({data}) => {
      commit("GET_FUTURE",data)
    })

//const getWeather = ({ commit },   ) => console.log(cityname)

export default {
  getTodayWeather,
  getFutureWeather,
}
