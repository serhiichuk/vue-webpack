import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  languages: [],
  activeLanguage: '',

  allSlidesList: [],
  currentSlide: '',
  currentFlow: '',
  currentFlowList: [],

  activePopup: '',
  dataPopup: {},

  t: {}
};

const mutations = {
  INIT_SLIDE_PARAMS(state, options) {
    for (let key in options) {
      state[key] = options[key]
    }
  },

  SET_LANG(state, lang) {
    if (state.languages.indexOf(lang) !== -1) {
      state.activeLanguage = lang
    } else {
      console.warn(`Not find lang: "${lang}" in project languages: "${state.activeLanguage.toString()}"`)
    }
  },

  SET_POPUP_DATA(state, payload) {
    state.dataPopup = payload
  },

  POPUP_SHOW(state, payload) {
    state.activePopup = payload;
  },

  POPUP_HIDE(state) {
    state.activePopup = ''
  }
};

export default new Vuex.Store({
  state,
  mutations,
  strict: process.env.NODE_ENV !== 'production',
})
