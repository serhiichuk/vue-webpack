<template>
    <div>
      {{msg}}

      <div class="pages-list">
        <router-link v-for="(page, key) in pages" :key="key" :to="page.path">
         {{page.name}}      
        </router-link>
      </div>
    
    </div>
</template>

<script>
export default {
  name: "StartPage",
  data() {
    return {
      msg: "Start Page",
      pages: this.$router.options.routes
    };
  }
};
</script>

<style scoped>
.pages-list * {
  padding: 4px 8px;
}
</style>
