<template>
  <div id="content">
    <div class="logo"/>
    <div class="title" v-html="t.title"/>

    <div v-for="(info, key) in t.info" :class="`info info-${key + 1}`">
      <div class="info-name" v-html="info.name"/>
      <div class="info-desc" v-html="info.desc"/>
    </div>

    <div class="conclusion" v-html="t.conclusion"/>

    <div class="btn-round btn-absorption" @click="POPUP_SHOW('absorption')">
      <icon-loop-intestines/>
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
      iconLoopIntestines: globalIcons.loopIntestines,
      iconMicroscope: globalIcons.microscope
    },
    methods: {
      ...mapMutations(['POPUP_SHOW'])
    }
  }
</script>

<style lang="scss" scoped>
  #content {
    background-image: url(../../../assets/img/slide-1_2/bg.jpg);
  }

  .title {
    font-size: 50px;

    /deep/ p {
      font-weight: 600;
    }

    /deep/ b {
      font-size: 70px;
      text-transform: uppercase;
    }
  }

  .info {
    position: absolute;
    left: 238px;

    &-name {
      display: inline-block;
      padding: 32px 40px;

      color: #fff;
      font-size: 40px;
      font-weight: bold;

      border-radius: 10em;
      box-shadow: 8.9px 9.5px 90px rgba(15, 22, 32, 0.18);

      &:before {
        content: '';
        position: absolute;
        top: -5px;
        left: -150px;

        width: 125px;
        height: 125px;

        background-repeat: no-repeat;
        background-position: center;
      }
    }

    &-desc {
      margin-left: 40px;
      margin-top: 20px;
      font-size: 32px;
    }

    &-1 {
      top: 525px;

      .info-name {
        background-image: $gradient-orange;

        &:before {
          background-image: url(../../../assets/img/global/icon-boy-fun-yellow.png);
        }
      }

      .info-desc {
        margin-top: 0;
        font-size: 45px;
        /deep/ span {
          font-size: 90px;
          font-weight: 600;
        }
      }
    }

    &-2 {
      top: 805px;

      .info-name {
        background-image: $gradient-blue;

        &:before {
          background-image: url(../../../assets/img/global/icon-stake-blue.png);
        }
      }

      .info-desc {
        width: 650px;
      }
    }

    &-3 {
      top: 1100px;

      .info-name {
        background-image: $gradient-rose;

        &:before {
          background-image: url(../../../assets/img/global/icon-shield-rose.png);
        }
      }

      .info-desc {
        width: 550px;
      }
    }
  }

  .conclusion {
    position: absolute;
    left: 999px;
    top: 1123px;
    width: 875px;

    font-size: 45px;

    /deep/ span {
      font-weight: bold;
      font-size: 73px;
      text-transform: uppercase;
    }
  }

  .btn-absorption {
    position: absolute;
    left: 965px;
    top: 805px;

    width: 110px;
    height: 110px;

    background-image: $gradient-blue;

    svg {
      width: 62px;
      height: 69px;
      stroke: #fff;
    }
  }

  .btn-research-design {
    position: absolute;
    left: 1766px;
    top: 1018px;

    background-color: $color-accent-1;

    svg {
      width: 46px;
      height: 63px;
      stroke: #fff;
    }
  }


</style>
