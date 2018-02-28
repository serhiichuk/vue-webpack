import Vue from 'vue'
import Pages from '@/pages'

// Import Components
import NavBar from "@/components/NavBar";

const isDevelopment = process.env.NODE_ENV === 'development';

const router = isDevelopment
  ? Pages.getRoutes()
  : false;

const Page = isDevelopment
  ? () => import('@/App')
  : () => import('@/pages/0_main/Main');

const template = `
<div class='container'>
  <nav-bar/>  
  <page/>
</div>`;

Vue.config.productionTip = !isDevelopment;

new Vue({
  el: '#app',
  components: {
    NavBar,
    Page
  },
  router,
  template
});
