<template>
  <div>
    <nav-bar></nav-bar>

    <h4>{{msg}}</h4>
  </div>
</template>

<script>
  import NavBar from "@/components/NavBar";

  export default  {
    name: 'main-slide',
    components: {
      NavBar
    },
    data() {
      return {
        msg: 'Main Slide'
      }
    }
  }

</script>

<styles>

</styles>
