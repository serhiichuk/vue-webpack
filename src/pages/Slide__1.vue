<template>
  <div class='app'>
    <nav-bar></nav-bar>
    
    <p>slide-1</p>
    <h4>{{msg}}</h4>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: "Slide__1",
  components: {
    NavBar
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
h2 {
  font-weight: normal;
}
</style>
