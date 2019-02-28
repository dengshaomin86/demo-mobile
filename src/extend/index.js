import Vue from 'vue'

// 判断访问终端
Vue.prototype.browser = {
    versions() {
        let u = navigator.userAgent;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') === -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
            qq: u.match(/\sQQ/i) === "qq" //是否QQ
        }
    },
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

// 加
window.accAdd = (arg1, arg2) => {
    let r1 = 0;
    let r2 = 0;
    try {
        r1 = arg1.toString().split('.')[1].length;
    } catch (e) {
    }
    try {
        r2 = arg2.toString().split('.')[1].length;
    } catch (e) {
    }
    let m = Math.pow(10, Math.max(r1, r2));
    return (Math.round(arg1 * m) + Math.round(arg2 * m)) / m
};

// 减
window.accSub = (arg1, arg2) => {
    return accAdd(arg1, -arg2)
};

// 乘
window.accMul = (arg1, arg2) => {
    let m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split('.')[1].length
    } catch (e) {
    }
    try {
        m += s2.split('.')[1].length
    } catch (e) {
    }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
};

// 除
window.accDiv = (arg1, arg2) => {
    let s1 = arg1.toString();
    let s2 = arg2.toString();
    let m = 0;
    try {
        m = s2.split('.')[1].length;
    } catch (e) {
    }
    try {
        m -= s1.split('.')[1].length;
    } catch (e) {
    }
    return (s1.replace('.', '') - 0) / (s2.replace('.', '') - 0) * Math.pow(10, m)
};

// 科学计数法转换数值
window.traSci = (num) => {
    let str = String(num);
    let arr = str.split('e-');

    if (Number(arr[1]) > 6) {
        return num.toFixed(8);
    } else {
        return num
    }
};


Vue.prototype.accAdd = accAdd;
Vue.prototype.accSub = accSub;
Vue.prototype.accMul = accMul;
Vue.prototype.accDiv = accDiv;
Vue.prototype.traSci = traSci;