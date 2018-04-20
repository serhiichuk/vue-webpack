<template>
  <div id="development-page">
    <h1 class="dev-title">Development Page</h1>

    <h3>All slides:</h3>
    <div class="pages-list">
      <router-link v-for="(slide, key) in slides" :key="key" :to="`/${slide.id}`">
        {{slide.name || slide.id}}
      </router-link>
    </div>

  </div>
</template>

<script>
  import {languages, structure} from '@/clm.config'

  export default {
    data() {
      return {
        slides: structure,
      }
    }
  };
</script>

<style lang="scss" scoped>

  #development-page {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    z-index: 10000;

    background-color: rgb(232, 232, 232);
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

