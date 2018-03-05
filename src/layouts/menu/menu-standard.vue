<template>
    <section id="menu">

      <div @click="toHome">Home</div>

      <div class="pages-list">
        <a v-for="(page, key) in pages" :key="key"
           @click="toPage(page.path)"
        >{{page.path}} </a>
      </div>

    </section>
</template>

<script>
const isEnvDev = process.env.NODE_ENV === "development";

export default {
  data() {
    return {
      pages: isEnvDev ? this.$router.options.routes : []
    };
  },
  methods: {
    toHome() {
      const page = isEnvDev ? "main" : "home";
      this.toPage(page);
    },

    toPage(page) {
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

<style lang="scss" scoped>
  #menu {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 60px;

    background-color: $color-accent-1;
  }
</style>
