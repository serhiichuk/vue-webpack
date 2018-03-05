import Vue from 'vue'
import Router from 'vue-router'
import {structure} from '@/structure.json'

Vue.use(Router);

// export default {
//   development() {
//     const files = require.context('@/pages', true, /\.vue$/);
//     let routes = [{path: '/', component: () => import ('@/components/development-page')}];
//
//     files.keys().forEach(key => {
//       routes.push({
//         path: `/${files(key).default.__file.split('\\').pop().replace(/\.vue$/, '')}`,
//         component: files(key).default
//       });
//     });
//
//     return new Router({
//       mode: 'history',
//       routes: routes
//     })
//   },
//
//   production() {
//     return new Router({
//       routes: [{
//         path: '/',
//         component: () => import(`@/${process.env.PAGE_PATH}`)// 'process.env.PAGE_PATH' was set in 'bin/build.js'
//       }]
//     })
//   }
// }

let routes = [];

if (process.env.NODE_ENV === 'development') {
  for (let flow in structure) {
    if (structure[flow].slides) {
      structure[flow].slides.forEach(slide => {
        routes.push({
          path: slide.path,
          component: () => import(`${slide.component}`)
        })
      });
    } else {
      routes.push({
        path: structure[flow].path,
        component: () => import(`${structure[flow].component}`)
      })
    }
  }
} else {
  routes = [{
    path: '/',
    component: () => import(`@/${process.env.PAGE_PATH}`)// 'process.env.PAGE_PATH' was set in 'bin/build.js'
  }]
}

export default new Router({
      mode: 'history',
      routes
});
