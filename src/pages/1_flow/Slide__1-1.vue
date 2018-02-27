<template>
  <div class='app'>
    <nav-bar></nav-bar>

    <h4>{{msg}}</h4>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "Slide__1-1",
  components: {
    NavBar
  },
  data() {
    return {
      msg: "Flow 1, Slide 1"
    };
  }
};
</script>

<style>
h2 {
  font-weight: normal;
}
</style>
