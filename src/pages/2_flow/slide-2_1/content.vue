<template>
  <div id="content">
    <div class="logo"/>
    <div class="title" v-html="t.title"/>

    <div class="info">
      <div v-for="(info, key) in t.info" :class="`info-${key + 1}`">
        <div class="info-val" v-html="info.val"/>
        <div class="info-text" v-html="info.text"/>
      </div>
    </div>

    <div class="conclusion" v-html="t.conclusion"/>
    <div v-for="(desc, key) in t.desc" :class="`desc desc-${key + 1}`" v-html="desc"/>

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
    background-image: url(../../../assets/img/slide-2_1/bg.jpg);
  }

  .info {
    position: absolute;
    left: $padding-left;
    top: 609px;

    > div {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }

    &-val {
      width: 245px;

      font-size: 80px;
      font-weight: bold;

      /deep/ span {
        font-size: 66px;
        font-weight: 600;
      }
    }

    &-text {
      width: 400px;
      padding-top: 8px;

      font-size: 36px;
    }
  }

  .conclusion {
    position: absolute;
    left: $padding-left;
    top: 1001px;

    width: 825px;
    font-size: 36px;
  }

  .desc {
    position: absolute;
    top: 1174px;
    width: 456px;

    font-size: 30px;

    &-1 {
      left: 1027px;
    }

    &-2 {
      left: 1541px;
      width: 400px;
    }
  }
</style>
