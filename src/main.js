import Vue from 'vue'
import Router from '../bin/router'
import NavBar from '@/layouts/NavBar'

const isDevelopment = process.env.NODE_ENV === 'development';

const router = isDevelopment
  ? Router.getRoutes()
  : false;

const components = {
  BuildPage: () => import(`@/${process.env.PAGE_PATH}`),
  NavBar
};

// language=HTML
const template =
  `<div class='container'>
  ${isDevelopment ? '<router-view/>' : '<build-page/>'}
  <nav-bar/>
</div>`;

Vue.config.productionTip = !isDevelopment;

new Vue({
  el: '#app',
  router,
  components,
  template
});
