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

// import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(slideVerify)

Vue.config.productionTip = false

Vue.prototype.IsHasImg = (imgSrc, defaultSrc, cb) => {
    let obj = new Image();
    obj.src = imgSrc;

    obj.onload = function () {
        cb(imgSrc)
    };

    obj.onerror = function () {
        cb(defaultSrc)
    };

}

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
