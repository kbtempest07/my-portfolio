// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { domEvents } from '@/services/domService';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  domEvents.toggleMenu();
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

});
