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
        params.clm = 'veeva';
        params.slideName = slide.id;
        params.env = {
          CLM_NAME: params.clm,
          BUILD_PATH: slide.path,
          SLIDE_NAME: `${clmConfig.idPattern}--${slide.id}`,
          SLIDE_PATH: path.join(config.build.assetsRoot, params.clm, `${clmConfig.idPattern}--${slide.id}`)
        };

        /** Webpack Build **/
        await webpackBuild(params.env);

        /** Create thumbnails **/
        const screen = sharp(path.join(config.paths.screens, `${slide.id}.png`))
          .ignoreAspectRatio();

        screen
          .resize(849, 637)
          .toFile(path.join(params.env.SLIDE_PATH, `${params.env.SLIDE_NAME}-full.png`))
          .catch(err => {
            console.log(err)
          });

        screen
          .resize(200, 150)
          .toFile(path.join(params.env.SLIDE_PATH, `${params.env.SLIDE_NAME}-thumb.png`))
          .catch(err => {
            console.log(err)
          });

      }

      /** Build Complete **/
      resolve()
    })();
  })
};
