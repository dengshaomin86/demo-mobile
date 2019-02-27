<template>
    <div class="d-loading" v-if="flag">
        <i class="fa fa-spinner fa-pulse fa-3x"></i>
    </div>
</template>

<style scoped lang="scss">
    .d-loading {
        width: 50px;
        height: 50px;
        background-color: transparent;
        position: fixed;
        top: 40%;
        left: 50%;
        margin: -25px 0 0 -25px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0;
        .fa {
            font-size: 40px;
            color: #fff;
        }
    }
</style>

<script>
    export default {
        name: "d-loading",
        methods: {
            show() {
                this.flag = true;
            },
        },
        data: function () {
            return {
                flag: false,
            }
        },
        mounted() {
        },
    }
</script>
