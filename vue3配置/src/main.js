import { createApp } from 'vue'

import router from './router/index'
import store from './store/index'
import App from './app.vue'


createApp(App).use(router).use(store).mount('#app')