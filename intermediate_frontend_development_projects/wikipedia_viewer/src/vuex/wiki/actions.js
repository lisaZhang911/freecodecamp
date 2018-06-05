import wikiService from '../../service.js'

const getWikiList = ({ commit },wikiSearchInfo) => {
     wikiService.getWikiList(wikiSearchInfo).then((resp) => {
       //console.log(resp.data.query.pages);
       commit('getWikiList',resp.data.query.pages)
     })
}

export {
  getWikiList
}
