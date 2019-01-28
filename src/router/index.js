import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import mine from '@/components/mine'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            name: 'login',
            component: login,
            meta: {
                title: 'login',
            },
        },
        {
            path: '/index',
            name: 'index',
            component: index,
            meta: {
                title: 'index',
            },
        },
        {
            path: '/mine',
            name: 'mine',
            component: mine,
            meta: {
                title: 'mine',
            },
        },
        {
            path: '*',
            redirect: '/',
        },
    ]
});

router.beforeEach((to, from, next) => {
    // 如果设置标题，拦截后设置标题
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
});

export default router
