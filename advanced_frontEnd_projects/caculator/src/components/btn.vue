<template>
  <button class="numberBtn"  @click="showNumber(numberContent)">{{numberContent}}</button>
</template>

<script>
export default {
  name: "",
  props: ['numberContent'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    showNumber:function(number){
      this.$emit('btnNumber', number)
      //console.log(number);
    }
  }
}
</script>

<style scoped>
.numberBtn{
  width: 65px;
  height: 48px;
  background: #fff;
  color: #f19953;
  border: 0;
  outline: none;
  border-radius: 1px
}
</style>
