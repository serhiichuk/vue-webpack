// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false;
const isDevEnv = process.env.NODE_ENV === 'development';

const router = isDevEnv
  ? async () => import('@/pages')
  : false;

console.log(router);

const components = {
  App: isDevEnv
    ? () => import('@/App')
    : () => import('@/pages/0_main/Main')
};

new Vue({
  el: '#app',
  router,
  components,
  template: '<App/>'
});
