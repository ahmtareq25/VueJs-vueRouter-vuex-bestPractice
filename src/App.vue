<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import NavBar from './components/Navbar.vue'
  export default{
    components:{
      NavBar
    }
  }
</script>

<style>
@import "styles.css";
</style>
