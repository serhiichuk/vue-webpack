<template>
  <section id="popup" :class="{active: activePopup}" @click="popupAction">

    <transition name="show">
      <div v-if="activePopup" :class="`popup-content popup-${activePopup} ${currentSlide}`">
        <button class="btn-popup-hide" @click="POPUP_HIDE">
          <icon-close/>
        </button>

        <div v-for="(popup, key) in dataPopup[activePopup]"
             v-if="typeof popup === 'string'" :class="key" v-html="popup"/>

        <div v-else :class="key">
          <div v-for="(block, index) in popup"
               v-html="block"
               :class="`${key}-${index + 1}`"/>
        </div>
      </div>
    </transition>

  </section>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import {global as globalIcons} from '@/components/svg-icons'

  export default {
    components: {
      iconClose: globalIcons.close
    },

    computed: {
      ...mapState(['activePopup', 'dataPopup', 'currentSlide']),
    },

    methods: {
      ...mapMutations(['POPUP_SHOW', 'POPUP_HIDE']),

      // Close popup when click without popup content
      popupAction(e) {
        let el = e.target;

        // Polyfill for IE:
        if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector;
        if (!Element.prototype.closest) Element.prototype.closest = function (selector) {
          while (el) {
            if (el.matches(selector)) return el;
            el = el.parentElement;
          }
        };

        if (!el.closest('#popup > div')) this.POPUP_HIDE();
      }
    }
  };
</script>

<style lang="scss" scoped>
  #popup {
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    @include flexCentered;

    background-color: rgba(17, 29, 48, 0.0);
    transition: background-color .5s, visibility .5s;

    &.active {
      visibility: visible;
      background-color: rgba(17, 29, 48, 0.6);
    }
  }

  .show-enter-active, .show-leave-active {
    transition: opacity .4s, transform .4s;
  }

  .show-enter, .show-leave-to {
    opacity: 0;
    transform: scale(.8)
  }

  .show-enter-to, .show-leave {
    opacity: 1;
    transform: scale(1)
  }

  .popup-content {
    position: relative;
    background-color: white;
    border-radius: 40px;
    box-shadow: 8.9px 9.5px 90px rgba(15, 22, 32, 0.56);

    font-size: 28px;
  }

  .btn-popup-hide {
    position: absolute;
    right: 25px;
    top: 25px;
    z-index: 2;

    width: 100px;
    height: 100px;

    svg {
      width: 45px;
      height: 45px;

      stroke: $color-accent-1;
      stroke-linecap: round;
    }

    &:active {
      background-color: rgba($color-accent-1, .2);
      svg {
        stroke: $color-accent-2;
      }
    }
  }

  .title {
    margin: initial;
    padding: initial;

    width: initial;

    font-weight: bold;
    font-size: 28px;
  }

  .links {
    font-size: 28px;

    div {
      counter-increment: index;
      position: relative;

      margin: 20px 0;
      margin-left: 15px;

      &:before {
        content: counter(index) '.';

        position: absolute;
        top: 0;
        left: -50px;

        width: 50px;
        height: 30px;

        @include flexCentered;

        font-weight: bold;
      }
    }
  }

  .content {
    font-size: 26px;

    > div {
      margin: 25px 0;
    }
  }

  .footnotes {
    > div {
      position: relative;
      margin-left: 15px;

      /deep/ span {
        position: absolute;
        top: 0;
        left: -25px;

        font-size: 1.4em;
      }
    }
  }

  .popup-references, .popup-research-design {
    padding: 85px 140px;
    width: 1200px;
  }

  // Absorption Popup
  .popup-absorption {
    width: 1823px;
    height: 1175px;

    background-image: url(../../assets/img/slide-1_2/popup-absorption-bg.png);
    background-position: center 90px;
    background-repeat: no-repeat;

    .title {
      position: absolute;
      top: 90px;
      left: 0;
      width: 100%;

      font-size: 38px;
      font-weight: normal;
      text-align: center;

      /deep/ span {
        font-size: 52px;
        text-transform: uppercase;
      }
    }

    .info > div {
      position: absolute;
      width: 320px;

      font-weight: bold;
      font-size: 38px;
    }
  }

  .slide-1_2 {
    &.popup-absorption {
      background-image: url(../../assets/img/slide-1_2/popup-absorption-bg.png);

      .info {
        &-1 {
          top: 768px;
          left: 191px;
        }

        &-2 {
          top: 967px;
          left: 751px;
        }

        &-3 {
          top: 768px;
          left: 1367px;
        }
      }
    }
  }

  .slide-1_3, .slide-3_4 {
    &.popup-absorption {
      background-image: url(../../assets/img/slide-3_4/popup-absorption-bg.png);
      background-position-y: 130px;

      .info {
        > div {
          position: absolute;
          width: 315px;
          margin: 0;

          font-size: 30px;
          font-weight: 600;

          counter-increment: index;

          &:before {
            content: counter(index);
            position: absolute;
            top: 0;
            left: -100px;

            width: 76px;
            height: 76px;

            display: table-cell;
            text-align: center;
            vertical-align: middle;

            font-size: 55px;
            color: #fff;

            font-weight: normal;
            border-radius: 50%;
            background-image: $gradient-rose;

          }
        }

        &-1 {
          top: 760px;
          left: 218px;
        }

        &-2 {
          top: 1006px;
          left: 762px;
        }

        &-3 {
          top: 763px;
          left: 1360px;
        }

        /deep/ p {
          font-weight: normal;
          font-size: 26px;
        }
      }

      .legend {
        > div {
          position: absolute;
          top: 670px;

          font-size: 24px;
        }
        &-1 {
          left: 500px;
        }

        &-2 {
          left: 1120px;
        }
      }
    }
  }

</style>
