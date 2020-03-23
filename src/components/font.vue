<template>
    <div class="tl-con">
        <v-header>
            <h1>font</h1>
        </v-header>

        <main>
            <div contenteditable="true" class="text effect01">立体字效果</div>
            <div contenteditable="true" class="text effect02">长尾效果</div>
            <div contenteditable="true" class="text effect03">内阴影</div>
            <div contenteditable="true" class="text effect04">斜纹字描边效果</div>
            <div data-text="文字条纹动画" class="text effect05">文字条纹动画</div>
            <div contenteditable="true" class="text effect06">描边文字</div>
            <div contenteditable="true" class="text effect07">遮罩文字</div>
            <div class="text effect08">
                <h1>3D炫光效果</h1>
                <h1>3D炫光效果</h1>
                <h1>3D炫光效果</h1>
                <h1>3D炫光效果</h1>
                <h1>3D炫光效果</h1>
                <h1>3D炫光效果</h1>
                <h1>3D炫光效果</h1>
                <h1>3D炫光效果</h1>
            </div>

            <div class="text effect09">凹凸效果</div>

            <div contenteditable="true" class="text effect10">
                <span class="char1">前</span>
                <span class="char2">端</span>
                <span class="char3">开</span>
                <span class="char4">发</span>
                <span class="char5">w</span>
                <span class="char6">h</span>
                <span class="char7">q</span>
                <span class="char8">e</span>
                <span class="char9">t</span>
            </div>

            <div contenteditable="true" class="text effect11">立体字的纵深感、方向感、错落感</div>

        </main>
    </div>
</template>

<style scoped lang="scss">
    @keyframes shadowGo {
        0% {
            background-position: 0 0
        }
        0% {
            background-position: -100% 100%
        }
    }

    /**
* 利用text-shadow实现3d文字效果
*
* $color     立体字的初始颜色
* $dx        立体字水平偏移位置，dx>0,向右偏，建议取值[-2,2]
* $dy        立体字垂直偏移位置，dy>0,向下偏，建议取值[-2,2]，dx和dy配合控制立体字的方向
* $steps     立体字的层叠数量
* $darken    立体字的颜色变暗数值，建议取值[0,1],需要结合层叠数量，避免过多的黑色出现
* @copyright 前端开发whqet，http://blog.csdn.net/whqet
*/
    @mixin text3d($color: #ffd300, $dx: 1, $dy: -1,$steps:10, $darken:.1) {
        color: $color;
        $color: darken($color, 30%);

        $output: '';
        $x: 0px;
        $y: 0px;
        @for $n from 1 to $steps {
            $output: $output + '#{$x} #{$y} 0 #{$color},';
            $x: $x+$dx;
            $y: $y+$dy;
            $color: darken($color, $darken * ($n+10));
        }
        $output: $output+'#{$x} #{$y} 12px rgba(0,0,0,0.3),#{$x} #{$y} 1px rgba(0,0,0,0.5);';

        text-shadow: unquote($output);
    }

    @keyframes rainbow {
        @for $i from 0 through 10 {
            #{$i* 10%} {
                @include text3d(adjust-hue(#7E00FF, $i *36deg), 1, 1, 10, .1);
            }
        }
    }

    .text {
        font-family: "微软雅黑", "Dosis", sans-serif;
        font-size: 50px;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        position: relative;
        margin-bottom: 50px;
        &.effect01 {
            color: #fefefe;
            text-shadow: 0px 1px 0px #c0c0c0,
            0px 2px 0px #b0b0b0,
            0px 3px 0px #a0a0a0,
            0px 4px 0px #909090,
            0px 5px 10px rgba(0, 0, 0, 0.6);
        }

        &.effect02 {
            color: #333;
            text-shadow: 1px -1px 0 #767676,
            -1px 2px 1px #737272,
            -2px 4px 1px #767474,
            -3px 6px 1px #787777,
            -4px 8px 1px #7b7a7a,
            -5px 10px 1px #7f7d7d,
            -6px 12px 1px #828181,
            -7px 14px 1px #868585,
            -8px 16px 1px #8b8a89,
            -9px 18px 1px #8f8e8d,
            -10px 20px 1px #949392,
            -11px 22px 1px #999897,
            -12px 24px 1px #9e9c9c,
            -13px 26px 1px #a3a1a1,
            -14px 28px 1px #a8a6a6,
            -15px 30px 1px #adabab,
            -16px 32px 1px #b2b1b0,
            -17px 34px 1px #b7b6b5,
            -18px 36px 1px #bcbbba,
            -19px 38px 1px #c1bfbf,
            -20px 40px 1px #c6c4c4,
            -21px 42px 1px #cbc9c8,
            -22px 44px 1px #cfcdcd;
        }

        &.effect03 {
            color: #202020;
            text-shadow: -1px -1px 1px #111111,
            2px 2px 1px #363636;
        }

        &.effect04 {
            background: #333 linear-gradient(45deg, transparent 45%, hsla(48, 20%, 90%, 1) 45%, hsla(48, 20%, 90%, 1) 55%, transparent 0);
            background-size: .05em .05em;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 2px #111;
        }

        &.effect05 {
            color: #DC554F;
            background-color: #27ae60;
            z-index: 3;
            &:before {
                content: attr(data-text);
                width: 100%;
                line-height: 70px;
                opacity: .5;
                position: absolute;
                top: 2px;
                left: 5px;
                background-image: linear-gradient(45deg, transparent 45%, hsla(48, 20%, 90%, 1) 45%, hsla(48, 20%, 90%, 1) 55%, transparent 0);
                z-index: -1;
                background-size: .05em .05em;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: shadowGo 20s linear infinite;
            }
        }

        &.effect06 {
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 2px #d6d6d6;
            background: url(../assets/images/transform/card1.jpg);
            background-size: cover;
        }

        &.effect07 {
            background: #333 url(../assets/images/transform/card1.jpg);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: cover;
            animation: 10s infinite linear animate;
            &:before {
                content: "";
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                background-color: #999;
                z-index: -1;
            }
            @keyframes animate {
                0% {
                    background-position: 0;
                }
                100% {
                    background-position: -1000px 0;
                }
            }
        }

        &.effect08 {
            color: #fff;
            transform-origin: center bottom;
            transform-style: preserve-3d;
            transition: all 1s;
            cursor: pointer;
            transform: rotate3d(1, 0, 0, 40deg);
            h1 {
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                text-shadow: 0 0 10px rgba(0, 0, 100, .5);
            }
            /*sass 循环给每一个h1设置不同的translateZ*/
            @for $n from 1 to 8 {
                h1:nth-child(#{$n}) {
                    transform: translateZ(4px*$n);
                }
            }
        }

        &.effect09 {
            margin-top: 300px;
            color: gray;
            text-shadow: 3px 3px 2px black,
            -3px -3px 2px white;
            &:hover {
                text-shadow: 3px 3px 2px white,
                -3px -3px 2px black;
            }
        }

        &.effect10 {
            @for $i from 1 through 10 {
                .char#{$i} {
                    animation: rainbow 2s linear infinite;
                    animation-delay: 0.1s * $i;
                }
            }
        }

        &.effect11 {
            @include text3d(#00d3ff, 1, -1, 15, .05);
        }
    }

</style>

<script>
    export default {
        name: "font",
        methods: {
            pageInit() {
                this.clean();
            },

            clean() {
                Object.assign(this.$data, this.$options.data());
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
