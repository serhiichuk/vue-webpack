<template>
  <section id="content">
    <h1 class="title" v-html="content.title"></h1>
  </section>
</template>

<script>
  import {content, popup} from '@/texts/0_main/slide-main.json'

  export default {
    data() {
      return {
        content,
      }
    },
    beforeCreate() {
      this.$store.commit('Popup/POPUP_SHOW', '11234')
    }
  }
</script>

<style lang="scss" scoped>
  #content {
  }
</style>
