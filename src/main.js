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

// slide-verify
import slideVerify from '../static/slide-verify/slide-verify'

Vue.use(slideVerify);

// import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import 'font-awesome/css/font-awesome.min.css'

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


// 自动翻译
import language from 'jj_language'

language.initData({
    from: 'auto',
    to: 'jp',
    //list:{'例如我是中文咯':'data'}, // 同步加载本地语言包; list 和  directory 别同时设置
    //directory:'/language/', // 异步加载语言包
    automatic: true, // 开启是否需要百度自动翻译，如果不需要百度自动翻译false即可
});

Vue.use(language);

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
