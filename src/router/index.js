import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
            meta: {
                title: 'HelloWorld',
            },
        },
        {
            path: '/login',
            name: 'login',
            component: login,
            meta: {
                title: 'login',
            },
        }
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
