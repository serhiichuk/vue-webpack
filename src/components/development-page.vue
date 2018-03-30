<template>
  <div class="development-page">
    <h1 class="title">Development Page</h1>

    <h3>All slides:</h3>
    <div class="pages-list">
      <router-link v-for="(slide, key) in slides" :key="key" :to="`/${slide.id}`">
        {{slide.name || slide.id}}
      </router-link>
    </div>

  </div>
</template>

<script>
  import {languages, structure} from '@/structure.json'

  export default {
    data() {
      return {
        slides: structure
      }
    }
  };
</script>

<style lang="scss" scoped>
  .title {
    margin-top: 5%;
    color: #259090;
    text-align: center;
  }

  h3 {
    margin: 5% auto 1%;
    text-align: center;
    color: #888;
  }

  .pages-list {
    width: 60%;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    * {
      padding: 0.5em 0.25em;

      color: #1e88e5;
      font-size: 1.4em;
      font-family: sans-serif;
    }
  }
</style>

