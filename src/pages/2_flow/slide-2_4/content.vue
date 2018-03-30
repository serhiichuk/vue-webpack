<template>
  <div id="content">
    <div class="logo"/>
    <div class="packs"/>

    <div class="slogan" v-html="t.slogan"/>

    <div class="dosages">
      <div v-for="(dose, key) in t.dosages" :class="`dosages-${key + 1}`">
        <div class="dosages-name" v-html="dose.name"/>
        <div class="dosages-desc" v-html="dose.desc"/>
      </div>
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

  .packs {
    position: absolute;
    top: 460px;
    right: 0;

    width: 1446px;
    height: 909px;
    background-image: url(../../../assets/img/global/packs.png);
  }

  .slogan {
    position: absolute;
    left: 1525px;
    top: 278px;

    padding: 30px 68px;

    font-weight: bold;
    font-size: 40px;
    color: #fff;

    background-image: $gradient-rose;
    border-radius: 10em;

    &:before {
      content: url(../../../assets/img/global/icon-barry.png);
      position: absolute;
      top: -10px;
      left: -125px;
    }
  }

  .dosages {
    position: absolute;
    left: 202px;
    top: 524px;

    width: 640px;

    &-name {
      font-size: 60px;
      font-weight: 600;
    }

    &-desc {
      margin-top: 40px;

      font-size: 38px;
      font-weight: 600;

      display: flex;
      align-items: flex-start;

      &:before {
        margin-right: 40px;
      }
    }

    &-1 {
      margin-bottom: 100px;

      .dosages-desc {
        &:before {
          content: url(../../../assets/img/global/icon-packs-blue.png);
        }
      }
    }

    &-2 {
      color: $color-accent-2;

      .dosages-name {
        font-weight: bold;
      }

      .dosages-desc {
        &:before {
          content: url(../../../assets/img/global/icon-calendar-orange.png);
        }
      }
    }
  }

</style>
