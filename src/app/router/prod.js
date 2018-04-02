import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// 'process.env.BUILD_PATH' was set in 'bin/build.js'
export default new Router({
  routes: [{
    path: '/',
    component: () => import(`@/${process.env.BUILD_PATH}/content.vue`)
  }]
});
