<template>
  <div id="app">
    <div class="routs">
      <router-link to="/" class="routs-a">Поиск пациента</router-link>
      <router-link to="/newPatient" class="routs-a">Создать пациента</router-link>
    </div>
  <router-view></router-view>
  </div>
</template>


<script>
  export default {
  }
</script>


<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 20px;
  width: 700px;
  margin: 50px auto;
}
  .routs{
    text-align: center;
    :first-child{
      margin-right: 20px;
    }
  }
.routs-a{
  text-decoration: none;
  color: #2c3e50;
  font-size: 22px;
}
.routs-a:hover,
.routs-a:active,
.routs-a:focus{
  border-bottom: 5px solid #2c3e50;
  border-radius: 5px;
  }
  // версии для смартфонов
  @media all and (max-width: 720px){
    #app{
      font-size: 16px;
      width: 420px;
    }
    .routs-a{
      font-size: 18px;
    }
  }
</style>

