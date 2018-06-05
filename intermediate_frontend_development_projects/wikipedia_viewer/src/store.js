import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);

import wikiList_store from './vuex/wiki/store.js'

export default new vuex.Store({
  modules: {
    wikiList_store
  }
})
