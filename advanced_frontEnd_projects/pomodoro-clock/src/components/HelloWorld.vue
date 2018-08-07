<template>
  <div class="hello">
    <div class="timeSelect">
      <p>session length</p>
      <button @click="decline(workTime)">-</button>
      <span v-model="workTime">{{workTime}}</span>
      <button @click="increas(workTime)">+</button>
    </div>
    <div class="timeSelect">
      <p>break length</p>
      <button @click="decline(breakTime)">-</button>
      <span v-model="breakTime">{{breakTime}}</span>
      <button @click="increas(breakTime)">+</button>
    </div>
    <div class="circle" @click="startTime">
      <div class="solidCircle">
        <h1>session</h1>
        <span v-if="start">{{resTime}}</span>
        <span v-else>{{workTime}}</span>

      </div>
      <div class="inner" :style="{height:height+'%',background:breakT?'#FF4444':'#99CC00'}"></div>
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
      breakT: false,
      workTime: 1,
      breakTime: 1,
      leftTotalTime: 59,
      resTime: "1:00",
      height: 0,
      originalTime: 1
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
      if(this.breakT){
        this.breakClock()
      } else {
        this.workClock()
      }
    },
    calcuTime(parm){
      var leftHour = Math.floor(parm/3600);//包含小时
      var leftMin = Math.floor((parm - leftHour*3600)/60);//包含分钟
      var leftSec = parm - leftHour*3600 - leftMin*60; //包含秒

      var resTime = leftHour>0?`${leftHour}:${leftMin}:${leftSec}`:`${leftMin}:${leftSec}`;
      this.$set(this,'resTime',resTime)
    },
    calcuHeight(originalTime){
      this.$set(this,'height',((originalTime*60-this.leftTotalTime)/(originalTime*60))*100)
    },
    workClock(){
      this.$set(this,'breakT',false);
      var timer = setInterval(() => {
        if(this.leftTotalTime<0){
          clearInterval(timer);
            this.$set(this,'leftTotalTime',this.breakTime*60-1)
            this.$set(this,'originalTime',this.breakTime);
            this.breakClock()
          return
        }
        if(this.pause){
          clearInterval(timer);
          return
        }
        this.calcuTime(this.leftTotalTime);
        this.calcuHeight(this.originalTime)
        this.$set(this,'leftTotalTime',this.leftTotalTime-1)
      },1000)
    },
    breakClock(){
      this.$set(this,'breakT',true);
      var timer = setInterval(() => {
        if(this.leftTotalTime<0){
          clearInterval(timer);
            this.$set(this,'leftTotalTime',this.workTime*60-1)
            this.$set(this,'originalTime',this.workTime);
            this.workClock()
          return
        }
        if(this.pause){
          clearInterval(timer);
          return
        }
        this.calcuTime(this.leftTotalTime);
        this.calcuHeight(this.originalTime)
        this.$set(this,'leftTotalTime',this.leftTotalTime-1)
      },1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeSelect {
  display: inline-block;
}
.timeSelect p {
  font-size: 12px;
  text-transform: uppercase
}
.timeSelect button,
.timeSelect span {
  font-size: 20px;
  background: none;
  border: 0;
  color: #fff
}
.timeSelect span {
  font-size: 32px;
  text-align: center;
  padding: 0 5px
}
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
  position: absolute;
  bottom: 0
}
</style>
