<template>
  <div id="container">
    <h1 class="title" v-html="content.title"></h1>
  </div>
</template>

<script>
  import { content, popup } from '@/texts/1_flow/slide-1_2.json'


  export default {
    data() {
      return {
        content,
      }
    }
  }
</script>

<style lang="scss" scoped>
  #container {
  }
</style>
