// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import store from '@/app/store'

// Disable dev-tools extension in production
Vue.config.productionTip = process.env.NODE_ENV === 'production';

const routerPath = process.env.NODE_ENV === 'development'
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

