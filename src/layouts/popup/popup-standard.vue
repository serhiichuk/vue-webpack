<template>
  <div id="popup">
    <h2>Popup</h2>

    <ol>
      <li v-for="(ref, key) in references" :key="key" v-html="ref"></li>
    </ol>

    <!--<button @click="POPUP_SHOW('asd')">Show</button>-->
    <!--<button @click="POPUP_HIDE">Hide</button>-->
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    data() {
      return {
        references: ['ref', 'ref'],
      };
    },
    // computed: {
    //   ...mapState(['activeSlide', 'isDevelopment', 'activePopup'])
    // },
    // methods: {
    //   ...mapMutations(['POPUP_SHOW', 'popup/POPUP_HIDE']),
    // }
  };
</script>

<style scoped>
  #popup {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }
</style>
