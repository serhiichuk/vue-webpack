<template>
  <div id="content">
    <div class="logo"/>
    <div class="title" v-html="t.title"/>
    <div class="sub-title" v-html="t.sub_title"/>

    <div class="graph-btn">
      <div v-for="(text, key) in t.graph_btns" :class="`graph-btn-${key + 1}`">
        <div class="btn-round btn-graph"
             :class="{active: `graph-${key + 1}` === activeGraph}"
             @click="toggleGraph(`graph-${key + 1}`)">
          <icon-graph/>
        </div>
        <div class="graph-btn-text" v-html="text"/>
      </div>
    </div>

    <div :class="`graph ${activeGraph}`">
      <div class="graph-columns">
        <div v-for="(text, key) in t.graph_columns" v-html="text"/>
      </div>
    </div>

    <div class="graph-legend">
      <div v-for="(text, key) in t.graph_legend" v-html="text"/>
    </div>

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
      iconGraph: globalIcons.graph,
      iconMicroscope: globalIcons.microscope
    },
    data() {
      return {
        activeGraph: 'graph-1'
      }
    },
    methods: {
      ...mapMutations(['POPUP_SHOW']),

      toggleGraph(graph) {
        this.activeGraph = graph;
      }
    }
  }
</script>

<style lang="scss" scoped>

  .title {
    width: 650px;

    font-weight: bold;
    font-size: 55px;
  }

  .sub-title {
    width: 560px;

    margin-top: 50px;
    margin-left: $padding-left;

    font-size: 45px;

    /deep/ p {
      font-weight: 600;
    }
  }

  .graph-btn {
    margin-top: 50px;
    margin-left: $padding-left;

    > div {
      margin-bottom: 58px;
      display: flex;
      align-items: center;
    }

    &-text {
      margin-left: 40px;
      color: $color-gray;
      font-size: 30px;
    }
  }

  .btn-graph {
    background-color: $color-accent-1;
    transition: background-color .3s;

    svg {
      width: 63px;
      height: 49px;

      stroke: #fff;
      transition: stroke .3s;
    }

    &:active, &.active {
      background-color: #fff;
      svg {
        stroke: $color-accent-1;
      }
    }
  }

  .graph {
    position: absolute;
    left: 916px;
    top: 264px;

    width: 915px;
    height: 975px;

    background-position: top;
    background-repeat: no-repeat;

    transition: background .5s;

    &-1 {
      background-image: url(../../../assets/img/slide-2_2/graph-1.png);
    }
    &-2 {
      background-image: url(../../../assets/img/slide-2_2/graph-2.png);
    }
    &-3 {
      background-image: url(../../../assets/img/slide-2_2/graph-3.png);
    }

    &-columns {
      position: absolute;
      bottom: 0;
      right: 50px;

      width: 750px;

      display: flex;
      justify-content: space-between;

      > div {
        width: 184px;

        font-weight: bold;
        font-size: 25px;
        color: $color-gray;
        text-align: center;
      }
    }
  }

  .graph-legend {
    position: absolute;
    left: 995px;
    top: 1302px;

    width: 960px;

    display: flex;
    justify-content: space-between;

    > div {
      position: relative;

      width: 420px;

      font-size: 25px;
      color: $color-gray;

      &:before {
        content: ' - ';
        margin-left: -18px;
      }

      &:after {
        content: '';
        position: absolute;
        top: -15px;
        left: -90px;

        width: 58px;
        height: 58px;

        border-radius: 50%;
      }

      &:nth-child(1) {
        &:after {
          background-color: #bdbdbd;
        }
      }

      &:nth-child(2) {
        &:after {
          background-image: linear-gradient(180deg, #ee921b 0%, #ee5b1b 100%);
        }
      }
    }
  }

  .btn-research-design {
    position: absolute;
    left: 760px;
    top: 1263px;
  }

</style>
