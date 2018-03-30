<template>
  <div id="app">
    <router-view/>
    <menu-round/>
    <popup-standard/>
  </div>
</template>

<script>
  import MenuRound from '@/layouts/menu/menu-round'
  import PopupStandard from '@/layouts/popup/popup-standard'

  export default {
    components: {
      MenuRound,
      PopupStandard
    }
  }

</script>

<style lang='scss'>
  @import "../src/style/reset";

  @font-face {
    font-family: 'Raleway';
    src: url('../src/assets/fonts/Raleway-Bold.woff2') format('woff2'),
    url('../src/assets/fonts/Raleway-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway';
    src: url('../src/assets/fonts/Raleway-SemiBold.woff2') format('woff2'),
    url('../src/assets/fonts/Raleway-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway';
    src: url('../src/assets/fonts/Raleway-Regular.woff2') format('woff2'),
    url('../src/assets/fonts/Raleway-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body, html {
    position: relative;
    overflow: hidden;

    width: $width;
    height: $height;

    margin: 0;
    padding: 0;

    font-family: 'Raleway', sans-serif;
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
    background-image: url('../src/assets/img/global/bg.jpg');
    background-repeat: no-repeat;
  }

  .logo {
    position: absolute;
    left: 112px;
    top: 58px;

    width: 223px;
    height: 70px;
    background-image: url('../src/assets/img/global/logo.png');
  }

  .title {
    width: 920px;

    margin-left: 112px;
    margin-top: 312px;

    font-weight: 600;
    font-size: 60px;
  }

  .btn-round {
    width: 100px;
    height: 100px;

    border-radius: 50%;
    box-shadow: 8px 13.9px 38.2px 0.8px rgba(78, 78, 78, 0.48);

    @include flexCentered;

    &:active, &.active {
      box-shadow: 4px 5px 38.2px 0.8px rgba(78, 78, 78, 0.48);
      transform: translate(2px, 2px);
    }
  }

  .btn-arrow {
    background-color: $color-accent-1;
    > * {
      height: 37px;
      width: 54px;
    }
  }

  .btn-research-design {
    background-color: $color-accent-1;

    svg {
      width: 46px;
      height: 63px;
      stroke: #fff;
    }
  }

</style>
