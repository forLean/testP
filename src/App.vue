<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>
   
<script>
//import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    //HelloWorld
  }
}
</script>

<style>

</style>