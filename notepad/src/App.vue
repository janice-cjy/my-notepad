<template>
  <div id="app" :class="[theme]">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed:{
    theme(){
      return this.$store.state.themeColor+'-app'
    }
  }
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

/*theme style
*/
.purple-app{
  background-image: url('./assets/purple.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.blue-app{
  background-image: url('./assets/blue.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
