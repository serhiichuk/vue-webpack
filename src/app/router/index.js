import Vue from 'vue'
import Router from 'vue-router'
import {structure} from '@/structure.json'

Vue.use(Router);

const isDev = process.env.NODE_ENV === 'development';
let routes = [{path: '/', component: () => import ('@/components/development-page')}];

if (isDev) {
  structure.forEach(slide => {
    routes.push({
      path: `/${slide.id}`,
      component: () => import(`@/${slide.path}/content`)
    })
  })

} else {
  routes = [{
    path: '/',
    component: () => import(`@/${process.env.BUILD_PATH}/content.vue`)// 'process.env.BUILD_PATH' was set in 'bin/build.js'
  }]
}

export default new Router({
  mode: isDev ? 'history': 'hash',
  routes
});
