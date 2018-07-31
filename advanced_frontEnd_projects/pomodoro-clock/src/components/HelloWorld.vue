<template>
  <div class="hello">
    <div class="">
      <button @click="decline(workTime)">-</button>
      <input type="text" v-model="workTime">
      <button @click="increas(workTime)">+</button>
    </div>
    <div class="circle">
      <div class="solidCircle">

      </div>
        <div class="inner">
          {{workTime}}
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      workTime: 32,
      breakTime: 10
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
  /* border-radius: 50%; */
}
.circle .solidCircle {
  width: 250px;height: 250px;
  border: 2px solid red;
  border-radius: 50%;
  position: absolute;
  top: 0;bottom: 0;left: 0;right: 0;
  margin: auto;
  z-index: 1;
}
.circle .inner {
  box-sizing: border-box;
  height: 10px;width: 100%;
  background: #99CC00;
  position: absolute;
  bottom: 0
}
</style>
