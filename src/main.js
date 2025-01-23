import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import './sass/style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import router from './routes/route';
import { createPinia } from 'pinia';

// createApp(App).use(router).mount('#app');

const app = createApp (App);
const pinai = createPinia();

app.use(router);
app.use(pinai);
app.mount('#app')