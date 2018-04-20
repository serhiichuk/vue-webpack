// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-polyfill'
import Vue from 'vue'
import App from '@/App'
import clm from '@/app/clm'
import store from '@/app/store'

const isDev = process.env.NODE_ENV === 'development';

// Disable dev-tools extension in production
Vue.config.productionTip = !isDev;

// Global mixin for all components
Vue.mixin({
  methods: {
    navigateTo(id) {
      clm.navigation.navigateTo(id);
    }
  }
});

const routerPath = isDev
  ? 'app/router/dev'
  : 'app/router/prod';

import('@/' + routerPath).then(module => {
  new Vue({
    el: '#app',
    store,
    router: module.default || module,
    components: {App},
    template: '<App/>'
  });
});

