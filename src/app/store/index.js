import Vue from 'vue'
import Vuex from 'vuex'
import {languages} from '@/clm.config'
import StructureParser from '@/app/utils/structure-parser'
import dataTemplate from '../../../bin/default-template/data'

Vue.use(Vuex);

const state = {
  isReady: false,
  languages,
  currentLang: sessionStorage.getItem('clm-lang') || languages[0],
  activePopup: '',
  // activeVideo: '',
  data: {},
  currentSlide: {},
  currentFlow: [],
  slides: []
};

const getters = {
  currentData: state => {
    return state.data[state.currentLang] || dataTemplate
  }
};

const mutations = {
  SET_READY(state) {
    state.isReady = true
  },
  SET_CURRENT_LANG(state, lang) {
    if (state.languages.indexOf(lang) === -1 && process.env.NODE_ENV === 'development') {
      console.warn(`Not find lang: "${lang}" in project languages: "${state.languages}"`)
    } else {
      state.currentLang = lang;
      sessionStorage.setItem('clm-language', lang)
    }
  },

  SET_DATA(state, data) {
    state.data = data;
  },

  SET_ALL_SLIDES(state, slides) {
    state.slides = slides;
  },

  SET_CURRENT_SLIDE(state, currentSlide) {
    state.currentSlide = currentSlide;
  },

  SET_CURRENT_FLOW(state, currentFlow) {
    state.currentFlow = currentFlow;
  },

  // VIDEO_PLAY(state, src) {
  //   state.activeVideo = src;
  // },
  //
  // VIDEO_CLOSE(state) {
  //   state.activeVideo = ''
  // },

  POPUP_SHOW(state, popupName) {
    state.activePopup = popupName;
  },

  POPUP_HIDE(state) {
    state.activePopup = ''
  }
};

const actions = {
  async init({commit}, {currentSlideId}) {
    const structure = new StructureParser(currentSlideId);
    const data = {};

    for (let lang of languages) {
      data[lang] = await import(`@/${structure.currentSlide.path}/data_${lang}`)
    }

    commit('SET_DATA', data);
    commit('SET_ALL_SLIDES', structure.slides);
    commit('SET_CURRENT_SLIDE', structure.currentSlide);
    commit('SET_CURRENT_FLOW', structure.currentFlow);
    commit('SET_READY');
  }
};


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production',
})
