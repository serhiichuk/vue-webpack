import { languages } from '@/structure.json'

const state = {
  languages,
  activeLanguage: languages[0]
};

const mutations = {
  SET_LANG(state, lang) {
    if (state.languages.indexOf(lang) !== -1) {
      state.activeLanguage = lang
    } else {
      console.warn(`Not find lang: "${lang}" in project languages: "${state.activeLanguage.toString()}"`)
    }
  }
};

export default {
  state,
  mutations
}
