<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

/*  my style*/
  width: 100%;
  height: 100%;
}
html,body{
  height: 100%;
  margin: 0px;
}

p{
  margin: 0px;
}
a{
  text-decoration: none;
  font-size: 14px;
}
</style>
