// 'use strict';
require('./check-versions')();

process.env.NODE_ENV = 'production';

const fs = require('fs');
const path = require('path');
const rm = require('rimraf');
const chalk = require('chalk');
const webpack = require('webpack');
const config = require('../config');
const klawSync = require('klaw-sync');
const ProgressBar = require('progress');
const webpackConfig = require('./webpack.prod.conf');

const pages = getPages();

const progressBar = new ProgressBar(' :bar :percent', {
  width: 25,
  complete: '\u001b[42m \u001b[0m',
  incomplete: '\u001b[44m \u001b[0m',
  total: pages.length
});

(async function () {
  for (let page of pages) {
    const pageName = page.path.split(path.sep).pop().split('.')[0];
    const pageInDist = path.join(config.build.assetsRoot, pageName);

    process.env.BUILD_PAGE = path.relative(config.build.srcRoot, page.path);
    process.env.BUILD_PAGE_NAME = pageName;

    createPageDir(pageInDist);

    await webpackBuild(pageInDist);
  }
})();

// console.log(chalk.cyan('  Build complete.\n'));
// console.log(chalk.yellow(
//   '  Tip: built files are meant to be served over an HTTP server.\n' +
//   '  Opening index.html over file:// won\'t work.\n'
// ))


function createPageDir(pageInDist) {
  fs.mkdir(pageInDist)
}

function webpackBuild(pageInDist) {
  return new Promise((resolve, reject) => {
    rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
      if (err) throw err;

      const config = webpackConfig({
        pageInDist
      });

      webpack(config, (err, stats) => {

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

        progressBar.tick();
        resolve();
      })
    });
  });
}


function getPages() {
  const filter = item => path.extname(item.path) === '.vue';

  try {
    return klawSync(config.build.pagesRoot, {filter});
  } catch (err) {
    console.error(err);
  }
}
