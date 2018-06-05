import * as wikiSearchActions from './actions.js'
import * as wikiSearchGetters from './getters.js'

export default {
  state:{
    wikiList:{}
  },
  mutations: {
    getWikiList:function(state,wikilist){
      //console.log(wikilist);
      state.wikiList = wikilist
    }
  },
  actions:{
    getWikiList: wikiSearchActions.getWikiList
  },
  getters:{
    wikiList: wikiSearchGetters.getWikiList
  }
}
