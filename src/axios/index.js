import Vue from 'vue'
import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // console.log('request start', config);

    // loading
    if (config.loading !== false) {
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
    // console.log(arguments);
    reqEnd(arguments[0]);

    return response
}, function (error) {
    // 对响应错误做点什么
    // console.log('error', 'loading end', error);
    // console.log(arguments);
    reqEnd(arguments[0]);

    return Promise.reject(error)
});

function reqEnd(res) {
    // loading
    Vue.prototype.$loading.close();

    // 按钮解禁
    let btn = res.config.btn;
    if (btn) {
        btn.removeAttribute('disabled');
        btn.innerText = btn.getAttribute('data-text');
        btn.style.opacity = '1';
    }
}

window.axios = axios;
