import Vue from 'vue'
import actions from './actions'
import getters from './getters'
import { GET_TODAY, GET_FUTURE } from '../mutation-types'

const initState = {
  todayWeather: {},
  futureWeather: [],
};

const mutations = {
  [GET_TODAY](state, todayInfo){
    Vue.set(state, 'todayWeather', todayInfo);
  },
  [GET_FUTURE](state, futureInfo){
    Vue.set(state, 'futureWeather', futureInfo);
  }
};

export default {
  state: initState,
  actions,
  getters,
  mutations,
};
