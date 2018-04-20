import {languages, structure} from '@/clm.config'

export default {
  computed: {
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
