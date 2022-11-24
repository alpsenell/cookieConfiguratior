import Vue from 'vue';
import App from './App.vue';
import store from './store';
import '@/assets/css/tailwind.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

Vue.config.productionTip = false;

Vue.use(Toast, {
  transition: 'Vue-Toastification__bounce',
  maxToasts: 20,
  newestOnTop: true,
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
