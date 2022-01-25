import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/index.vue'
import Layout from '@/layout/index.vue'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Layout,
        redirect: '/home',
        meta: {
            title: '资产盘点',
            icon: 'edit'
        },
        children: [
            {
                path: 'home',
                component: Home,
                meta: {
                    title: '资产盘点',
                    icon: 'edit'
                }
            }
        ],
    },
    {
        path: '/about',
        name: 'about',
        component: Layout,
        redirect: '/about/aa',
        meta: {
            title: 'about',
            icon: 'edit'
        },
        children: [
            {
                path: 'aa',
                component: Home,
                meta: {
                    title: 'about2',
                }
            },
            {
                path: 'bb',
                component: Home,
                meta: {
                    title: 'about3',
                }
            },
        ],
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router