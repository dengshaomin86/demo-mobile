<template>
    <div class="tl-con">
        <v-header>
            <h1>canvas</h1>
        </v-header>

        <main>
            <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>
        </main>

    </div>
</template>

<style scoped lang="scss">
    main {
        padding: 15px;
    }
</style>

<script>
    export default {
        name: "v-canvas",
        methods: {
            pageInit() {
                let c = document.getElementById("myCanvas");
                let ctx = c.getContext("2d");

                // 绘制矩形
                ctx.fillStyle = "#FF0000"; // fillStyle属性可以是CSS颜色，渐变，或图案。fillStyle 默认设置是#000000（黑色）
                ctx.fillRect(0, 0, 150, 75); // fillRect(x,y,width,height) 方法定义了矩形当前的填充方式

                // 绘制线条
                ctx.moveTo(0, 0); // moveTo(x,y) 定义线条开始坐标
                ctx.lineTo(200, 100); // lineTo(x,y) 定义线条结束坐标
                ctx.stroke();  // 绘制线条我们必须使用到 "ink" 的方法

                // 绘制圆形
                ctx.beginPath();
                ctx.arc(95, 50, 40, 0, 2 * Math.PI); // arc(x,y,r,start,stop)
                ctx.stroke(); // 绘制圆形时使用了 "ink" 的方法, 比如 stroke() 或者 fill()

                // 绘制文本
                ctx.font = "30px Arial"; // 定义字体
                ctx.fillText("Hello World", 10, 30); // 绘制实心的文本
                ctx.strokeText("Hello World", 10, 80); // 绘制空心的文本

            },
        },
        data() {
            return {}
        },
        mounted() {
        },
        activated() {
            this.pageInit();
        },
    }
</script>
