import Vue from 'vue'
import Router from 'vue-router'

export default {
  getRoutes() {
    const files = require.context('@/pages', true, /\.vue$/);
    let routes = [{ path: '/', component: () => import ('@/components/development-page')}];

    files.keys().forEach(key => {
      routes.push({
        path: `/${files(key).default.__file.split('\\').pop().replace(/\.vue$/, '')}`,
        component: files(key).default
      });
    });

    Vue.use(Router);

    return new Router({
      mode: 'history',
      routes: routes
    })
  },

  getPages() {
    return require.context('./', true, /\.vue$/);
  }
}

