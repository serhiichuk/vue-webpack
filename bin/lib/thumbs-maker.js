'use strict';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../build/webpack.dev.conf');

const compiler = webpack(webpackConfig);

const server = new WebpackDevServer(compiler, {
  clientLogLevel: 'warning',
  historyApiFallback: {
    rewrites: [
      { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
    ],
  },
  hot: true,
  contentBase: false, // since we use CopyWebpackPlugin.
  compress: true,
  host: HOST || config.dev.host,
  port: PORT || config.dev.port,
  open: config.dev.autoOpenBrowser,
  overlay: config.dev.errorOverlay
    ? { warnings: false, errors: true }
    : false,
  publicPath: config.dev.assetsPublicPath,
  proxy: config.dev.proxyTable,
  quiet: true, // necessary for FriendlyErrorsPlugin
  watchOptions: {
    poll: config.dev.poll,
  }
});

server.listen(2905, () => {
  console.log('Starting server on http://localhost:2905');
});

module.exports = function () {

};
