<template>
  <div id="content">
    <div class="logo"/>
    <p>{{t.title}}</p>
  </div>
</template>

<script>
  import mixins from '@/app/mixins/globals'
  import ua from './data_ua'
  import ru from './data_ru'

  export default {
    mixins: [mixins],
    data: () => ({
      data: {
        ua,
        ru
      }
    })
  }
</script>

<style lang="scss" scoped>

</style>
