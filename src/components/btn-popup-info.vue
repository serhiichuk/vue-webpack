<template>
  <div class="btn-popup-info" @touchend="POPUP_SHOW('info')"/>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: "btn-popup-info",

    methods: {
      ...mapMutations(['POPUP_SHOW'])
    }
  }
</script>

<style lang="scss" scoped>
  .btn-popup-info {
    position: absolute;
    top: 182px;
    right: 50px;

    width: 63px;
    height: 63px;

    background-image: url(../assets/media/images/global/icon-info.png);

    &:active {
      opacity: .5;
    }
  }
</style>
