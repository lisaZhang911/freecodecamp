<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
*{margin:0;padding:0}
html,body {
  background: #092B40;
  font-family: "Lucida Grande","Lucida Sans Unicode", Tahoma, Sans-Serif;
  text-align: center
}
</style>
