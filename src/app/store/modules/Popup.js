const state = {
  activePopup: '',
};

const mutations = {
  POPUP_SHOW(state, payload) {
    state.activePopup = payload;
  },
  POPUP_HIDE(state) {
    state.activePopup = ''
  },
};

export default {
  namespaced: true,
  state,
  mutations
}
