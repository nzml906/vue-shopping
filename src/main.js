import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import store from './store';

import accounting from 'accounting';
import pluralize from 'pluralize';

import '@/assets/shop-custom.scss';

Vue.config.productionTip = false;

Vue.filter('formatMoney', accounting.formatMoney);
Vue.filter('pluralize', pluralize);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
