<template>
    <div class="code-k-div" v-if="show">
        <div class="code_bg"></div>
        <div class="code-con">
            <div class="code-img">
                <div class="code-img-con">
                    <div class="code-mask"><img src="./front.png"></div>
                    <img src="./back.png"></div>
                <div class="code-push">
                    <i class="icon-login-bg icon-w-25 icon-push">刷新</i>
                    <span class="code-tip" :class="codeVal===1?'code-tip-green':'code-tip-red'" v-html="codeTips"></span>
                </div>
            </div>
            <div class="code-btn">
                <div class="code-btn-img code-btn-m" :class="{'active':isDown}" @mousedown="mousedown" @mouseup="mouseup" @mousemove="mousemove"></div>
                <span>按住滑块，拖动完成上方拼图</span>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from '../libs/jquery.min'

    export default {
        name: "slide-verify",
        methods: {
            //按钮拖动事件
            mousedown(e) {
                //清除提示信息
                this.codeTips = '';
                let event = e || window.event;
                this.mX = event.pageX;
                let btn = $('.code-btn');
                this.dX = btn.offset().left;
                this.dY = btn.offset().top;
                this.isDown = true;  // 鼠标拖拽启
            },

            //鼠标点击松手事件
            mouseup(e) {
                let lastX = $('.code-mask').offset().left - this.dX - 1;
                this.isDown = false;  // 鼠标拖拽停止
                this.checkCode(lastX);
            },

            // 滑动事件
            mousemove(e) {
                let event = e || window.event;
                let x = event.pageX;  // 鼠标滑动时的X轴
                if (this.isDown) {
                    if (x > (this.dX + 30) && x < this.dX + $(".code-btn").width() - 20) {
                        $('.code-btn-img').css({"left": (x - this.dX - 20) + "px"});  // div动态位置赋值
                        $(".code-mask").css({"left": (x - this.dX - 30) + "px"});
                    }
                }
            },

            // 验证数据
            checkCode(position) {
                console.log(position);
                //模拟ajax
                setTimeout(() => {
                    if (position % 2) {
                        this.checkCodeResult(1, "验证通过");
                    } else {
                        $(".code-btn-img").addClass("error");
                        this.checkCodeResult(0, "验证不通过");
                        this.reset();
                    }
                }, 500)
            },

            // 验证结果
            checkCodeResult(i, txt) {
                this.codeVal = i;
                this.codeTips = txt;
            },

            // 滑块重置
            reset() {
                $(".code-mask").animate({"left": "0px"}, 200);
                $(".code-btn-img").removeClass("error").animate({"left": "10px"}, 200);
            },

        },
        props: {
            show: {
                type: Boolean,
                default: false
            },
        },
        data: function () {
            return {
                codeTips: '',
                codeVal: '',
                mX: 0,  // 定义鼠标X轴Y轴
                mY: 0,
                dX: 0,  // 定义滑动区域左、上位置
                dY: 0,
                isDown: false,  // mousedown标记
            }
        },
        mounted() {
            //ie的事件监听，拖拽div时禁止选中内容，firefox与chrome已在css中设置过-moz-user-select: none; -webkit-user-select: none;
            if (document.attachEvent) {
                $(".code-btn-img").attachEvent('onselectstart', function () {
                    return false;
                });
            }
        },
    }
</script>

<style scoped lang="scss">
    .code_bg {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .5);
        z-index: 99;
    }

    .icon-login-bg {
        background-image: url(loginicon.png);
        background-repeat: no-repeat;
    }

    .code-con {
        position: absolute;
        top: 100px;
        width: 320px;
        left: 50%;
        margin-left: -160px;
        background-color: #fff;
        z-index: 100;
        -moz-user-select: none;
        -webkit-user-select: none;
    }

    .code-img {
        margin: 5px 5px;
        padding: 5px 5px;
        background-color: #f5f6f7;
    }

    .code-img img {
        display: block;
    }

    .icon-w-25 {
        display: inline-block;
        width: 25px;
        height: 25px;
        text-indent: -9999px;
    }

    .icon-push {
        cursor: pointer;
        background-position: -149px -95px;
    }

    .code-push {
        height: 25px;
    }

    .code-btn {
        position: relative;
        height: 30px;
        text-align: center;
        color: #999;
        margin: 10px 10px;
        box-sizing: border-box;
        background-color: #f5f6f7;
        border-radius: 15px;
        border: 1px solid #e1e1e1;
    }

    .code-btn-m {
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #f5f6f7;
        border: 1px solid #e1e1e1;
        z-index: 5;
        top: -8px;
        left: 10px;
        box-shadow: 0 0 3px #ccc;
        cursor: pointer;
        background-position: -63px 10px;
    }

    .code-btn-img {
        background-image: url(arrow.png);
        background-repeat: no-repeat;
        box-shadow: 0 0 3px #ccc;
    }

    .code-btn-img.active {
        background-position: -134px 10px;
        box-shadow: 0 0 8px #666;
    }

    .code-btn-img.error {
        background-position: 8px 10px;
    }

    .code-img-con {
        position: relative;
    }

    .code-mask {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
    }

    .code-tip {
        padding-left: 10px;
        font-size: 12px;
        color: #999;
    }

    .code-tip-red {
        color: red;
    }

    .code-tip-green {
        color: green;
    }
</style>