import { createApp } from 'vue'
import App from './App.vue'
import CUI from './packages/index'

const app = createApp(App)

app.use(CUI)
app.mount('#app')
