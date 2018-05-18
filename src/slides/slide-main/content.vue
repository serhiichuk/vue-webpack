<template>
  <div id="content" v-if="isReady">
    <JsonToDom :json="t" :bem="true"/>

  </div>
</template>

<script>
  import mixins from '@/app/mixins/slide'
  import JsonToDom from '@/components/json-to-dom'

  export default {
    mixins: [mixins],
    components: {
      JsonToDom
    }
  }
</script>

<style lang="scss" scoped>

</style>
