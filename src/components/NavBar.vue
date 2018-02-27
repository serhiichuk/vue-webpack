<template>
    <div>
      <h4>{{msg}}</h4>

      <p @click="navigateToHome">Home</p>

      <div class="pages-list">
        <a v-for="(page, key) in pages" :key="key" @click="navigateTo(page.path)">
         {{page.name}}
        </a>
      </div>

      <hr>
    </div>
</template>

<script>
const isEnvDev = process.env.NODE_ENV === "development";

export default {
  name: "NavBar",
  data() {
    return {
      msg: "NavBar",
      pages: isEnvDev ? this.$router.options.routes : []
    };
  },
  methods: {
    navigateToHome() {
      const page = isEnvDev ? "main" : "home";
      this.navigateTo(page);
    },

    navigateTo(page) {
      if (isEnvDev) {
        this.$router.push(page);
        console.log("", page);
      } else {
        console.log("navigate to:", page);
      }
    }
  }
};
</script>

<style scoped>
a {
  margin-right: 10px;
  cursor: pointer;
}

div {
}
</style>
