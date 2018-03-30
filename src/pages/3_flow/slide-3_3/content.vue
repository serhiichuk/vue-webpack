<template>
  <div id="content">
    <div class="logo"/>
    <div class="title" v-html="t.title"/>
    <div class="sub-title" v-html="t.sub_title"/>

    <div class="facts">
      <div v-for="fact in t.facts">
        <p v-html="fact"/>
      </div>
    </div>

    <div class="legend">
      <div v-for="info in t.legend" v-html="info"/>
    </div>

    <div class="conclusion" v-html="t.conclusion"/>
  </div>
</template>

<script>
  import mixins from '@/app/mixins'

  export default {
    mixins: [mixins]
  }
</script>

<style lang="scss" scoped>

  #content {
    background-image: url(../../../assets/img/slide-3_3/bg.jpg);
  }

  .title {
    width: 1080px;
    font-size: 70px;

    /deep/ b {
      text-transform: uppercase;
    }
  }

  .sub-title {
    width: 750px;
    margin-left: $padding-left;
    margin-top: 10px;

    font-size: 44px;
  }

  .facts {
    position: absolute;
    top: 669px;
    left: 265px;

    height: 250px;
    width: 540px;

    display: flex;
    flex-flow: column;
    justify-content: space-between;

    > div {
      height: 106px;

      display: flex;
      align-items: center;

      p {
        font-size: 36px;
      }
    }
  }

  .legend {
    position: absolute;
    left: 947px;
    top: 561px;

    > div {
      font-size: 30px;
      margin-bottom: 60px;

      /deep/ > p {
        font-weight: bold;
      }

      &:nth-child(1) {
        width: 200px;
        font-size: 36px;
      }

      &:nth-child(2) {}
    }
  }

  .conclusion {
    position: absolute;
    left: $padding-left;
    top: 1057px;

    width: 850px;

    font-size: 47px;
  }

</style>
