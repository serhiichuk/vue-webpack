// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Pages from '@/pages'
import NavBar from "@/components/NavBar";

const isDevEnv = process.env.NODE_ENV === 'development';

const router = isDevEnv
  ? Pages.getRoutes()
  : false;

const components = {
  Page: isDevEnv
    ? () => import('@/App')
    : () => import('@/pages/0_main/Main'),
  NavBar
};

const template = isDevEnv
  ?
`<div class='container'>
  <nav-bar/>  
  <page/>
</div>`
  :
`<div class='container'>
    <nav-bar/>  
    <page/>
</div>`;

Vue.config.productionTip = !isDevEnv;

new Vue({
  el: '#app',
  router,
  components,
  template
});
