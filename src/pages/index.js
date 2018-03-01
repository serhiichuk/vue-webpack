import Vue from 'vue'
import Router from 'vue-router'

export default {
  getRoutes() {
    Vue.use(Router);

    const files = require.context('./', true, /\.vue$/);
    let routes = [{
      path: '/',
      name: 'StartPage',
      component: () =>
        import ('@/components/StartPage')
    }];

    files.keys().forEach(key => {
      routes.push({
        name: files(key).default.name,
        path: `/${files(key).default.__file.split('\\').pop().replace(/\.vue$/, '').toLowerCase()}`,
        component: files(key).default
      });
    });

    return new Router({
      routes
    })
  },

  getPages() {
    return require.context('./', true, /\.vue$/);
  }
}

