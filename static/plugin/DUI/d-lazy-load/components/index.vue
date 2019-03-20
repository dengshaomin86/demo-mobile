<template>
    <div :style="'background-image: url('+FSrc+')'" v-if="FSrc"></div>
    <div v-else></div>
</template>

<style scoped lang="scss">
    div {
        width: 100%;
        height: 100%;
        background: no-repeat center center;
        background-size: cover;
    }
</style>

<script>
    export default {
        name: "d-lazy-load",
        methods: {
            judgeImg() {
                let obj = new Image();
                obj.src = this.src;

                // 图片被加载完成后所触发的事件（需要图片的加载完全，没有图片也就没有onload）
                obj.onload = () => {
                    this.FSrc = this.src;
                };

                // 加载对象及属性完成（无论src是否有值，成功与否，只要获取到image，就可以执行）
                if (obj.complete) {
                    // console.log('complete');
                }

                // 加载时是否显示默认图
                if (this.showDefault !== false && this.showDefaultFlag) {
                    this.FSrc = this.error || this.defaultSrc;
                } else {
                    obj.onerror = () => {
                        this.FSrc = this.error || this.defaultSrc;
                    };
                }
            },
        },
        props: ['src', 'error', 'showDefault'],
        data: function () {
            return {
                FSrc: '',
                defaultSrc: 'static/logo.png',
                showDefaultFlag: true,
            }
        },
        mounted() {
            this.judgeImg();
        },
        watch: {
            src: function (n, o) {
                if (n) {
                    this.judgeImg();
                }
            }
        }
    }
</script>
