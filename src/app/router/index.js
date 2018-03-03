import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

let routes = [];

if (process.env.NODE_ENV === 'development') {
  const files = require.context('@/pages', true, /\.vue$/);
  routes = [{path: '/', component: () => import ('@/components/development-page')}];

  files.keys().forEach(key => {
    routes.push({
      path: `/${files(key).default.__file.split('\\').pop().replace(/\.vue$/, '')}`,
      component: files(key).default
    });
  });
} else {
  routes = [{
    path: '/',
    component: () => import(`@/${process.env.PAGE_PATH}`)// 'process.env.PAGE_PATH' was set in 'bin/build.js'
  }]
}

export default new Router({
  mode: 'history',
  routes: routes
})
