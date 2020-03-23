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

/**
 * 防抖动：限制下次函数调用之前必须等待的时间间隔
 * 将几次操作合并为一此操作进行。原理是维护一个计时器，规定在delay时间后触发函数，但是在delay时间内再次触发的话，就会取消之前的计时器而重新设置。
 * 这样一来，只有最后一次操作能被触发。
 * @param fn
 * @param delay
 * @param immediate
 * @returns {Function}
 */
window.debounce = (fn, delay, immediate) => {
  // 维护一个 timer
  let timer = null;

  return function () {
    // 通过 ‘this’ 和 ‘arguments’ 获取函数的作用域和变量
    let context = this;
    let args = arguments;

    if (timer) clearTimeout(timer);
    if (immediate) {
      //根据距离上次触发操作的时间是否到达delay来决定是否要现在执行函数
      let doNow = !timer;
      //每一次都重新设置timer，就是要保证每一次执行的至少delay秒后才可以执行
      timer = setTimeout(function () {
        timer = null;
      }, delay);
      //立即执行
      if (doNow) {
        fn.apply(context, args);
      }
    } else {
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    }

  }
};

/**
 * 节流：使得一定时间内只触发一次函数。
 * 它和防抖动最大的区别就是，节流函数不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，
 * 而防抖动只是在最后一次事件后才触发一次函数
 * @param fn
 * @param delay
 * @returns {Function}
 */
window.throttle = (fn, delay) => {
  let prev = Date.now();
  return function () {
    let context = this;
    let args = arguments;
    let now = Date.now();
    if (now - prev >= delay) {
      fn.apply(context, args);
      prev = Date.now();
    }
  }
};

/**
 * 节流：定时器实现
 * @param fn
 * @param delay
 * @returns {Function}
 */
window.throttle2 = (fn, delay) => {
  let timer = null;

  return function () {
    let context = this;
    let args = arguments;

    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(context, args);
        timer = null;
      }, delay);
    }
  }
};


Vue.prototype.accAdd = accAdd;
Vue.prototype.accSub = accSub;
Vue.prototype.accMul = accMul;
Vue.prototype.accDiv = accDiv;
Vue.prototype.traSci = traSci;
