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
        <span v-if="start">{{time}}</span>
        <span v-else>hms</span>
      </div>
      <div class="inner"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed:{
    time(){
      var leftSec = this.workTime * 60 - 1;//总时间
      var leftHour = Math.floor(leftSec/3600);//包含小时

      var leftMin = Math.floor((leftSec - leftHour*3600)/60);//包含分钟
      leftSec = leftSec - leftHour*3600 - leftMin*60; //包含秒

      return `${leftHour}:${leftMin}:${leftSec}`
    }
  },
  data(){
    return {
      start: false,
      workTime: 32,
      breakTime: 10,
      leftHour: 0,
      leftMin: 0,
      leftSecond: 0
    }
  },
  methods: {
    decline(obj) {
      var newVal = obj-1;
      this.$set(this,'workTime',newVal)
    },
    increas(obj){
      var newVal = obj+1;
      this.$set(this,'workTime',newVal)
    },
    startTime(){
      this.$set(this,'start',true)
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
  height: 100px;width: 100%;
  background: #99CC00;
  position: absolute;
  bottom: 0
}
</style>
