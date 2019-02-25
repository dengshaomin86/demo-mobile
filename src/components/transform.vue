<template>
    <div class="tl-con">
        <h1>transform</h1>

        <div class="card">
            <div class="card1"></div>
            <div class="card2"></div>
        </div>

        <div class="cube-box">
            <div class="cube">
                <div class="front"></div>
                <div class="behind"></div>
                <div class="top"></div>
                <div class="left"></div>
                <div class="right"></div>
                <div class="bottom"></div>
            </div>
        </div>

        <router-link to="/mine">mine</router-link>

    </div>
</template>

<!--原理-->
<!--
css3 3d 顾名思义是由两个2d名片组成的 但不是让你建立连个2d啊！

一个div要想又3d效果那就得在最外层建立一个3d平面.

transform-style: preserve-3d; 3d空间

perspective: 800px; 它被成为视距或者紧身.

但是要是相对与body是不是也得给div上一层也得加一个紧身呢！

有了3d效果是不是的有一个像眼镜一样的东西呢 在不同的地方显示的效果也是不一样的

perspective-origin:50% 50%; 这就是你的眼镜啦 位置不同效果也就不用了

这样我们的3d空间就已经建立成了。

3d无非就是通过X Y Z轴来进行操作
rotateX/rotateY/rotateZ可以帮助理解三维坐标

translateZ则可以帮你理解透视位置。

transform-origin我们成为基点 在水平方向改变观看div的位置

scale 缩放 rotate 旋转 translate移动 skew倾斜 通过这些来进行3d效果
-->

<style scoped lang="scss">
    .tl-con {
        /*transform-style: preserve-3d; // 3d空间*/
        /*perspective: 800px; // 它被成为视距或者紧身*/
        /*perspective-origin: 50% 50%; // 这就是你的眼镜啦 位置不同效果也就不用了*/
    }

    .card {
        width: 300px;
        height: 200px;
        position: relative;
        transform-style: preserve-3d; // 3d空间
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

    .cube-box {
        perspective: 800px;
        transform-style: preserve-3d;
        transition: 5s infinite;
        transform: rotateX(0deg) rotateY(0deg);
        margin: 200px;

        .cube {
            width: 200px;
            height: 200px;
            position: relative;
            transform-style: preserve-3d;
            transition: 50s;
            transform: rotateX(0deg) rotateY(0deg);
            &:hover {
                transform: rotateX(3600deg) rotateY(3600deg);
            }
            > div {
                width: inherit;
                height: inherit;
                position: absolute;
                background: url("../assets/images/transform/card1.jpg") no-repeat center center;
                background-size: cover;
                &.left {
                    @include cubeUrl(1);
                    transform: rotateY(90deg) translateZ(-100px);
                }
                &.right {
                    @include cubeUrl(2);
                    transform: rotateY(90deg) translateZ(100px);
                }
                &.top {
                    @include cubeUrl(3);
                    transform: rotateX(90deg) translateZ(100px) rotateZ(360deg);
                }
                &.bottom {
                    @include cubeUrl(4);
                    transform: rotateX(90deg) translateZ(-100px) rotateZ(180deg);
                }
                &.behind {
                    @include cubeUrl(5);
                    transform: rotateX(0deg) translateZ(-100px) rotateZ(180deg);
                }
                &.front {
                    @include cubeUrl(6);
                    transform: rotateX(0deg) translateZ(100px);
                }
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
