#!/usr/bin/env node

const path = require('path');
const config = require('../config');
const clmConfig = require(config.paths.clmConfig);
const archiveMaker = require('../lib/archive-maker');
const assetsCleaner = require('../lib/assets-cleaner');
const thumbsMaker = require('../lib/thumbs-maker');
const webpackSlideBuild = require('../lib/webpack-slide-builder');

module.exports = (spinner, options) => {
  return new Promise(resolve => {
    (async () => {
      for (let slide of clmConfig.structure) {
        const params = {};
        params.clm = 'veeva';
        params.slideName = slide.id;

        params.env = {
          CLM_NAME: params.clm,
          BUILD_PATH: slide.path,
          SLIDE_NAME: `${clmConfig.idPattern}--${slide.id}`,
          SLIDE_PATH: path.join(config.build.assetsRoot, params.clm, `${clmConfig.idPattern}--${slide.id}`)
        };

        /** Webpack Build **/
        await webpackSlideBuild(spinner, params);

        /** Create thumbnails **/
        thumbsMaker(spinner, params, {
          size: {w: 849, h: 637},
          file: {path: params.env.SLIDE_PATH, name: `${params.env.SLIDE_NAME}-full.png`}
        });

        thumbsMaker(spinner, params, {
          size: {w: 200, h: 150},
          file: {path: params.env.SLIDE_PATH, name: `${params.env.SLIDE_NAME}-thumb.png`}
        });

        /** Clean excess from assets directory **/
        if (!options['no-clear-assets']) assetsCleaner(spinner, params);

        /** Create Archive **/
        await archiveMaker(spinner, params, {
          archiveSubDir: params.env.SLIDE_NAME
        });
      }

      /** Build Complete **/
      resolve()
    })();
  })
};

