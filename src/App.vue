<template>
    <div id="app">
        <div id="particlesCon"></div>

        <ul class="list">
            <li v-for="item in list" @click="share(item)">{{item}}</li>
            <li><a href="javascript:window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(document.location.href)+'&t='+encodeURIComponent(document.title),'_blank','toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=450,top=100,left=350');void(0)"> <i class="fa fa-facebook" aria-hidden="true"></i> Share </a></li>
            <li><a href="//plus.google.com/share?app=110&url=http%3A%2F%2Fphpstack-175879-514271.cloudwaysapps.com%2Fproduct%2Fdetail%2Fid%2F46" target="_blank" onclick="window.open(this.href,'','scrollbars=1,resizable=1,width=400,height=620');return false;">
                <div dir="ltr" class="ozWidgetPlusButtonHeight24_"><span id="widget_bounds" style=""><div style="height:24px;" class="ozWidgetRioButton_ ozIdPlusShareButton_" id="button" title="Share"><div class="ozWidgetRioButtonContentWrapper_"><div style="margin:2px 0 0 2px;" class="ozWidgetRioButtonIcon_"><div style="width:18px;height:18px;" class="ozWidgetRioButtonSvgImageWithFallback_ ozWidgetRioButtonIconImage_ ozWidgetRioButtonIconImage18_"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 14 14" class="ozWidgetRioButtonSvg_"><path d="M12.5,6.2V4.7h-1.1v1.5H9.8v1.1h1.5v1.5h1.1V7.3H14V6.2H12.5z"></path><path d="M4.4,6.1v1.7h2.3c-0.2,1-1.1,1.8-2.3,1.8C3,9.6,1.8,8.4,1.8,7S3,4.4,4.4,4.4C5,4.4,5.6,4.6,6,5l1.3-1.3 C6.5,3.1,5.6,2.6,4.4,2.6C2,2.6,0,4.6,0,7s2,4.4,4.4,4.4c2.5,0,4.2-1.8,4.2-4.3c0-0.3,0-0.7-0.1-1C8.5,6.1,4.4,6.1,4.4,6.1z"></path></svg></div></div><span style="font-size:11px;line-height:22px;" class="ozWidgetRioButtonContents_">Share</span></div></div></span>
                </div>
            </a></li>
        </ul>

        <button @click="verify">滑块验证</button>

    </div>
</template>

<script>
    import 'particles.js'

    export default {
        name: 'app',
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
        }
    }
</script>

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
