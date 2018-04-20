#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const fsExtra = require('fs-extra');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Nightmare = require('nightmare');
const ora = require('ora');
const config = require('../config');
const clmConfig = require(config.paths.clmConfig);

let spinner = ora();
let server;
let nightmare;

/** Start Dev Server **/
function startDevServer() {
  return new Promise((resolve, reject) => {
    spinner.text = 'Starting server for testing...';

    require(config.paths.webpack.dev).then(webpackConfig => {

      webpackConfig.plugins = [
        new webpack.DefinePlugin({
          'process.env': require('../config/dev.env')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          inject: true
        })
      ];

      const compiler = webpack(webpackConfig);

      compiler.plugin('done', (stats) => {
        stats = stats.toJson();

        // show errors
        if (stats.errors && stats.errors.length > 0) {
          // throw stats;
          reject(stats);
        }

        // compilation success
        spinner.succeed(`Server for testing ready on http://${process.env.HOST}:${process.env.PORT}`);
        resolve()
      });

      server = new WebpackDevServer(compiler, {
        inline: true,
        clientLogLevel: 'none',
        hot: false,
        open: false,
        overlay: false,
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
          poll: config.dev.poll,
        }
      });

      server.listen(process.env.PORT)
    });
  });
}

/** Stop Dev Server **/
function stopDevServer() {
  server.close();
  spinner.succeed('Close server for testing');
}

/** Create screen **/
function createScreen(sl) {
  return new Promise((resolve, reject) => {
    const slideUrl = `http://${process.env.HOST}:${process.env.PORT}/#/${sl.id}`;
    const screenName = `${sl.id}.png`;

    nightmare
      .goto(slideUrl)
      .wait(300)
      .screenshot()
      .then(buffer => {
        resolve();
        spinner.succeed(`Screen save to: ${config.paths.screens}\\${screenName}`);

        fs.writeFile(path.join(config.paths.screens, screenName), buffer, err => {
          if (err) spinner.fail(err);
        });
      })
    .catch(err => reject(err))
  })
}

/** Return maximum allowable screens size **/
function getScreenSize(slideSize) {
  const maxWindowSize = {
    width: 1280,
    height: 768,
  };

  let scaleCoefficient = +(maxWindowSize.height / slideSize.height).toFixed(1);

  // Scale must be larger than 0.5
  scaleCoefficient = scaleCoefficient > 0.5 ? scaleCoefficient : 0.5;
  // Scale must be less than 1
  scaleCoefficient = scaleCoefficient <= 1 ? scaleCoefficient : 1;

  return {
    scaleCoefficient,
    width: slideSize.width * scaleCoefficient,
    height: slideSize.height * scaleCoefficient
  }
}


module.exports = () => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        process.env.PORT = '4444';
        process.env.HOST = 'localhost';
        process.env.NODE_ENV = 'development';

        console.log('\x1Bc');
        spinner.start('Creating screens for each slide...');


        await startDevServer();

        const size = getScreenSize(clmConfig.size);
        nightmare = new Nightmare({
          useContentSize: true,
          enableLargerThanScreen: true,
          width: size.width,
          height: size.height,
          show: false,
          webPreferences: {
            webaudio: false,
            webSecurity: false,
            zoomFactor: size.scaleCoefficient
          }
        });

        fsExtra.ensureDir(config.paths.screens);

        for (let sl of clmConfig.structure) {
          await createScreen(sl);
        }

        stopDevServer();
        spinner.succeed('Screens created.');
        spinner.stop();
        process.env.NODE_ENV = 'production';

        resolve();

      } catch (err) {
        reject(err)
      }
    })();
  });
};
