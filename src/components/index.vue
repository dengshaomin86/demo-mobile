<template>
    <div class="tl-con">
        <h1>index</h1>
        <div id="particlesCon"></div>

        <ul class="list">
            <li v-for="item in list" @click="share(item)">{{item}}</li>
        </ul>

        <button @click="verify">滑块验证</button>
        <router-link to="/login" tag="button">login</router-link>

    </div>

</template>

<style scoped lang="scss">
    .list {
        li {
            cursor: pointer;
        }
    }

    #particlesCon {
        width: 100%;
        height: 200px;
        background-color: #4dabff;
    }
</style>

<script>
    import 'particles.js'

    export default {
        name: "index",
        methods: {
            share(key) {
                console.log(key);
                switch (key) {
                    case 'twitter':
                        window.open("http://twitter.com/home?status=" + encodeURIComponent(location.href) + "" + encodeURIComponent('shareTitle'), "sharer", "toolbar=0,status=0,width=626,height=436");
                        break;
                    case 'facebook':
                        window.open("http://www.facebook.com/sharer.php?u=" + encodeURIComponent(location.href));
                        break;
                    case 'google':
                        window.open("https://plus.google.com/share?url=" + encodeURIComponent(location.href), "sharer", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
                        break;
                    case 'linkedIn':
                        window.open("http://www.linkedin.com/shareArticle?url=" + encodeURIComponent(location.href), "sharer", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
                        break;
                }
            },

            verify() {
                this.$slideVerify(function (res) {
                    console.log('验证结果', res);
                });
            },

            translate() {
                $.ajaxJson('http://api.fanyi.baidu.com/api/trans/vip/translate', {
                    q: '你好',  // 请求翻译query
                    from: 'zh',  // 翻译源语言
                    to: 'en',  // 译文语言
                    appid: '',  // APP ID
                    salt: '',  // 随机数
                    sign: '',  // 签名 appid+q+salt+密钥 的MD5值
                    abc: 123,
                }, {
                    before: function () {
                        console.log('before');
                    },
                    yes: function () {
                        console.log('yes');
                    },
                    no: function () {
                        console.log('no');
                    },
                    over: function () {
                        console.log('over');
                    }
                })
            },

            particlesInit() {
                particlesJS("particlesCon", {
                    particles: {
                        number: {
                            value: 120,
                            density: {
                                enable: !0,
                                value_area: 1e3
                            }
                        },
                        color: {
                            value: "#ffffff"
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#000000"
                            },
                            polygon: {
                                nb_sides: 5
                            }
                        },
                        opacity: {
                            value: .5,
                            random: !1,
                            anim: {
                                enable: !1,
                                speed: 1,
                                opacity_min: .1,
                                sync: !1
                            }
                        },
                        size: {
                            value: 3,
                            random: !0,
                            anim: {
                                enable: !1,
                                speed: 40,
                                size_min: .1,
                                sync: !1
                            }
                        },
                        line_linked: {
                            enable: !0,
                            distance: 150,
                            color: "#ffffff",
                            opacity: .2,
                            width: 1
                        },
                        move: {
                            enable: !0,
                            speed: 3,
                            direction: "none",
                            random: !1,
                            straight: !1,
                            out_mode: "out",
                            bounce: !1,
                            attract: {
                                enable: !1,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: !0,
                                mode: "grab"
                            },
                            onclick: {
                                enable: !0,
                                mode: "push"
                            },
                            resize: !0
                        },
                        modes: {
                            grab: {
                                distance: 140,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3
                            },
                            repulse: {
                                distance: 200,
                                duration: .4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    },
                    retina_detect: !0
                })
            },
        },
        data() {
            return {
                list: ['twitter', 'facebook', 'google', 'linkedIn']
            }
        },
        mounted() {
            this.translate();
            this.particlesInit();
        },
        activated() {
        },
    }
</script>
