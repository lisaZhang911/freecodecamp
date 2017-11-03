import Vue from 'vue'
import actions from './actions'
import getters from './getters'
import { GET_TODAY } from '../mutation-types'

const initState = {
  todayWeather: {}
};

const mutations = {
  [GET_TODAY](state, todayInfo){
    Vue.set(state, 'todayWeather', todayInfo);
  }
};

export default {
  state: initState,
  actions,
  getters,
  mutations,
};
