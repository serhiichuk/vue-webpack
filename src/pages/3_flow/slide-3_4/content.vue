<template>
  <div id="content">
    <div class="logo"/>
    <div class="title" v-html="t.title"/>
    <div class="desc" v-html="t.desc"/>
    <div class="info">
      <div class="info-name" v-html="t.info.name"/>
      <div class="info-desc" v-html="t.info.desc"/>
    </div>
    <div class="fact" v-html="t.fact"/>
    <div class="stan" v-html="t.stan"/>

    <div class="btn-round btn-absorption" @click="POPUP_SHOW('absorption')">
      <icon-loop-intestines/>
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
      iconLoopIntestines: globalIcons.loopIntestines
    },
    methods: {
      ...mapMutations(['POPUP_SHOW'])
    }
  }
</script>

<style lang="scss" scoped>

  #content {
    background-image: url(../../../assets/img/slide-3_4/bg.jpg);
    padding-left: 116px;
    padding-top: 320px;
  }

  .title {
    margin: 0;
    width: 740px;
    font-size: 70px;
    text-align: right;
    font-weight: normal;

    /deep/ span {
      font-size: 120px;
    }
  }

  .desc {
    margin-top: 65px;
    width: 760px;
    font-size: 40px;
  }

  .info {
    position: relative;
    margin-top: 55px;
    margin-left: 120px;
    &-name {
      display: inline-block;
      padding: 32px 40px;

      color: #fff;
      font-size: 50px;
      font-weight: bold;

      border-radius: 10em;
      box-shadow: 8.9px 9.5px 90px rgba(15, 22, 32, 0.18);
      background-image: $gradient-blue;

      &:before {
        content: '';
        position: absolute;
        top: -5px;
        left: -160px;

        width: 133px;
        height: 162px;

        background: url(../../../assets/img/global/icon-shield-refresh-blue.png) no-repeat center;
      }
    }

    &-desc {
      margin-left: 40px;
      margin-top: 20px;
      font-size: 48px;
    }
  }

  .fact {
    position: relative;
    margin-left: 120px;
    margin-top: 70px;

    font-size: 34px;

    &:before {
      content: '';
      position: absolute;
      top: -40px;
      left: -160px;

      background-image: url(../../../assets/img/global/icon-lamp.png);
      width: 127px;
      height: 134px;
    }
  }

  .stan {
    position: absolute;
    left: 1320px;
    top: 1158px;
    width: 350px;

    font-size: 30px;
    text-align: center;
  }

  .btn-absorption {
    position: absolute;
    left: 1720px;
    top: 930px;

    width: 110px;
    height: 110px;

    background-color: $color-accent-1;

    svg {
      width: 62px;
      height: 69px;
      stroke: #fff;
    }
  }

</style>
