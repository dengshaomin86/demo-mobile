<template>
    <div class="tl-con">
        <h1>transform</h1>

        <div class="card">
            <div class="card1"></div>
            <div class="card2"></div>
        </div>

        <router-link to="/mine">mine</router-link>

    </div>
</template>

<style scoped lang="scss">
    .card {
        width: 300px;
        height: 200px;
        position: relative;
        transform-style: preserve-3d;
        transition: 1s;
        &:hover {
            transform: rotateY(180deg); //当鼠标移动到上面时让他旋转180°
        }
        > div {
            width: inherit;
            height: inherit;
            position: absolute;
            backface-visibility: hidden; // 设置后面的可适度为看不见
            &.card1 {
                background: url("../assets/images/transform/card1.jpg") no-repeat center center;
                background-size: cover;
            }
            &.card2 {
                background: url("../assets/images/transform/card2.jpg") no-repeat center center;
                background-size: cover;
                transform: rotateY(180deg);
            }
        }
    }

</style>

<script>
    export default {
        name: "transform",
        methods: {},
        data() {
            return {}
        },
        mounted() {
        },
        activated() {
        },
    }
</script>
