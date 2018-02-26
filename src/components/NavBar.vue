<template>
    <div>
      <hr>
      <h4>{{msg}}</h4>
      
      <p @click="navigateToHome">Home</p>
      
      <ul class="pages-list">
        <li v-for="(page, key) in pages" :key="key" @click="navigateTo(page.path)">
         {{page.name}}      
        </li>
      </ul>

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
      pages: []
    };
  },
  methods: {
    navigateToHome() {
      const page = isEnvDev ? "home" : "home";
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
ul li {
  list-style: none;
  cursor: pointer;
}
ul {
  display: flex;
}
</style>
