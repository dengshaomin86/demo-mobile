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

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1"></stop>
                        <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1"></stop>
                    </linearGradient>
                </defs>
                <path d="M10,10 a4,3 0 0,0 30,0" fill="none" stroke="url(#grad1)" stroke-width="3"></path>
            </svg>

            <svg width="80" height="80" color="yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M224 420c-11 0-20-9-20-20v-64c0-11 9-20 20-20s20 9 20 20v64c0 11-9 20-20 20zm224-148v192c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48h16v-64C64 71.6 136-.3 224.5 0 312.9.3 384 73.1 384 161.5V224h16c26.5 0 48 21.5 48 48zM96 224h256v-64c0-70.6-57.4-128-128-128S96 89.4 96 160v64zm320 240V272c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16z" class=""></path>
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
