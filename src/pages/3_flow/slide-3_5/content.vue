<template>
  <div id="content">
    <div class="logo"/>
    <div class="title" v-html="t.title"/>
    <div class="axis axis-x" v-html="t.axis.x"/>
    <div class="axis axis-y" v-html="t.axis.y"/>
    <div class="legend legend-1" v-html="t.legend[0]"/>
    <div class="legend legend-2" v-html="t.legend[1]"/>

    <div class="btn-round btn-research-design" @click="POPUP_SHOW('research-design')">
      <icon-microscope/>
    </div>
  </div>
</template>

<script>
  import mixins from '@/app/mixins'
  import {mapMutations} from 'vuex'
  import {global as globalIcons} from '@/components/svg-icons'

  export default {
    mixins: [mixins],
    components: {
      iconMicroscope: globalIcons.microscope
    },
    methods: {
      ...mapMutations(['POPUP_SHOW'])
    }
  }
</script>

<style lang="scss" scoped>
  #content {
    background-image: url(../../../assets/img/slide-1_4/bg.jpg);
  }

  .title {
    width: 1200px;

    /deep/ span {
      font-size: 80px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  .axis {
    position: absolute;
    font-size: 28px;
    color: $color-gray;

    &-x {
      left: 1790px;
      top: 1179px;
    }

    &-y {
      left: 115px;
      top: 1055px;

      transform: rotate(-90deg);
      transform-origin: left;
    }
  }

  .legend {
    position: absolute;
    top: 1255px;

    font-size: 28px;
    color: $color-gray;

    &-1 {
      left: 292px;
      font-weight: bold;
    }
    &-2 {
      left: 770px;
    }
  }

  .btn-research-design {
    position: absolute;
    left: 1691px;
    top: 1057px;

  }


</style>
