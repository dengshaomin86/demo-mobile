<template>
    <div class="tl-con">
        <div id="particlesCon"></div>
        <div class="login-con">
            <form class="form-con">
                <div class="form-con-bg">
                    <div class="form-con-logo">
                        <img src="../assets/images/logo/logo.png">
                    </div>
                    <div class="form-con-item">
                        <input type="text" placeholder="username" v-model="username"/>
                    </div>
                    <div class="form-con-item">
                        <input type="password" placeholder="password" v-model="password"/>
                    </div>
                </div>
            </form>

            <button class="login-con-btn" @click="submit">login</button>
            <router-link to="" tag="button" class="login-con-link">sign up</router-link>
            <router-link to="" tag="button" class="login-con-link">forgot password?</router-link>
        </div>
    </div>

</template>

<style scoped lang="scss">
    #particlesCon {
        width: 100%;
        height: 100%;
        background: #4dabff linear-gradient(to right bottom, #9c27b0, #4dabff);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .login-con {
        position: relative;
        z-index: 1;

        .form-con {
            width: 7rem;
            margin: 4rem auto 0;
            padding-top: 1.2rem;

            .form-con-bg {
                background-color: rgba(255, 255, 255, 0.3);
                border-radius: 0.2rem;
                padding: 1.2rem 0 0.3rem;
                box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.5);
                &:before {
                    display: block;
                    content: '';
                    width: 2.4rem;
                    height: 1.2rem;
                    background-color: inherit;
                    border-radius: 1.2rem 1.2rem 0 0;
                    position: absolute;
                    top: 0;
                    left: 50%;
                    margin-left: -1.2rem;
                }
            }

            &-logo {
                width: 2rem;
                height: 2rem;
                background-color: rgba(255, 255, 255, 0.3);
                border-radius: 100%;
                padding: 4px;
                position: absolute;
                top: 0.2rem;
                left: 50%;
                margin-left: -1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    width: 70%;
                    height: 70%;
                }
            }

            &-item {
                padding: 0 0.5rem;
                height: 1.1rem;
                display: flex;
                align-items: center;
                &:last-of-type {
                    input {
                        border: none;
                    }
                }
                input {
                    width: 100%;
                    height: 1.1rem;
                    color: #fff;
                    font-size: 0.4rem;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
                    &::placeholder {
                        color: rgba(255, 255, 255, 0.5);
                        text-transform: capitalize;
                    }
                }
            }
        }

        &-btn {
            width: 7rem;
            height: 1.1rem;
            border-radius: 0.2rem;
            margin: 1rem auto;
            display: block;
            background-color: rgba(255, 255, 255, 0.3);
            box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.5);
            text-shadow: 0 0 5px #4dabff;
            text-transform: uppercase;
            font-size: 0.4rem;
            color: #fff;
        }

        &-link {
            display: block;
            width: 7rem;
            margin: 0.6rem auto 0;
            font-size: 0.4rem;
            color: #fff;
            font-style: italic;
            text-transform: capitalize;
            text-align: center;
            text-decoration: underline;
            text-shadow: 5px 5px 3px rgba(0, 0, 0, 0.6);
        }
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

            submit() {
                let data = {
                    username: this.username,
                    password: this.password,
                };

                if (this.checkEmpty(data)) {
                    this.verify(data);
                }
            },

            checkEmpty(data) {
                for (let key in data) {
                    if (data[key] === '') {
                        alert('Please enter ' + key);
                        return false
                    }
                }
                return true
            },

            verify(data) {
                this.$slideVerify((res) => {
                    if (res) {
                        this.login(data);
                    }
                });
            },

            login(data) {
                if (this.check(data)) {
                    console.log('Login success');
                }
            },

            check(data) {
                for (let key in data) {
                    switch (key) {
                        case 'username':
                            if (data[key].toLowerCase() !== 'dsm') {
                                alert('User does not exist');
                                return false
                            }
                            break;
                        case 'password':
                            if (data[key] !== '123') {
                                alert('Wrong password');
                                return false
                            }
                            break;
                    }
                }
                return true
            },

        },
        data() {
            return {
                username: '',
                password: '',
            }
        },
        mounted() {
            this.particlesInit();
        },
        activated() {
        },
    }
</script>
