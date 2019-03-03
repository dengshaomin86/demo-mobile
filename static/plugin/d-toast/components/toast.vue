<template>
    <div class="d-toast" v-if="flag">
        <div class="d-toast-con" @click="clickToHide">
            <i class="iconfont" :class="'icon-'+type" v-if="type"></i>
            <div class="d-toast-con-content" v-html="text"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import "./iconfont/iconfont.css";

    .d-toast {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        &-con {
            max-width: 260px;
            padding: 15px;
            background-color: rgba(37, 38, 46, 0.9);
            color: #ccc;
            display: flex;
            align-items: center;
            pointer-events: auto;
            font-size: 0;
            .iconfont {
                font-size: 16px;
                margin-right: 8px;
            }
            &-content {
                max-height: 200px;
                overflow-x: hidden;
                font-size: 14px;
                word-break: break-word;
            }
        }
    }
</style>

<script>
    export default {
        name: "d-toast",
        methods: {
            show() {
                this.flag = true;
                if (this.time) {
                    clearTimeout(this.timeOut);
                    this.timeOut = setTimeout(() => {
                        this.flag = false;
                    }, this.time);
                }
            },

            // 双击关闭
            clickToHide() {
                let duration = new Date().getTime() - this.firstClick;
                this.firstClick = new Date().getTime();
                if (duration < 500) {
                    clearTimeout(this.timeOut);
                    this.flag = false;
                }
            },

        },
        data: function () {
            return {
                flag: false,
                text: '',
                type: 'warn-rt', // 可选类型：correct/error/warn/warn-rt
                time: 2000, // 持续时间
                timeOut: null,
                firstClick: 0,
            }
        },
        mounted() {
        },
    }
</script>
