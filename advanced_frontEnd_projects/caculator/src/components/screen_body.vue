<template>
  <div class="hello">
    <div class="calculate">
      <input class="screen" v-model="strResult" readonly="readonly">
      <calcuButton numberContent=""></calcuButton>
      <calcuButton numberContent="AC" v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent="CE" v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent="/" v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent="7" v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent="8" v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent="9" v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent="*" v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent="4" v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent="5" v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent="6" v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent="-" v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent="1" v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent="2" v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent="3" v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent="+" v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent="" v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent="0" v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent=" " v-on:btnNumber="showNumber"></calcuButton>
      <calcuButton numberContent="=" v-on:btnNumber="calResult"></calcuButton>
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
  data () {
    return {
      strResult: '0',
      sign:'',
      getResult: false
    }
  },
  methods: {
    showNumber:function(val){
      //一：输入AC
      if (val == "AC") {
        this.$set(this,'strResult','0')
      }
      //二：输入CE
      else if (val == "CE") {
        let strResult = this.strResult.slice(0,this.strResult.length-1);
        this.$set(this,'strResult',strResult)
      }
      //三：输入非数字内容
      else if (!Number(val)) {
        //不论何种情况，运算符号都是要统计的
        this.$set(this,'getResult',false);
        this.$set(this,'sign',val);
        //情况一：起始状态下就输入运算符
        if (this.strResult == '0') {
          var strResult = '0';
          strResult += val;
        }
        //情况二：在数字后输入运算符
        else {
          strResult = this.strResult + val;
        }
        this.$set(this,'strResult',strResult)
      }
      //四：输入数字
      if (Number(val)) {
        if (this.getResult) {
          this.$set(this,'strResult','0');
          this.$set(this,'getResult',false)
        }
        //情况一：起始状态下输入数字
        if(this.strResult == '0'){
          this.$set(this,'strResult',val);
        }
        //情况二：非起始状态下输入数字
        else {
            var strResult = '';
            strResult = this.strResult + val;
            this.$set(this,'strResult',strResult)
        }
      }
    },
    calResult: function(){
      this.$set(this,'getResult',true)
      var res = 0;
      var newExpress = this.strResult.split(this.sign);
      console.log(newExpress);
      var param1 = Number(newExpress[0]);
      var param2 = Number(newExpress[1]);

      switch(this.sign){
        case '+':
        res = param1 + param2;
        this.$set(this,'strResult',res)
        break;
        case '-':
        res = param1 - param2;
        this.$set(this,'strResult',res)
        break;
        case '*':
        res = param1 * param2;
        this.$set(this,'strResult',res)
        break;
        case '/':
        res = param1 / param2;
        this.$set(this,'strResult',res)
        break;
      }
      //this.$set(this,'strResult','0')
      console.log(res);
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
  float: left;
  margin-left: 5px;
  margin-top: 3px
}
</style>
