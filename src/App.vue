<template>
  <div id="app">
  <patients/>
  </div>
</template>


<script>
  import Patients from "./views/Patients";
  export default {
    components: {Patients}
  }
</script>


<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 20px;
}
</style>

