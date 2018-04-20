<template>
  <section id="menu" v-if="!isMain">

    <button class="nav" v-for="(sl, key) in flowList" :key="key"
            @touchend="navigateTo(sl.id)"
            :class="{active: isActiveFlow(sl.id)}">
      <p v-html="sl.flowName"/>
    </button>

  </section>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['slides', 'currentFlow', 'currentSlide', 'currentLang']),

      flowList() {
        return this.slides.reduce((finalList, sl) => {
          //filter 1-st slide from all flows
          if (sl.flowName) {
            const res = {...sl};

            // get current lang name if it's an object {ua: '...', ru: '...'}
            res.flowName = typeof sl.flowName === 'object'
              ? sl.flowName[this.currentLang]
              : sl.flowName;

            finalList.push(res);
          }

          return finalList;
        }, []);
      },

      isMain() {
           return this.currentSlide.id === 'slide-main'
      }
    },

    methods: {
      isActiveFlow(id) {
        let result = false;

        this.currentFlow.forEach(sl => {
          if (sl.id === id) result = true
        });

        return result
      }
    }

  };
</script>

<style lang="scss" scoped>
  #menu {
    position: absolute;
    top: 16px;
    right: 16px;
    left: 16px;
    height: 96px;

    display: flex;
    justify-content: space-between;
  }

  .nav {
    height: 100%;
    padding: 0 40px;
    margin: 0 -2px;

    background-color: rgba(255, 255, 255, 0.4);
    background-image: linear-gradient(to top, #e0e0e0 0%, white 100%);
    border: 2px solid #7b6c5b;

    text-align: center;
    text-transform: uppercase;
    word-wrap: break-word;
    font-size: 30px;
    color: #7b6c5b;

    &:first-child {
      border-radius: 0 0 0 50px;
    }

    &:last-child {
      border-radius: 0 50px 0 0;
    }

    &:active, &.active {
      background: white;
      font-weight: bold;
    }
  }

</style>
