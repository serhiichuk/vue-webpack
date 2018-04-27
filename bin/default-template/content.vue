<template>
  <div id="content" v-if="isReady">
    <div class="logo-dysport"/>

  </div>
</template>

<script>
  import mixins from '@/app/mixins/slide'

  export default {
    mixins: [mixins]
  }
</script>

<style lang="scss" scoped>
  #content {
    background-image: url(../../../assets/media/images/slide-main/bg.jpg);
  }
</style>
