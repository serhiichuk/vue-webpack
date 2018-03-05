<template>
  <div id="container">
    <h1 class="title" v-html="text.ru.title"></h1>
  </div>
</template>

<script>
  import data_ua from './data_ua.json'
  import data_ru from './data_ru.json'

  export default {
    data() {
      return {
        text: {ua: data_ua, ru: data_ru},
      }
    }
  }
</script>

<style lang="scss" scoped>
  #container {
  }
</style>
