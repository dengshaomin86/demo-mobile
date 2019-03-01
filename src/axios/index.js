import Vue from 'vue'
import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    // loading
    if (config.loading !== false) {
        // console.log('loading start', config);
        Vue.prototype.$loading.show();
    }

    // 按钮禁用
    let btn = config.btn;
    if (btn) {
        btn.setAttribute('disabled', true);
        btn.setAttribute('data-text', btn.innerText);
        btn.innerText = btn.text || 'loading';
        btn.style.opacity = '0.7';
    }

    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // console.log('loading end', response);
    Vue.prototype.$loading.close();

    // 按钮解禁
    let btn = response.config.btn;
    if (btn) {
        btn.removeAttribute('disabled');
        btn.innerText = btn.getAttribute('data-text');
        btn.style.opacity = '1';
    }

    return response
}, function (error) {
    // 对响应错误做点什么
    console.log(arguments);
    console.log('error', 'loading end', error);
    Vue.prototype.$loading.close();
    return Promise.reject(error)
});

function reqEnd(res) {

}

window.axios = axios;
