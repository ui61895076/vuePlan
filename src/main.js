// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import vueRouter from 'vue-router';
import routes from './router/routes.js';
Vue.use(vueRouter);
Vue.config.productionTip = false
const router=new vueRouter(routes)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
