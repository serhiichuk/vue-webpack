<template>
  <div id="content">
    <div class="logo"/>
    <div class="plast"/>
    <div class="title" v-html="t.title"/>

    <div v-for="(info, key) in t.info" :class="`info info-${key + 1}`">
      <div class="info-name" v-html="info.name"/>
      <div class="info-desc" v-html="info.desc"/>
    </div>

  </div>
</template>

<script>
  import mixins from '@/app/mixins'

  export default {
    mixins: [mixins],
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  #content {
    background-image: url(../../../assets/img/slide-3_2/bg.jpg);
  }

  .title {
    font-weight: 600;
    font-size: 60px;
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
      width: 700px;

      margin-left: 40px;
      margin-top: 20px;
      font-size: 32px;
    }

    &-1 {
      top: 513px;

      .info-name {
        background-image: $gradient-blue;

        &:before {
          background-image: url(../../../assets/img/global/icon-stake-blue.png);
        }
      }

      .info-desc {
        /deep/ p {
          font-weight: bold;
        }
      }
    }

    &-2 {
      top: 809px;

      .info-name {
        background-image: $gradient-rose;

        &:before {
          background-image: url(../../../assets/img/global/icon-shield-rose.png);
        }
      }
    }

    &-3 {
      top: 1150px;

      .info-name {
        background-image: $gradient-orange;

        &:before {
          background-image: url(../../../assets/img/global/icon-boy-fun-yellow.png);
        }
      }
    }
  }

</style>
