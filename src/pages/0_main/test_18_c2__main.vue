<template>
  <div class="container">
    <!-- Includes -->
    <menu-standard/>
    <popup-standard/>

    <!-- Content -->
    <h1 class="title" v-html="text.title"></h1>

  </div>
</template>

<script>
  import MenuStandard from '@/layouts/menu/menu-standard'
  import PopupStandard from '@/layouts/popup/popup-standard'
  import text from './text'

  export default {
    components: {
      MenuStandard,
      PopupStandard
    },
    data() {
      return {
        text,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
