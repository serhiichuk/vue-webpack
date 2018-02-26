<template>
  <div class='app'>
    <nav-bar></nav-bar>
    
    <p>slide-1-1</p>
    <h4>{{msg}}</h4>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "Slide__1-1",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    NavBar
  }
};
</script>

<style>
h2 {
  font-weight: normal;
}
</style>
