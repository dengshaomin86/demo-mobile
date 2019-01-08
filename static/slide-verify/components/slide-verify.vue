<template>
    <div class="code-k-div" v-if="show" @touchend="end" @mouseup="end">
        <div class="code_bg" @click.stop="close">
            <div class="code-con" @click.stop>
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
                    <div class="code-btn-img code-btn-m" :class="{'active':isDown, 'error':codeVal === 0}" @touchstart="start" @touchmove="move" v-if="isMobile"></div>
                    <div class="code-btn-img code-btn-m" :class="{'active':isDown, 'error':codeVal === 0}" @mousedown="start" @mousemove="move" v-else></div>
                    <span>按住滑块，拖动完成上方拼图</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
                    this.checkCode(position);
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

            checkCode(position) {
                setTimeout(() => {
                    if (position % 2) {
                        this.checkCodeResult(1, "验证通过");
                    } else {
                        this.checkCodeResult(0, "验证不通过");
                    }
                }, 500)
            },

            checkCodeResult(i, txt) {
                this.codeVal = i;
                this.codeTips = txt;
                this.$emit('cb', i);
                setTimeout(() => {
                    if (i) {
                        this.close()
                    } else {
                        this.reset()
                    }
                }, 1000);
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
                console.log('close');
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