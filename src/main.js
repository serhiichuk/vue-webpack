// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './app/store'
import router from './app/router'

// Disable dev-tools extension in production
Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
});
