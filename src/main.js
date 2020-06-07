import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
import {routes} from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(vueResource);
Vue.http.options.root = 'https://vue-stock-trader-ad55e.firebaseio.com/';
Vue.config.productionTip = false
const router = new VueRouter({
  mode:'history',
  routes,
})
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
