<template>
    <div class="tl-con">
        <v-header>
            <h1>svg</h1>
        </v-header>

        <main>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <path id="path1" d="M75,20 a1,1 0 0,0 100,0"></path>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1"></stop>
                        <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1"></stop>
                    </linearGradient>
                </defs>
                <text x="10" y="100" fill="url(#grad1)">
                    <textPath xlink:href="#path1">I love SVG I love SVG</textPath>
                </text>
            </svg>


            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1"></stop>
                        <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1"></stop>
                    </linearGradient>
                </defs>
                <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)"></ellipse>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1"></stop>
                        <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1"></stop>
                    </linearGradient>
                </defs>
                <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)"></ellipse>
                <text fill="#ffffff" font-size="45" font-family="Verdana" x="150" y="86">SVG</text>
            </svg>
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
        name: "v-svg",
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
