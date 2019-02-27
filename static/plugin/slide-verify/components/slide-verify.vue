<template>
    <div class="slide-verify" v-if="show" @touchend="end" @mouseup="end">
        <div class="code_bg" v-show="showMain" @click.stop="close">
            <div class="code-con" @click.stop>
                <div class="code-img">
                    <div class="code-img-con">
                        <div class="code-mask">
                            <img src="./front.png">
                        </div>
                        <img src="./back.png">
                    </div>
                    <div class="code-push">
                        <i class="iconfont" :class="{'icon-shuaxin':codeVal==='', 'icon-icon-check-solid':codeVal===true, 'icon-jinggao':codeVal===false}"></i>
                        <span class="code-tip" v-html="codeTips"></span>
                    </div>
                </div>
                <div class="code-btn">
                    <div class="code-btn-img code-btn-m" :class="{'active':isDown, 'error':codeVal === 0}" @touchstart="start" @touchmove="move" v-if="isMobile"></div>
                    <div class="code-btn-img code-btn-m" :class="{'active':isDown, 'error':codeVal === 0}" @mousedown="start" @mousemove="move" v-else></div>
                    <span>按住滑块，拖动完成上方拼图</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {slideVerifyCb} from '../index'

    export default {
        name: "slide-verify",
        methods: {
            start() {
                this.codeTips = '';
                this.codeVal = '';
                let btn = document.getElementsByClassName('code-btn')[0];
                let box = document.getElementsByClassName('code-con')[0];
                this.dX = btn.offsetLeft + box.offsetLeft;
                this.isDown = true;
            },

            end() {
                if (this.isDown) {
                    let slideImg = document.getElementsByClassName('code-mask')[0];
                    let position = slideImg.offsetLeft;
                    this.check(position);
                }
                this.isDown = false;
            },

            move(e) {
                let x = this.isMobile ? e.changedTouches[0].pageX : e.pageX;
                let btn = document.getElementsByClassName('code-btn')[0];
                let btnImg = document.getElementsByClassName('code-btn-img')[0];
                let slideImg = document.getElementsByClassName('code-mask')[0];
                if (this.isDown) {
                    if (x > (this.dX + 30) && x < this.dX + btn.clientWidth - 20) {
                        let dX = (x - this.dX - 20) + 'px';
                        btnImg.style.left = dX;
                        slideImg.style.left = dX;
                    }
                }
            },

            check(position) {
                console.log(position);
                if (position > 200 && position < 220) {
                    this.codeVal = true;
                    this.codeTips = "验证成功";
                    setTimeout(() => {
                        this.close()
                    }, 1000);
                } else {
                    this.codeVal = false;
                    this.codeTips = "验证失败";
                    setTimeout(() => {
                        this.reset()
                    }, 1000);
                }
            },

            getInfo() {
                setTimeout(() => {
                    if (1) {
                        this.reset();
                        this.$nextTick(() => {
                            this.showMain = true;
                        });
                    } else {
                        this.close();
                    }
                })
            },

            reset() {
                this.codeVal = '';
                this.codeTips = '';
                let btnImg = document.getElementsByClassName('code-btn-img')[0];
                let slideImg = document.getElementsByClassName('code-mask')[0];
                btnImg.style.left = '0';
                slideImg.style.left = '0';
            },

            close() {
                this.show = false;
                this.showMain = false;
                slideVerifyCb(this.codeVal);
            },

            init() {
                this.show = true;
                this.getInfo();
            },

        },
        data: function () {
            return {
                show: false,
                showMain: false,
                isMobile: true,
                codeTips: '',
                codeVal: '',
                dX: 0,
                isDown: false,
            }
        },
        mounted() {
        },
    }
</script>

<style scoped lang="scss">
    @import "./iconfont/iconfont.css";

    .code_bg {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .5);
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .code-con {
        width: 320px;
        margin-bottom: 200px;
        background-color: #fff;
        z-index: 100;
        user-select: none;

        .code-img {
            margin: 10px;
            background-color: #f5f6f7;

            img {
                display: block;
            }

            .code-img-con {
                position: relative;

                .code-mask {
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 10;
                }
            }

            .code-push {
                height: 30px;
                padding: 0 3px;
                display: flex;
                align-items: center;

                .iconfont {
                    font-size: 16px;
                    &.icon-shuaxin {
                        color: #666;
                        cursor: pointer;
                        font-weight: bold;
                    }
                    &.icon-icon-check-solid {
                        color: green;
                        & + .code-tip {
                            color: green;
                        }
                    }
                    &.icon-jinggao {
                        color: red;
                        & + .code-tip {
                            color: red;
                        }
                    }
                }

                .code-tip {
                    padding-left: 5px;
                    font-size: 12px;
                    color: #999;
                }
            }
        }
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
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            font-size: 14px;
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

            &.code-btn-img {
                background-image: url(arrow.png);
                background-repeat: no-repeat;
                box-shadow: 0 0 3px #ccc;
                &.active {
                    background-position: -134px 10px;
                    box-shadow: 0 0 8px #666;
                }
                &.error {
                    background-position: 8px 10px;
                }
            }
        }
    }

</style>