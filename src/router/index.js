import Vue from 'vue'
import Router from 'vue-router'
// tab
import tab from '@/components/tab/tab'
import index from '@/components/tab/index'
import mine from '@/components/tab/mine'

import login from '@/components/login'
import translate from '@/components/translate'
import indexedDB from '@/components/indexedDB'
import share from '@/components/share'
import imgLoad from '@/components/imgLoad'
import BMap from '@/components/BMap'
import transform from '@/components/transform'
import loadingStyle from '@/components/loadingStyle'
import computed from '@/components/computed'
import svg from '@/components/svg'
import ws from '@/components/ws'
import friends from '@/components/friends'
import font from '@/components/font'
import touch from '@/components/touch'
import grid from '@/components/grid'
import canvas from '@/components/canvas'

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
            path: '/tab',
            redirect: '/index',
            name: 'tab',
            component: tab,
            children: [
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
            ]
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
            path: '/BMap',
            name: 'BMap',
            component: BMap,
            meta: {
                title: 'BMap',
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
            path: '/loadingStyle',
            name: 'loadingStyle',
            component: loadingStyle,
            meta: {
                title: 'loadingStyle',
            },
        },
        {
            path: '/computed',
            name: 'computed',
            component: computed,
            meta: {
                title: 'computed',
            },
        },
        {
            path: '/svg',
            name: 'svg',
            component: svg,
            meta: {
                title: 'svg',
            },
        },
        {
            path: '/ws',
            name: 'ws',
            component: ws,
            meta: {
                title: 'ws',
            },
        },
        {
            path: '/friends',
            name: 'friends',
            component: friends,
            meta: {
                title: 'friends',
            },
        },
        {
            path: '/font',
            name: 'font',
            component: font,
            meta: {
                title: 'font',
            },
        },
        {
            path: '/touch',
            name: 'touch',
            component: touch,
            meta: {
                title: 'touch',
            },
        },
        {
            path: '/grid',
            name: 'grid',
            component: grid,
            meta: {
                title: 'grid',
            },
        },
        {
            path: '/canvas',
            name: 'canvas',
            component: canvas,
            meta: {
                title: 'canvas',
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
        document.title = to.meta.title.toUpperCase()
    }

    // 重置transition
    setTimeout(() => {
        Vue.prototype.transition = "slide-into";
    });

    next()
});

Vue.prototype.$back = () => {
    Vue.prototype.transition = "slide-back";
    return router.back()
};

Vue.prototype.transition = "slide-into";

export default router
