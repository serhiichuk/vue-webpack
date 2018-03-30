<template>
  <div id="content">
    <div class="logo"/>
    <div class="title" v-html="t.title"/>
    <div class="fact" v-html="t.fact"/>
    <div class="conclusion" v-html="t.conclusion"/>
  </div>
</template>

<script>
  import mixins from '@/app/mixins'

  export default {
    mixins: [mixins],
  }
</script>

<style lang="scss" scoped>
  #content {
    background-image: url(../../../assets/img/slide-3_1/bg.jpg);
  }

  .title {
    width: 820px;

    font-weight: normal;
    font-size: 48px;
  }

  .fact {
    margin-left: 282px;
    width: 532px;

    font-size: 40px;

    /deep/ span {
      width: 110%;
      height: 120px;

      margin-top: 45px;
      margin-bottom: 10px;
      display: block;

      color: #fff;
      font-weight: bold;
      font-size: 45px;
    }

    /deep/ p {
      font-weight: bold;
    }
  }

  .conclusion {
    margin-top: 120px;
    margin-left: $padding-left;

    width: 1030px;
    font-size: 50px;

    /deep/ p {
      font-weight: bold;
    }
  }

</style>
