import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia();
function outPlugin(){
    return {
        secret:"Dummy secret",
    }
}
app.use(outPlugin)
app.use(pinia)
app.use(router)

app.mount('#app')
