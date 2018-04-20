<template>
  <div id="content">
    <div class="logo-dysport"/>
    <div class="logo-ipsen"/>
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
