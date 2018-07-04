<template>
  <div class="hello">
    <div class="calculate">
      <input class="screen" :value="displayResult" readonly="readonly">
      <calcuButton numberContent="7" v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent="8" v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent="9" v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent="*" v-on:btnNumber="showNumber"></calcuButton>
    </div>
  </div>
</template>

<script>
import Btn from './btn'

export default {
  name: 'HelloWorld',
  components: {
    'calcuButton': Btn
  },
  computed: {
    displayResult: function(){
      //let strResult = "";
      let newStr = this.strResult+this.tempNumer;
      this.$set(this,'strResult',newStr);
      if(this.strResult == '' || this.strResult == undefined){
        return '0'
      }
      return newStr
    }
  },
  data () {
    return {
      tempNumer: '',
      strResult: ''
    }
  },
  methods: {
    showNumber:function(val){
      this.$set(this,'tempNumer',val)
     console.log(val);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculate {
  width: 285px;
  padding: 20px;
  height: 350px;
  background: #C47335;
  margin: 30px auto;
  border-radius: 10px;
}
.screen {
  display: block;
  height: 27px;
  background: #F19953;
  width: 100%;
  outline: none;
  border: 0;
}
.numberBtn{
  display: inline-block;
  margin-top: 3px
}
</style>
