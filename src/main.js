/*
Path: src/main.js
*/

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

// Import Bootstrap and its CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { BootstrapVue3 } from 'bootstrap-vue-3'

// Import Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
app.use(createPinia())
app.use(BootstrapVue3)
app.mount('#app')
