
const chalk = require('chalk');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require(config.paths.webpack.prod);
const libName = chalk.green('[Webpack Builder]');

module.exports = (spinner, params) => {
  return new Promise((resolve, reject) => {
    spinner.start(`${libName} Building ${params.slideName} for ${params.env.CLM_NAME}...`);
    const config = webpackConfig(params.env);

    webpack(config, (err, stats) => {

      if (err || stats.hasErrors()) {
        console.log(libName, chalk.red('Build failed with errors.\n'), err);
        process.exit(1)
      }

      spinner.succeed(`${libName} Building ${params.slideName} for ${params.env.CLM_NAME} complete.`);
      resolve();
    })
  });
};
