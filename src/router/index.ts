import { createRouter, createWebHistory, RouteLocation, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        meta: { title: '首页' },
        component: () => import(/* webpackChunkName: "group-home" */'@/views/Home.vue')
    },
    {
        path: '/guide',
        name: 'Guide',
        meta: { title: '视频' },
        component: () => import(/* webpackChunkName: "group-home" */'@/views/Guide.vue'),
        children: [
            {
                path: '',
                name: '快速入门',
                component: () => import('@/packages/guide/doc/doc.md')
            },
            {
                path: 'button',
                name: 'Button 按钮',
                component: () => import('@/packages/button/doc/doc.md')
            },
            {
                path: 'switch',
                name: 'Switch 开关',
                component: () => import('@/packages/switch/doc/doc.md')
            },
        ]
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        meta: { title: '页面未找到' },
        component: () => import(/* webpackChunkName: "group-home" */'@/views/404.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

/**
 * 前置路由守卫
 */
router.beforeEach((to: RouteLocation, from: RouteLocation) => {
    if (to.matched.length !== 0) {
        return true
    } else {
        router.replace({ name: '404', params: { formPath: to.fullPath } })
        return
    }
})

/**
 * 后置路由守卫
 */
router.afterEach(((to: RouteLocation, from: RouteLocation) => {
    document.title = '学习之家' + (to.meta.title ? `-${to.meta.title}` : '');
}))

export { routes }

export default router