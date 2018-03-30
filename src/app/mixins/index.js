import {languages, structure} from '@/structure.json'
import {mapState} from 'vuex'
import device from '@/app/device'

const isDev = process.env.NODE_ENV === 'development';

export default {
  computed: {
    ...mapState(['t']),
  },

  methods: {
    initSlideParams() {
      const activeLanguage = sessionStorage.getItem('clm-lang') || languages[0];

      const currentSlide = process.env.NODE_ENV === 'production'
        ? process.env.SLIDE_NAME
        : this.$route.path.replace('/', '');

      const currentFlow = `${currentSlide.split('--').splice(-1, 1).join('').split('_')[0]}`;

      const allSlidesList = structure.map(slide => ({
        id: slide.id,
        name: typeof slide.name === 'object' ? slide.name[activeLanguage] : slide.name,
        path: slide.path
      }));

      const currentFlowList = allSlidesList.filter(slide => slide.flow.match(currentFlow)) || [];

      const dataPath = `pages/${currentFlow}/${currentSlide}/data_${activeLanguage}.json`;

      import('../../' + dataPath).then(data => {
        this.$store.commit('INIT_SLIDE_PARAMS', {
          languages,
          activeLanguage,

          allSlidesList,
          currentSlide,
          currentFlow,
          // currentFlowList,

          dataPopup: data.popup || data.default.popup,
          t: data.content || data.default.content
        });
      });
    },
  },

  created() {
    this.initSlideParams();
  }
}

export const navigation = {
  methods: {
    navigateTo(id) {
      if (isDev) {
        this.$router.push(`/${id}`)
      } else {
        device.navigation.navigateTo(id);
      }
    }
  }
};

function createStructure(activeLanguage, currentSlide) {

}
