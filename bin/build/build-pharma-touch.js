'use strict';
process.env.NODE_ENV = 'production';

const fsex = require('fs-extra');
const path = require('path');
const ora = require('ora');
const chalk = require('chalk');
const webpack = require('webpack');
const config = require('../config/index');
const webpackConfig = require('./webpack.prod.conf');
const pages = getPagesPath();

// Main loop around all pages
(async function () {
  for (let page of pages) {
    const env = {
      BUILD_PATH: page,
      SLIDE_NAME: getSlideName(page)
    };

    await webpackBuild(env);
  }
})();

/** Webpack Build **/
function webpackBuild(env) {
  const spinner = ora(`building ${env.BUILD_PATH} for production...`);
  spinner.start();

  return new Promise((resolve, reject) => {
    const config = webpackConfig(env);

    webpack(config, (err, stats) => {
      spinner.stop();

      if (err) throw err;

      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false,
        chunkModules: false
      }) + '\n\n');

      if (stats.hasErrors()) {
        console.log(chalk.red('  Build failed with errors.\n'));
        process.exit(1)
      }

      console.log(chalk.cyan('  Build complete.\n'));
      console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
      ));

      resolve();
    })
  });
}

function getSlideName(pagePath) {
  return pagePath.split('/').splice(-2, 1).join();
}

function getPagesPath() {
  const pages = [];
  const structure = require('../../src/structure').structure;


  for (let flow in structure) {
    if (structure[flow].slides) {
      structure[flow].slides.forEach(slide => {
        pages.push(slide.path)
      });
    } else {
      pages.push(structure[flow].path)
    }
  }

  return pages;
}

/** Thumbs **/
