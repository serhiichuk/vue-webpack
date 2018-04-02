<template>
  <section id="menu" class="menu-wrapper" v-if="currentSlide !== '0_main'">

    <div class="main-menu menu-circle">
      <button class="menu-item main-menu-item"
              v-if="isReady"
              v-for="(slide, key) in menu.main" :key="key"
              :style="iconStyle(true, menu.main, key)"
              :class="{active: slide.active}"
              @click="mainMenuNav(slide.id)">
        <component :is="slide.id" :class="slide.id"/>
      </button>
    </div>

    <div class="sub-menu menu-circle">
      <button class="menu-item sub-menu-item"
              v-for="(item, key) in menu.sub" :key="key"
              :style="iconStyle(false, menu.sub, key)"
              :class="{active: isActivePopup(item)}"
              @click="subMenuNav(item)">
        <component :is="item"/>
      </button>
    </div>

    <button :class="{ 'open-menu-btn': true, 'active': isOpen }" @click="toggleMenu">
    </button>

  </section>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'
  import {menu} from '@/components/svg-icons'

  export default {
    name: "menu-round",
    mixins: [navigation],
    components: {
      ...menu
    },
    data: () => ({
      isOpen: false,
      menuTl: new TimelineMax(),
    }),

    computed: {
      ...mapState(['currentSlide', 'currentFlow', 'currentFlowList', 'activePopup', 'allSlidesList']),
      isReady() {
        // console.log('isReady', !!(this.currentSlide && this.currentFlowList));
        return (this.currentSlide && this.currentFlowList)
      },
      menu() {
        if (!this.isReady) return false;

        const main = this.currentSlide === '0_faq'
          ? this.allSlidesList.filter(slide => slide.flow.match(this.prevFlow))
          : this.currentFlowList;

        const sub = ['faq', 'instructions', 'references', 'home'];

        return {
          main,
          sub,
        }
      },

      diameters() {
        return {
          main: document.querySelector('.main-menu.menu-circle').clientHeight,
          sub: document.querySelector('.sub-menu.menu-circle').clientHeight,
        }
      },
      prevFlow() {
        return sessionStorage.getItem('prev-flow')
      }
    },

    methods: {
      ...mapMutations(['POPUP_SHOW', 'POPUP_HIDE']),

      toggleMenu() {
        if (!this.isOpen) {
          this.menuTl
            .to('.main-menu', .3, {scale: 1}, '-=.15')
            .staggerTo('.main-menu-item', .1, {opacity: 1}, .05, '-=.15')
            .to('.sub-menu', .3, {scale: 1}, '-=.15')
            .staggerTo('.sub-menu-item', .3, {opacity: 1}, .05, '-=.15');
        } else {
          this.menuTl
            .staggerTo('.sub-menu-item', .3, {opacity: 0}, .05, '-=.15')
            .to('.sub-menu', .3, {scale: 0}, '-=.15')
            .staggerTo('.main-menu-item', .1, {opacity: 0}, .05, '-=.15')
            .to('.main-menu', .3, {scale: 0}, '-=.15')
        }

        this.isOpen = !this.isOpen;
      },

      iconStyle(isMainMenu, menuValue, menuItemKey) {
        // Transformation Parameters
        const rotation = 175 + (100 / (menuValue.length - 1) * menuItemKey);
        const translate = isMainMenu ? this.diameters.main / 2 : this.diameters.sub / 2;

        // Element's Attributes
        return {transform: `rotate(${rotation}deg) translate(${translate}px) rotate(-${rotation}deg)`}
      },

      isActivePopup(popup) {
        return this.activePopup === popup
      },

      togglePopup(popup) {
        if (this.isActivePopup(popup)) {
          this.POPUP_HIDE()
        } else {
          this.POPUP_SHOW(popup)
        }
      },

      mainMenuNav(id) {
        this.navigateTo(id);
        if (process.env.NODE_ENV !== 'production') {
          this.toggleMenu();
          this.POPUP_HIDE();
        }
      },

      subMenuNav(btn) {
        switch (btn) {
          case 'home':
            this.navigateTo('0_main');
            break;
          case 'faq':
            sessionStorage.setItem('prev-flow', this.currentFlow);
            this.navigateTo('0_faq');
            break;
          case 'instructions':
            this.togglePopup(btn);
            break;
          case 'references':
            this.togglePopup(btn);
            break;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $menu_size: 600px;

  .menu-wrapper {
    width: $menu_size;
    height: $menu_size;

    bottom: 0;
    right: 0;
    z-index: 2;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    transform: translate(35%, 35%);

    & > * {
      position: absolute;
    }

    .open-menu-btn {
      top: $menu_size / 2.5;
      left: $menu_size / 2.5;

      width: $menu_size / 5.5;
      height: $menu_size / 5.5;

      border-radius: 50%;
      transition: background-color .5s, transform 1s;

      background-color: $color-accent-1;
      background-image: url(../../assets/img/global/icon-menu-btn.png);
      background-position: center;
      background-repeat: no-repeat;

      &.active {
        background-color: #fff;
        transform: rotate(360deg);
      }
    }

    .menu-circle {
      border-radius: 50%;
      transform-origin: 50%;
      transform: scale(0);
      will-change: transform;

      .menu-item {
        opacity: 0;

        top: 50%;
        left: 50%;
        position: absolute;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;

        > svg {
          height: 60%;
        }
      }
    }

    .main-menu {
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
      background-color: rgba($color-accent-1, .6);

      &-item {
        $main-menu-item-width: 70px;

        width: $main-menu-item-width;
        height: $main-menu-item-width;
        margin: -$main-menu-item-width/2;

        background-color: #fff;
        box-shadow: 5px 10px 50px -5px rgba(0, 0, 0, .5);

        transition: background-color .5s;

        svg {
          @include transformCentered;

          stroke: $color-light-gray;
          stroke-width: 2.5;
          fill: none;
          transition: fill .5s;
        }

        &:active, &.active {
          background-color: $color-orange;
        }
      }
    }

    .sub-menu {
      top: $menu_size / 4;
      left: $menu_size / 4;

      width: $menu_size / 2;
      height: $menu_size / 2;

      background-color: rgba($color-accent-1, .3);

      &-item {
        $submenu-item-width: 64px;

        width: $submenu-item-width;
        height: $submenu-item-width;
        margin: -$submenu-item-width/2;

        background-color: $color-accent-1;
        transition: background-color .5s;

        svg {
          @include transformCentered;

          fill: #fff;
          transition: fill .5s;
        }

        &:active, &.active {
          background-color: #fff;
          svg {
            fill: $color-accent-1;
          }
        }
      }
    }
  }


  .slide-1_3, .slide-1_5, .slide-2_4, .slide-3_3, .slide-3_4, .slide-3_5 {
    stroke-width: initial !important;
  }

</style>
