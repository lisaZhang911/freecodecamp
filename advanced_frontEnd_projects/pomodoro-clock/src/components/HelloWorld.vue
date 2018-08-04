<template>
  <div class="hello">
    <div class="">
      <button @click="decline(workTime)">-</button>
      <input type="text" v-model="workTime">
      <button @click="increas(workTime)">+</button>
    </div>
    <div class="circle" @click="startTime">
      <div class="solidCircle">
        <h1>session</h1>
        <span v-if="start">{{resTime}}</span>
        <span v-else>{{workTime}}</span>

      </div>
      <div class="inner" :style="{height:height+'%'}"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  watch: {
    workTime:function(val){
      var timeVal = val*60;
      this.$set(this,'leftTotalTime',timeVal)
      this.calcuTime()
    }
  },
  data(){
    return {
      start: false,
      pause: true,
      workTime: 1,
      breakTime: 10,
      leftTotalTime: 59,
      resTime: "1:00",
      height:0
    }
  },
  methods: {
    decline(obj) {
      if(!this.pause){
        return
      }
      var newVal = obj-1;
      this.$set(this,'workTime',newVal)
      this.$set(this,'start',false)
    },
    increas(obj){
      if(!this.pause){
        return
      }
      var newVal = obj+1;
      this.$set(this,'workTime',newVal)
      this.$set(this,'start',false)
    },
    startTime(){
      this.$set(this,'start',true);
      this.$set(this,'pause',!this.pause);

        var timer = setInterval(() => {
          if(this.leftTotalTime<0 || this.pause){
            clearInterval(timer);
            return
          }
          this.calcuTime();
          this.calcuHeight(this.workTime)
          this.$set(this,'leftTotalTime',this.leftTotalTime-1)
        },1000)
    },
    calcuTime(){
      var parm = this.leftTotalTime
      var leftHour = Math.floor(parm/3600);//包含小时
      var leftMin = Math.floor((parm - leftHour*3600)/60);//包含分钟
      var leftSec = parm - leftHour*3600 - leftMin*60; //包含秒

      var resTime = leftHour>0?`${leftHour}:${leftMin}:${leftSec}`:`${leftMin}:${leftSec}`;
      this.$set(this,'resTime',resTime)
    },
    calcuHeight(originalTime){
      this.$set(this,'height',((originalTime*60-this.leftTotalTime)/(originalTime*60))*100)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.circle {
  border: 3px solid #99CC00;
  width:300px;height: 300px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
}
.circle .solidCircle {
  box-sizing: border-box;
  width: 300px;height: 300px;
  border: 3px solid #333;
  border-radius: 50%;
  position: absolute;
  top: 0;bottom: 0;left: 0;right: 0;
  margin: auto;
  z-index: 1;
}
.circle .inner {
  box-sizing: border-box;
  width: 100%;
  background: #99CC00;
  position: absolute;
  bottom: 0
}
</style>
