import Vue from 'vue'
import Router from 'vue-router'
import {structure} from '@/clm.config'

Vue.use(Router);

const routes = [{path: '/', component: () => import ('@/components/development-page')}];

structure.forEach(slide => {
  routes.push({
    path: `/${slide.id}`,
    component: () => import(`@/${slide.path}/content.vue`)
  })
});

export default new Router({
  routes
});
