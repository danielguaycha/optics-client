import Vue from 'vue';
import App from './App.vue';
import router from './modules/routes';
import vuetify from "./plugins/vuetify";
import store from './modules/store';
import './plugins/toasted';
import './plugins/axios';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
