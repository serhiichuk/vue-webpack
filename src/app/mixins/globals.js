import {languages, structure} from '@/structure.json'
import device from '@/app/device'

const isDev = process.env.NODE_ENV === 'development';

export default {
  computed: {
    t() {
      const lang = this.$store.state.currentLang || languages[0];
      return this.data[lang]
    }
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.dispatch('init', to.path.replace(/\//g, ''))
    });
  },

  methods: {
    navigateTo(id) {
      if (isDev) {
        this.$router.push(`/${id}`)
      } else {
        device.navigation.navigateTo(id);
      }
    }
  }
}
