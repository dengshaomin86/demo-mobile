<template>
    <div class="slide-con">
        <transition-group tag="ul" class="slide" name="image">
            <li v-for="(item, idx) in slideImg" v-show="idx===slideIdx" :key="idx+1">
                <img :src='item'>
            </li>
        </transition-group>
        <ul class="bullet">
            <li v-for="(item, idx) in slideImg" :class="{'active':idx===slideIdx}" @click="change(idx)" :key="idx"></li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
    .image-enter-active {
        transform: translateX(0);
        transition: 1s;
    }

    .image-leave-active {
        transform: translateX(-100%);
        transition: 1s;
    }

    .image-enter {
        transform: translateX(100%);
    }

    .image-leave {
        transform: translateX(0);
    }

    .slide-con {
        max-width: 100%;
        margin: auto;
        overflow: hidden;
        position: relative;
        .slide {
            width: 100%;
            height: 100%;
            li {
                width: 100%;
                height: 100%;
                position: absolute;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .bullet {
            width: 100%;
            position: absolute;
            bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            list-style: none;
            li {
                width: 20px;
                height: 5px;
                margin-right: 10px;
                border: 1px solid #fff;
                background: #fff;
                &.active {
                    background: #f00;
                }
            }
        }
    }
</style>

<script>
    export default {
        name: "v-slide",
        methods: {
            slideInit() {
                clearInterval(this.timer);
                this.timer = setInterval(() => {
                    this.slideIdx++;
                    if (this.slideIdx === this.slideImg.length) {
                        this.slideIdx = 0
                    }
                }, 2500)
            },

            change(i) {
                this.slideIdx = i;
                this.slideInit();
            },

        },
        data() {
            return {
                timer: null,
                slideIdx: 0,
                slideImg: [
                    require('../../../assets/images/transform/card1.jpg'),
                    require('../../../assets/images/transform/card2.jpg'),
                    require('../../../assets/images/transform/card3.jpg'),
                ],
            }
        },
        mounted() {
            this.slideInit();
        },
        activated() {
        },
    }
</script>
