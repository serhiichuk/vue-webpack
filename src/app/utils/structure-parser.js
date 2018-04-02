import {languages, structure} from '@/structure.json'

export default class {
  constructor(currentSlideId = '') {
    this.currentSlide = {};
    this.currentFlow = [];
    this.slides = [];

    this.run(currentSlideId);
  }

  run(currentSlideId) {
    structure.forEach(slide => {
      // Create All Slides Array
      this.slides.push(this.getSlideEl(slide));

      // Create Current Slide Object
      if (slide.id === currentSlideId) {
        this.currentSlide = this.getSlideEl(slide);
      }

      // Create Current Flow Array
      if (this.getIdWithoutSlNum(slide.id) === this.getIdWithoutSlNum(currentSlideId)) {
        this.currentFlow.push(this.getSlideEl(slide));
      }
    })
  }

  getSlideEl(sl) {
    return {
      id: sl.id,
      name: sl.name,
      path: sl.path
    }
  }

  // SOME_PREP_C1_18--slide_1_2 - will return: slide_1
  // _________________↑↑↑↑↑↑↑↑__
  // SOME_PREP_C1_18--slide_main - will return: slide_main
  // _________________↑↑↑↑↑↑↑↑↑↑↑↑
  getIdWithoutSlNum(id) {
    return id.split('--').pop().split('_')[0]
  }
}
