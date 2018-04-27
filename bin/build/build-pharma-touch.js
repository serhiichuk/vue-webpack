#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const config = require('../config');
const clmConfig = require(config.paths.clmConfig);
const thumbsMaker = require('../lib/thumbs-maker');
const archiveMaker = require('../lib/archive-maker');
const cyrillicToTransit = require('cyrillic-to-translit-js');
const webpackSlideBuild = require('../lib/webpack-slide-builder');

module.exports = (spinner, options) => {
  return new Promise(resolve => {
    const params = {};

    (async () => {

      for (let slide of clmConfig.structure) {
        // const params = {};

        params.clm = 'pharma-touch';
        params.slideName = slide.id;

        params.env = {
          CLM_NAME: params.clm,
          BUILD_PATH: slide.path,
          SLIDE_NAME: slide.id,
          SLIDE_PATH: path.join(config.build.assetsRoot, params.clm)
        };

        /** Webpack Build **/
        await webpackSlideBuild(spinner, params);

        /** Create thumbnails **/
        thumbsMaker(spinner, params, {
          size: {w: 300, h: 225},
          file: {path: params.env.SLIDE_PATH, name: `${params.slideName}.jpg`}
        });

      }

      /** Create structure.json **/
      createStructureForPT();



      /** Create Archive **/
      // await archiveMaker(spinner, params, {
      //   archiveName: clmConfig.idPattern,
      //   contentPath: path.join(config.build.assetsRoot, 'pharma-touch'),
      //   clmName: 'pharma-touch',
      //   archiveSubDir: false
      // });
      spinner.warn('For PharmaTouch you must create ZIP\'s manually, because now programmally it\'s impossible.');

      /** Build Complete **/
      resolve()
    })();
  })
};


function createStructureForPT() {
  const json = {};

  json.slides = clmConfig.structure.map((sl, index) => ({
    mapname: clmConfig.idPattern,
    name: sl.name ? getTransitName(sl.name) : '',
    filename: sl.id + '.html',
    preview: sl.id + '.jpg',
    ishidden: 0,
    position: index + 1
  }));

  fs.writeFileSync(path.join(config.build.assetsRoot, 'pharma-touch', 'slides.json'), JSON.stringify(json, null, '  '));
}

/**
 * Return traslited value
 *
 * @param name
 * @returns {string}
 */
function getTransitName(name) {
  if (typeof name === 'string') {
    const preset = clmConfig.languages[0] === 'ua' ? 'uk' : 'ru';
    return cyrillicToTransit({ preset }).transform(name)
  } else {
    switch (true) {
      case !!name.ru:
      return cyrillicToTransit().transform(name.ru);

      case !!name.ua:
      return cyrillicToTransit({ preset: "uk" }).transform(name.ua);

      default:
      return cyrillicToTransit().transform(name[Object.keys(name)[0]])
    }
  }
}
