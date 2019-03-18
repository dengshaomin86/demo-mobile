// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'jquery'
import './extend'
import './axios'
import './store'
import './indexedDB'
import './components/section'
import './assets/sass/common.scss'
import '../static/plugin/d-slide'
import '../static/plugin/d-lazy-load'
import "./assets/fontawesome-free-5.7.2-web/css/all.css"
import "font-awesome/scss/font-awesome.scss"
import slideVerify from '../static/plugin/slide-verify'
import loading from '../static/plugin/d-loading'
import toast from '../static/plugin/d-toast'
import autoTranslate from '../static/plugin/auto-translate'

autoTranslate.initData({
    from: 'auto',
    to: 'jp',
    // webApi:'https://', // 你自己的项目翻译接口地址URL
    // list: {"例如我是中文咯": "data"}, // 同步加载本地语言包（json对象）。list 和  directory 别同时设置
    directory: '/static/language/', // 异步加载语言包（json文件路径）
    automatic: true, // 开启是否需要百度自动翻译，如果不需要百度自动翻译false即可
});

Vue.use(slideVerify);
Vue.use(loading);
Vue.use(toast);
Vue.use(autoTranslate);

/**
 * process.env.NODE_ENV
 * dev: development
 * build: production
 */

// 生产提示
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
