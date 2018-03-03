const state = {
  locales: ['ua', 'ru', 'en'],
  locale: 'ua'
};

const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
};

export default {
  state,
  mutations
}
