import {languages, structure} from '@/clm.config'

export default {
  computed: {
    isReady() {
      return this.$store.state.isReady
    },
    t() {
      return this.$store.getters.currentData.content
    }
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.dispatch('init', {
        currentSlideId: to.path.replace(/\//g, ''),
      })
    });
  }
}
