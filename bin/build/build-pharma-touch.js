#!/usr/bin/env node
process.env.NODE_ENV = 'production';

const ora = require('ora');
const chalk = require('chalk');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('../config/webpack/webpack.prod.conf');
const slides = require(config.paths.structure).structure;

// Main loop around all pages
(async function () {
  for (let slide of slides) {
    const env = {
      BUILD_PATH: slide.path,
      SLIDE_NAME: slide.id
    };


    console.log(env);
    // await webpackBuild(env);
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

