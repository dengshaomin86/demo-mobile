// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'jquery'
import './jqEx'
import './axios'
import './indexedDB'
import './assets/sass/common.scss'
import "font-awesome/scss/font-awesome.scss"
import slideVerify from '../static/plugin/slide-verify'
import loading from '../static/plugin/d-loading'
import autoTranslate from '../static/plugin/auto-translate'

autoTranslate.initData({
    from: 'auto',
    to: 'jp',
    // webApi:'https://你自己的项目翻译接口地址URL',
    // list: {"例如我是中文咯": "data"}, // 同步加载本地语言包（json对象）。list 和  directory 别同时设置
    directory: '/static/language/', // 异步加载语言包（json文件路径）
    automatic: true, // 开启是否需要百度自动翻译，如果不需要百度自动翻译false即可
});

Vue.use(slideVerify);
Vue.use(loading);
Vue.use(autoTranslate);

// 生产提示
Vue.config.productionTip = false;

Vue.prototype.IsHasImg = (imgSrc, defaultSrc, cb) => {
    let obj = new Image();
    obj.src = imgSrc;

    obj.onload = function () {
        cb(imgSrc)
    };

    obj.onerror = function () {
        cb(defaultSrc)
    };

};


new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
