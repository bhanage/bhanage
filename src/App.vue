<template>
  <div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

.logo {
    width:200px;
}
.register input{
    width: 300px;
    height: 40px;
    padding-left: auto;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.register  button{
    width: 320px;
    height: 40px;
    border-color: 1px solid skyblue;
    background-color: skyblue;
    cursor: pointer;

}
</style>
