import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import axios from 'axios'

import './index.css'

axios.defaults.baseURL = "http://127.0.0.1:8000"

createApp(App).use(store).use(router, axios).mount('#app')
