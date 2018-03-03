<template>
  <div id="app">
    <router-view/>
    <layout-popup/>
    <layout-menu/>
  </div>
</template>

<script>
  import MenuStandard from '@/layouts/menu/menu-standard'
  import PopupStandard from '@/layouts/popup/popup-standard'

  export default {
    components: {
      LayoutMenu: MenuStandard,
      LayoutPopup: PopupStandard
    }
  }

</script>

<style lang='scss'>

  body, html {
    position: relative;
    overflow: hidden;

    width: $width;
    height: $height;

    margin: 0;
    padding: 0;
  }

  #app, #content {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }

</style>
