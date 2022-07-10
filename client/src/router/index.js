import {createRouter, createWebHistory} from 'vue-router'
import Menu from '@/pages/menu-component.vue'

const routes = [
    {path: '/', component: Menu}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router