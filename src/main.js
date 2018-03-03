// '~' equal to ../bin
// '@' equal to ../src
import Vue from 'vue'
import Router from '~/router'
// For Development we use '<router-view/>' instead '<build-page/>' in Production
// 'process.env.PAGE_PATH' was set in 'bin/build.js'
const isDevelopment = process.env.NODE_ENV === 'development';
const components = { BuildPage: () => import(`@/${process.env.PAGE_PATH}`) };
const router = isDevelopment ? Router.getRoutes() : false;
const template = `<div>${isDevelopment ? '<router-view/>' : '<build-page/>'}</div>`;

// Disable dev-tools in Production
Vue.config.productionTip = !isDevelopment;

new Vue({
  el: '#app',
  components,
  router,
  template
});
