<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    components: {
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
    font-size: 38px;
    color: $color-accent-1;
    line-height: 1.15;
  }

  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -ms-touch-action: none;

    outline: none;
    box-sizing: border-box;
  }

  sup, sub {
    font-size: .6em;
    font-weight: 300;
    vertical-align: super;
  }

  b {
    font-weight: bold;
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

  .sub-title {
    position: absolute;
    top: 285px;
    left: $padding-left;

    font-size: 38px;
    color: #161616;
  }

  .btn-video-play {
    position: absolute;
    left: 1653px;
    top: 565px;

    width: 63px;
    height: 63px;

    background-image: url('../src/assets/media/images/global/icon-play.png');

    &:active {
      opacity: .5;
    }
  }

  // List styling
  .dotted > * {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-190%, -50%);

      width: 18px;
      height: 18px;

      background-color: $color-accent-2;
      border-radius: 50%;
    }
  }

  .numbered > * {
    margin-left: 40px;
    position: relative;
    counter-increment: index;

    &:before {
      content: counter(index)'.';
      position: absolute;
      left: -40px;
      top: 0;

      width: 40px;
      height: 22px;

      @include flexCentered;
      justify-content: flex-start;

      color: $color-accent-2;
      font-weight: bold;
    }
  }

  .message {
    padding-top: 170px;
    padding-left: 110px;
    padding-right: 50px;

    background-color: $color-accent-2;
    border-radius: 50%;

    color: #fff;
    font-size: 50px;
  }

  .square-message {
    padding: 45px;

    background-color: #fefefe;
    border: 3px solid $color-accent-2;

    border-radius: 0px 30px;
    box-shadow: -10px 11.1px 15px rgba(123, 108, 91, 0.4);
  }

  .footnote {
    position: absolute;
    left: 112px;
    top: 1437px;
    width: 1253px;

    font-size: 27px;
  }

  .range-slider {
    display: inline-block;
    z-index: 2;

    width: 143px;
    height: 20px;

    .range-slider-hidden {
      display: none;
    }

    .range-slider-inner {
      position: relative;
      transform: translateY(-50%);

      height: 100%;
      width: 100%;

      display: inline-block;
    }

    .range-slider-rail {
      width: 100%;
    }

    .range-slider-rail, .range-slider-fill{
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);

      height: 20px;

      border-radius: 10em;
      background-image: linear-gradient(to left, #b19a80 0%, #d3c8bc 100%);
    }

    .range-slider-knob {
      position: absolute;
      top: 50%;
      z-index: 3;
      transform: translate(-50%, -50%);

      width: 60px;
      height: 60px;

      display: inline-block;
      box-sizing: border-box;

      background: white;
      border-radius: 50%;
      border: 2px solid $color-accent-1;
      box-shadow: -3.3px 3.7px 10px rgba($color-accent-1, 0.5);

      transition: left .15s;

      &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        width: 10px;
        height: 10px;

        display: block;
        margin: auto;

        background: $color-accent-1;
        border-radius: 50%;
      }
    }
  }

</style>
