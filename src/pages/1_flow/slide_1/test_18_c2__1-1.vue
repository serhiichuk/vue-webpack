<template>
  <div id="container">
    <h1 class="title" v-html="text.title"></h1>
  </div>
</template>

<script>
  import text from './text'

  export default {
    data() {
      return {
        text,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
