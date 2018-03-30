<template>
  <div id="content">
    <div class="logo"/>

    <div class="links">
      <div v-for="(link, key) in t.links" :key="key"
           :class="`link link-${key + 1}`">
        <p>{{link.name}}</p>
        <div class="btn-round btn-arrow"
            @click="navigateTo(link.id)">
          <icon-arrow-right/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import * as mixins from '@/app/mixins'
  import {global as globalIcons} from '@/components/svg-icons'

  export default {
    mixins: [mixins.default, mixins.navigation],
    components: {
      iconArrowRight: globalIcons.arrowRight
    }
  }
</script>

<style lang="scss" scoped>
  .links {
    margin: 0 auto;
    margin-top: 570px;

    width: 1400px;

    @include flexCentered;
    justify-content: space-between;

    > div {
      width: 370px;
      height: 340px;

      display: flex;
      flex-flow: column;
      justify-content: flex-end;
      align-items: center;

      p {
        margin-bottom: 50px;

        font-size: 50px;
        font-weight: 600;
        text-align: center;
      }
    }
  }
</style>
