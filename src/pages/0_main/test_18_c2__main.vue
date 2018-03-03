<template>
  <div id="content">
    <h1 class="title" v-html="text.title"></h1>
  </div>
</template>

<script>
  import text from './text'

  export default {
    data() {
      return {
        text,
        store: this.$store
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
