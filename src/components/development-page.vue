<template>
  <div class="development-page">
    <h4>{{msg}}</h4>

    <div class="pages-list">
      <router-link v-for="(page, key) in pages" :key="key" :to="page.path">
        {{page.path}}
      </router-link>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: "StartPage Here",
        pages: this.$router.options.routes
      };
    }
  };
</script>

<style lang="scss" scoped>
  .pages-list {
    * {
      padding: 4px 8px;
    }
  }
</style>
