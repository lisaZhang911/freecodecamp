import wikiListStore from './store.js'

const getWikiList = () => wikiListStore.state.wikiList || {}

export {
  getWikiList
}
