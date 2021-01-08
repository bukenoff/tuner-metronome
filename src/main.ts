import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/saga-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

createApp(App)
  .use(PrimeVue)
  .use(store)
  .use(router)
  .mount('#app');
