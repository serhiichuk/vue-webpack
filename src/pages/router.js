import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: getRoutes()
})

function getRoutes() {
  const files = require.context('./', true, /\.vue$/);
  let routes = [{
    path: '/',
    name: 'StartPage',
    component: () =>
      import ('@/components/StartPage')
  }];

  files.keys().forEach(key => {
    if (key === './index.js') return

    routes.push({
      name: files(key).default.name,
      path: `/${files(key).default.name}`,
      component: files(key).default
    })
  });

  return routes
}
