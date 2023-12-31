import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PersonDetails from '@/components/PersonDetails.vue';

const app = createApp(App)

app.component('PersonDetails', PersonDetails);

app.use(router)

app.mount('#app')
