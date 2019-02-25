import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import mine from '@/components/mine'
import translate from '@/components/translate'
import indexedDB from '@/components/indexedDB'
import share from '@/components/share'
import imgLoad from '@/components/imgLoad'
import baiduMap from '@/components/baiduMap'
import transform from '@/components/transform'

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
            path: '/translate',
            name: 'translate',
            component: translate,
            meta: {
                title: 'translate',
            },
        },
        {
            path: '/indexedDB',
            name: 'indexedDB',
            component: indexedDB,
            meta: {
                title: 'indexedDB',
            },
        },
        {
            path: '/share',
            name: 'share',
            component: share,
            meta: {
                title: 'share',
            },
        },
        {
            path: '/imgLoad',
            name: 'imgLoad',
            component: imgLoad,
            meta: {
                title: 'imgLoad',
            },
        },
        {
            path: '/baiduMap',
            name: 'baiduMap',
            component: baiduMap,
            meta: {
                title: 'baiduMap',
            },
        },
        {
            path: '/transform',
            name: 'transform',
            component: transform,
            meta: {
                title: 'transform',
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

Vue.prototype.$back = () => {
    return router.back()
};

export default router
