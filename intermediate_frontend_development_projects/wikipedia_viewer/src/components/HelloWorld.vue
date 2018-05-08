<template>
  <div class="hello">
      <a class="linkTopic link" @click="searchRandom">click hear for random article</a>
      <div class="searchArea" :class="{active: isActive}" @click="searchState" >
        <input class="glass" type="text" v-model="searchVal" @keyup.enter="searchWiki" />
      </div>
      <p class="linkTopic">Click icon to search</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      isActive: false,
      searchVal: ''
    }
  },
  methods: {
    searchState: function(){
      this.$set(this, 'isActive', true)
    },
    searchRandom: function(){
      window.open('http://en.wikipedia.org/wiki/Special:Random')
    },
    searchWiki: function(){
      axios.get('https://en.wikipedia.org/w/api.php')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin-top: 15%
}
.hello .linkTopic{
  color: #fff;
  display: block;
}
.hello .link {
  cursor: pointer;
}
.searchArea {
  width: 32px;
  margin: 25px auto;
  border: 4px solid  #D96F32;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  position: relative;
  cursor: pointer;
}
.searchArea::before {
  content: '';
  position: absolute;
  width: 21px;
  height: 3px;
  transform: rotate(34deg);
  right: -20px;
  bottom: -1px;
  background: #D96F32
}
.glass {
  display: inline-block;
  visibility: hidden;
  width: 100%;
  height: 32px;
  outline: none;
  border: 0;
  padding: 0 8px;
  font-size: 15px;
  background: transparent
}
.searchArea.active {
  animation: changeGlass 1s;
  animation-fill-mode: forwards;
}
.searchArea.active::before {
  animation: vanish 1s;
  animation-fill-mode: forwards;
}
.searchArea.active .glass {
  visibility: visible;
  color: #fff;
}
@keyframes changeGlass {
  from {width: 32px}
  to {width: 200px}
}
@keyframes vanish {
  from {opacity: 1}
  to {opacity: 0}
}
</style>
