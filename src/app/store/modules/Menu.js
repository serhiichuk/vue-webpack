const state = {
  allSlides: [],
};

const getters = {
  getFilteredSlides: (state) => (filter) => {
    return state.allSlides.filter(slide => slide.match(filter))
  }
};

export default {
  state,
  getters
}
