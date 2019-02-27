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

                obj.onload = () => {
                    this.FSrc = this.src;
                };

                obj.onerror = () => {
                    this.FSrc = this.error || this.defaultSrc;
                };
            },
        },
        props: ['src', 'error'],
        data: function () {
            return {
                FSrc: '',
                defaultSrc: 'static/logo.png',
            }
        },
        mounted() {
            this.judgeImg();
        },
    }
</script>
