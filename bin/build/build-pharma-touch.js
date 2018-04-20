#!/usr/bin/env node

const path = require('path');
const sharp = require('sharp');
const config = require('../config');
const clmConfig = require(config.paths.clmConfig);
const webpackBuild = require('../utils/webpack-sl-build');

module.exports = () => {
  return new Promise(resolve => {
    (async () => {
      for (let slide of clmConfig.structure) {

        const params = {};
        params.clm = 'pharma-touch';
        params.slideName = slide.id;

        params.env = {
          CLM_NAME: 'pharma-touch',
          BUILD_PATH: slide.path,
          SLIDE_NAME: slide.id,
          SLIDE_PATH: path.join(config.build.assetsRoot, params.clm)
        };

        /** Webpack Build **/
        await webpackBuild(params.env);

        /** Create thumbnails **/
        const screen = sharp(path.join(config.paths.screens, `${slide.id}.png`))
          .ignoreAspectRatio();

        screen
          .resize(300, 225)
          .toFile(path.join(params.env.SLIDE_PATH, `${params.slideName}.jpg`))
          .catch(err => {console.log(err)});
      }

      /** Build Complete **/
      resolve()
    })();
  })
};
