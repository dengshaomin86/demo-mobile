import Vue from 'vue'
import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (config.loading !== false) {
        // console.log('loading start', config);
        Vue.prototype.$loading.show();
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // console.log('loading end', response);
    Vue.prototype.$loading.close();
    return response;
}, function (error) {
    // 对响应错误做点什么
    console.log('error', 'loading end', error);
    Vue.prototype.$loading.close();
    return Promise.reject(error);
});

window.axios = axios;
