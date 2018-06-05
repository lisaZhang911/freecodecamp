import Vue from 'vue';

const getWikiList = (searchWikiInfo) => Vue.axios.get('/api/w/api.php',{params: searchWikiInfo})

export default {
  getWikiList
}
