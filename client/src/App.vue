<template>
    <div class="app">
     <router-view></router-view>
    </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  
}
.app{
  position: relative;
  width: 1140px;
  height: 750px;
  margin: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 10px 15px 25px rgba(0, 0, 0, 0.5);
}


</style>
