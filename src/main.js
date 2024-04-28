import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // import your router configuration
import './axios.js';

import store from './vuex'
const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');


