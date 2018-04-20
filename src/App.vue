<template>
  <div id="app">
    <router-view/>
    <menu-dysport/>
  </div>
</template>

<script>
  import MenuDysport from '@/layouts/menu/menu-dysport'

  export default {
    components: {
      MenuDysport
    }
  }

</script>

<style lang="scss">
  @import "~reset-css/reset";
  @import "./style/fonts.css";

  body, html {
    position: relative;
    overflow: hidden;

    width: $width;
    height: $height;

    margin: 0;
    padding: 0;

    font-family: 'Gotham Pro', sans-serif;
    font-size: 28px;
    color: $color-accent-1;
    line-height: 1.2;
  }

  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -ms-touch-action: none;

    outline: none;
    box-sizing: border-box;
  }

  button {
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    box-shadow: none;
    //transition: transform 0.1s cubic-bezier(0.04, -0.85, 0.92, 1.92);
  }

  #app, #content {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }

  #content {
    /*background-image: url('../src/assets/media/images/global/bg.jpg');*/
    background-repeat: no-repeat;
  }

  .disabled {
    opacity: .4 !important;
    pointer-events: none !important;
  }

  .logo-ipsen {
    position: absolute;
    left: 40px;
    bottom: 40px;

    width: 187px;
    height: 53px;
    background-image: url('../src/assets/media/images/global/logo-ipsen.png');
  }

  .logo-dysport {
    position: absolute;
    right: 15px;
    bottom: 25px;

    width: 408px;
    height: 79px;
    background-image: url('../src/assets/media/images/global/logo-dysport.png');
  }

  .title {
    position: absolute;
    top: $padding-top;
    left: $padding-left;
    max-width: 1500px;

    font-size: 70px;
    color: $color-accent-1;
    text-transform: uppercase;

    b {
      color: $color-accent-2;
      font-weight: bold;
    }
  }

</style>
