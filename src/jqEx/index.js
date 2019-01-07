(function ($) {

    /*
     * --------------------------- 对象方法 -------------------------
     * 调用方式： $("#submitBtn").btnLoading()
     */

    /**
     * 按钮加载前
     * $("#submit").btnLoading();
     */
    $.fn.btnLoading = function () {
        var isABtn = false;
        var tagName = this[0].tagName;
        if (tagName
            && (tagName.toLowerCase() == 'a' || tagName.toLowerCase() == 'button' || tagName.toLowerCase() == 'div')) {
            isABtn = true;
        }
        window.AppCurrClickBtnText = isABtn ? this.text() : this.val();
        this.attr("disabled", true).css("opacity", ".65");
        var tip = "Loading...";
        if (isABtn) {
            this.text(tip);
        } else {
            this.val(tip);
        }
    };

    /**
     * 按钮加载完成
     */
    $.fn.btnLoadOver = function () {
        var isABtn = false;
        var tagName = this[0].tagName;
        if (tagName
            && (tagName.toLowerCase() == 'a' || tagName.toLowerCase() == 'button' || tagName.toLowerCase() == 'div')) {
            isABtn = true;
        }

        this.attr("disabled", false).css("opacity", "1");
        var tip = window.AppCurrClickBtnText;
        if (isABtn) {
            this.text(tip);
        } else {
            this.val(tip);
        }
    };

    /**
     * 按钮禁用
     */
    $.fn.btnDisable = function () {
        this.attr("disabled", true).css("opacity", ".65");
    };


    /**
     * 获取验证码
     */
    $.fn.getVerifyCode = function () {
        var self = this;
        var initText = self[0].innerText;
        if (initText.match(".*\\d+.*")) {
            return
        }
        self.css({"opacity": "0.8", "pointer-events": "none"});
        var n = 60;
        var to;
        dt();

        function dt() {
            self[0].innerText = n;
            n--;
            if (n > -1) {
                to = setTimeout(function () {
                    dt();
                }, 1000)
            } else {
                self[0].innerText = initText;
                self.css({"opacity": "1", "pointer-events": "auto"});
                clearTimeout(to);
            }
        }
    };

    /*
     * --------------------------- 静态方法 -------------------------
     * 调用方式： $.String.isEmpty()
     */

    $.extend({
        /**
         * 例子：$.ajaxJson
         */
        ajaxJson: function (url, data, cb) {
            data = data || {};
            cb = cb || {};
            return $.ajax({
                url: url,
                type: "get",
                data: data,
                dataType: "JSONP",
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                cache: false,
                success: function (result) {
                    cb['yes'];
                },
                error: function (xmlHttpRequest, textStatus, errorThrown) {
                },
                beforeSend: function () {
                    cb['before']
                },
                complete: function (result) {
                    cb['over']
                }
            });

        },

        /*获取Url值*/
        getUrlValue: function (info) {
            var def;
            if (typeof(arguments[1]) == "undefined") {
                def = '';
            } else {
                def = arguments[1];
            }

            var url = window.location.href;
            var getSignInfo = url.substring(url.indexOf("?"));
            var param = getSignInfo;

            if (param == '') {
                return def;
            }

            var reg = new RegExp("(^|&)" + info + "=([^&]*)(&|$)", "i");
            var r = param.substr(1).match(reg);
            if (r == null) {
                return def;
            }
            return (r[2]);
        },

        /*判断访问终端*/
        browserVersions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
                qq: u.match(/\sQQ/i) == "qq" //是否QQ
            };
        },

    });
})($);

/*常用方法*/

/*相乘*/
function accMul(arg1, arg2) {

    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split('.')[1].length
    } catch (e) {
    }
    try {
        m += s2.split('.')[1].length
    } catch (e) {
    }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)

}

/*除*/
function accDiv(arg1, arg2) {
    var s1 = arg1.toString();
    var s2 = arg2.toString();
    var m = 0;
    try {
        m = s2.split('.')[1].length;
    } catch (e) {
    }
    try {
        m -= s1.split('.')[1].length;
    } catch (e) {
    }
    return (s1.replace('.', '') - 0) / (s2.replace('.', '') - 0) * Math.pow(10, m);
}

/*加*/
function accAdd(arg1, arg2) {
    var r1 = 0;
    var r2 = 0;
    try {
        r1 = arg1.toString().split('.')[1].length;
    } catch (e) {
    }
    try {
        r2 = arg2.toString().split('.')[1].length;
    } catch (e) {
    }
    var m = Math.pow(10, Math.max(r1, r2));
    return (Math.round(arg1 * m) + Math.round(arg2 * m)) / m;
}

/*减*/
function accSub(arg1, arg2) {
    return accAdd(arg1, -arg2);
}

/*截取小数位数长度*/
function limitLen(n, l) {

    if (!n) {
        return
    }
    var number = n.toString();
    var str1 = number.split('.')[0];
    var str2 = number.split('.')[1];
    var final = '';

    if (number.indexOf('.') != -1) {
        if (typeof (str2) == 'undefined' || str2 == '') {
            final = str1 + '.';
        } else {

            if (l) {
                str2 = str2.substring(0, l);
            }

            final = String(str1) + '.' + String(str2);
        }
    } else {
        final = str1;
    }

    if (!final) {
        final = ''
    }
    return final

}

/*保留小数*/
function fixedNum(n, l) {

    var final = Number(n);

    if (typeof (final) == 'number') {
        final = final.toFixed(l)
    } else {
        final = '-'
    }

    return final

}

/*科学计数法转换数值*/
function scientificToNumber(num) {

    var str = String(num);
    var arr = str.split('e-');

    if (Number(arr[1]) > 6) {
        return num.toFixed(8);
    } else {
        return num
    }

}