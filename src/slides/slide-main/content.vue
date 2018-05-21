<template>
  <div id="content" v-if="isReady">
    <JsonToDom :json="t" rootClassName="bubs" rootTagName="SectIon"/>

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
