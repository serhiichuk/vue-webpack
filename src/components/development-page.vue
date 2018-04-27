<template>
  <div id="development-page">
    <h1 class="dev-title">Development Page</h1>

    <div class="switch" :class="`position-${switchPosition}`">
      <div class="switch-1" @touchend="setSwitch(1)">ID</div>
      <div class="switch-2" @touchend="setSwitch(2)">Name</div>
    </div>

    <h3>All slides:</h3>
    <div class="pages-list">
      <router-link v-for="(slide, key) in slides" :key="key" :to="`/${slide.id}`">
        {{switchPosition === 1 ? slide.id : slide.name}}
      </router-link>
    </div>

    <div id="qr">{{ip}}</div>

  </div>
</template>

<script>
  import {languages, structure} from '@/clm.config'
  import getIP from '../app/utils/get-local-ip';

  export default {
    data() {
      return {
        slides: structure,
        switchPosition: 1,
      }
    },
    computed: {
      async ip() {
        const res = await getIP();
        return res
      }
    },
    methods: {
      setSwitch(pos) {
        this.switchPosition = pos;
      }
    }
  }
</script>

<style lang="scss" scoped>

  * {
    color: #888;
  }

  #development-page {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    z-index: 10000;

    background-color: rgb(232, 232, 232);
  }

  .switch {
    position: absolute;
    top: 5%;
    right: 20%;

    display: flex;
    justify-content: space-between;

    font-weight: normal;
    font-size: 32px;
    font-family: sans-serif;

    background-color: rgba(#1e88e5, .1);
    border-radius: 10em;

    > * {
      position: relative;
      padding: 18px 25px;
      border-radius: 10em;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform-origin: center;
        transform: translateX(-50%) scale(0);

        width: 40%;
        height: 2px;

        border-radius: 0 0 100% 100%;
        background-color: #259090;

        transition: all .2s;
      }
    }

    &.position-1 {
      .switch-1 {
        font-weight: bold;
        box-shadow: inset 0 0 80px -20px #259090;

        &:after {
          transform: translateX(-50%) scale(1);
        }
      }
    }

    &.position-2 {
      .switch-2 {
        font-weight: bold;
        box-shadow: inset 0 0 80px -20px #259090;

        &:after {
          transform: translateX(-50%) scale(1);
        }
      }
    }
  }

  .dev-title {
    margin-top: 5%;
    color: #259090;
    text-align: center;
  }

  h3 {
    margin: 2.5% auto;
    text-align: center;
    color: #888;
  }

  .pages-list {
    position: absolute;
    top: 20%;
    left: 10%;
    right: 10%;

    max-height: 80%;
    height: 40%;
    /*bottom: 10%;*/

    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    /*justify-content: center;*/
    align-items: center;

    * {
      padding: 0.25em;

      color: #1e88e5;
      font-size: 1.4em;
      font-family: sans-serif;
    }
  }
</style>

