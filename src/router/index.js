import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/views/index.vue'),
            redirect: '/home',
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('@/views/HomView/index.vue')
                }
            ]
        },
    ]
})

export default router
