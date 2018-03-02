'use strict';
require('./check-versions')();

process.env.NODE_ENV = 'production';

const fsex = require('fs-extra');
const path = require('path');
const ora = require('ora');
const chalk = require('chalk');
const webpack = require('webpack');
const klawSync = require('klaw-sync');
const config = require('../config/index');
const webpackConfig = require('./webpack.prod.conf');
const pages = getPages();

(async function () {
  for (let page of pages) {
    const slideName = page.path.split(path.sep).pop().split('.')[0];
    const slidePath = path.join(config.build.assetsRoot, slideName);
    const pagePathRelativeFromSrc = path.relative(path.resolve(process.cwd(), 'src'), page.path).replace(/(\\)/g, '/');

    createSlideDir(slidePath);
    await webpackBuild(slidePath, pagePathRelativeFromSrc);
  }
})();


function getPages() {
  const filter = item => path.extname(item.path) === '.vue';

  try {
    return klawSync(path.resolve(process.cwd(), 'src', 'pages'), {filter});
  } catch (err) {
    console.error(err);
  }
}

function createSlideDir(slidePath) {
  fsex.emptyDirSync(slidePath);
}

function webpackBuild(slidePath, pagePathRelativeFromSrc) {
  const spinner = ora('building "@/' + pagePathRelativeFromSrc + '" for production...');
  spinner.start();

  return new Promise((resolve, reject) => {

    const config = webpackConfig({
      slidePath,
      pagePathRelativeFromSrc
    });

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

