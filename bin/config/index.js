'use strict';
const path = require('path');
const root = process.cwd();

const paths = {
  root,
  bin: path.join(root, 'bin'),
  clmConfig: path.join(root, 'src', 'clm.config'),
  defaultTemplate: {
    content: path.join(root, 'bin', 'default-template', 'content.vue'),
    data: path.join(root, 'bin', 'default-template', 'data.json'),
  },
  dist: path.join(root, 'dist'),
  screens: path.join(root, 'dist', 'screens'),
  src: path.join(root, 'src'),
  webpack: {
    base: path.join(root, 'bin', 'config', 'webpack', 'webpack.base.conf'),
    dev: path.join(root, 'bin', 'config', 'webpack', 'webpack.dev.conf'),
    prod: path.join(root, 'bin', 'config', 'webpack', 'webpack.prod.conf'),
  },
  zip: path.join(root, '..', 'ZIP'),
};

const dev = {
  // Paths
  assetsSubDirectory: '',
  assetsPublicPath: '',
  proxyTable: {},

  // Various Dev Server settings
  host: '0.0.0.0', // can be overwritten by process.env.HOST
  port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
  autoOpenBrowser: false,
  errorOverlay: true,
  notifyOnErrors: true,
  poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


  /**
   * Source Maps
   */

  // https://webpack.js.org/configuration/devtool/#development
  devtool: 'cheap-module-eval-source-map',

  // If you have problems debugging vue-files in devtools,
  // set this to false - it *may* help
  // https://vue-loader.vuejs.org/en/options.html#cachebusting
  cacheBusting: true,

  cssSourceMap: true
};

const build = {
  // Paths
  assetsRoot: paths.dist,
  assetsSubDirectory: '',
  assetsPublicPath: '',

  /**
   * Source Maps
   */

  port: 4444, // can be overwritten by process.env.PORT
  productionSourceMap: false,
  // https://webpack.js.org/configuration/devtool/#production
  devtool: '#source-map',

  // Gzip off by default as many popular static hosts such as
  // Surge or Netlify already gzip all static assets for you.
  // Before setting to `true`, make sure to:
  // npm install --save-dev compression-webpack-plugin
  productionGzip: false,
  productionGzipExtensions: ['js', 'css'],

  // Run the build command with an extra argument to
  // View the bundle analyzer report after build finishes:
  // `npm run build --report`
  // Set to `true` or `false` to always turn it on or off
  bundleAnalyzerReport: process.env.npm_config_report
};

module.exports = {
  paths,
  dev,
  build
};
