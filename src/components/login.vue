<template>
    <div class="tl-con">
        <div id="particlesCon"></div>
        <div class="login-con">
            <h1>login</h1>
            <router-link to="/index">index</router-link>
        </div>
    </div>

</template>

<style scoped lang="scss">
    #particlesCon {
        width: 100%;
        height: 100%;
        background-color: #4dabff;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .login-con {
        position: relative;
        z-index: 1;
    }
</style>

<script>
    import 'particles.js'

    export default {
        name: "login",
        methods: {
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
            return {}
        },
        mounted() {
            this.particlesInit();
        },
        activated() {
        },
    }
</script>
