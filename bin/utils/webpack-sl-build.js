
const chalk = require('chalk');
const ora = require('ora');
const config = require('../config');
const webpack = require('webpack');
const webpackConfig = require(config.paths.webpack.prod);

module.exports = (env) => {
  return new Promise((resolve, reject) => {
    const config = webpackConfig(env);
    const spinner = ora(`Building ${env.BUILD_PATH} for ${env.CLM_NAME}...`).start();

    webpack(config, (err, stats) => {
      if (err) throw err;

      // process.stdout.write(stats.toString({
      //   colors: true,
      //   modules: false,
      //   children: false,
      //   chunks: false,
      //   chunkModules: false
      // }) + '\n');

      if (stats.hasErrors()) {
        console.log(chalk.red('  Build failed with errors.\n'));
        process.exit(1)
      }
      spinner.succeed(`Building ${env.BUILD_PATH} for ${env.CLM_NAME} complete.`);
      spinner.stop();

      resolve();
    })
  });
};
