<template>
  <div id="content">
    <div class="logo"/>
    <div class="title" v-html="t.title"/>

    <div v-for="(info, key) in t.info_1"
         :class="`description description-${key + 1}`"
         v-html="info"/>

    <div class="description description-4">
      <intestines/>
      <span v-html="t.info_2"/>
    </div>

    <div class="description description-5">
      <p v-for="info in t.info_3" v-html="info"/>
    </div>
  </div>
</template>

<script>
  import mixins from '@/app/mixins'
  import {global as globalIcons} from '@/components/svg-icons'

  export default {
    mixins: [mixins],
    components: {
      intestines: globalIcons.intestines
    }
  }
</script>

<style lang="scss" scoped>
  #content {
    background-image: url('../../../assets/img/slide-1_1/bg.jpg');
    padding-left: 112px;
    padding-top: 312px;
    padding-bottom: 240px;

    display: flex;
    flex-flow: column;
  }

  .title {
    max-width: 800px;
    margin: 0;
    margin-bottom: 80px;

    font-size: 63px;
    font-weight: 600;
  }

  .description {
    font-size: 38px;
    max-width: 675px;

    &-2 {
      padding: 12px 60px;
      margin: 20px 0;
      margin-left: -60px;

      border-radius: 10em;
      box-shadow: 6.5px 11.3px 90px rgba(15, 22, 32, 0.18);
      background-image: linear-gradient(to right, #906286 0%, #6f3062 100%);

      font-size: 45px;
      font-weight: 600;
      color: #fff;
    }

    &-4 {
      max-width: 700px;
      margin: 96px 0;
      margin-left: -20px;

      display: flex;
      align-items: center;

      > svg {
        margin-right: 20px;
        width: 250px;
      }
    }

    &-5 {
      display: flex;
      align-items: center;
      max-width: initial;
      width: 100%;

      p {
        display: block;

        &:nth-child(1) {
          width: 1125px;

          font-size: 42px;
          font-weight: bold;

          display: flex;
          align-items: center;
          justify-content: space-between;

          &:after {
            content: url(../../../assets/img/slide-1_1/dujka.png);
            width: 25px;
            height: 149px;
          }
        }

        &:nth-child(2) {
          width: 800px;
          margin-right: 190px;
          margin-left: 50px;

          font-size: 50px;
        }
      }
    }
  }
</style>
