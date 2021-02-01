import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import store from './store';

// Globally register all `_base`-prefixed components
import '@/components/base/_globals.ts';

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
