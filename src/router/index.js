import Vue from 'vue'
import Router from 'vue-router'
// tab
import tab from '@/components/tab/tab'
import index from '@/components/tab/index'
import mine from '@/components/tab/mine'

Vue.use(Router);

let context = require.context("../components", false, /.vue$/);
let defaultRouter = context.keys().map(key => {
  let name = key.substring(key.indexOf("/") + 1, key.lastIndexOf(".vue"));
  return {
    path: key.substring(key.indexOf("/"), key.lastIndexOf(".vue")),
    name,
    component: context(key).default,
    meta: {
      title: name
    }
  }
});

let router = new Router({
  routes: [
    ...defaultRouter,
    {
      path: '/',
      redirect: '/login',
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
      path: '*',
      redirect: '/',
    }
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
