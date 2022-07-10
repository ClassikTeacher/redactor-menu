import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import components from '@/components/UI' 
import store from '@/store/index.js'




const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});


app
    .use(router)
    .use(store)
    .mount('#app')
    