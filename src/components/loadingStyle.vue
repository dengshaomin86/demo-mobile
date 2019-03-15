<template>
    <div class="tl-con">
        <v-header>
            <h1>loading-style</h1>
        </v-header>

        <div style="width: 60px;height: 60px;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-pacman">
                <g style="display:block">
                    <circle cx="43.8628" cy="50" r="4" fill="#376888">
                        <animate attributeName="cx" calcMode="linear" values="95;35" keyTimes="0;1" dur="1" begin="-0.67s" repeatCount="indefinite"></animate>
                        <animate attributeName="fill-opacity" calcMode="linear" values="0;1;1" keyTimes="0;0.2;1" dur="1" begin="-0.67s" repeatCount="indefinite"></animate>
                    </circle>
                    <circle cx="64.2628" cy="50" r="4" fill="#376888">
                        <animate attributeName="cx" calcMode="linear" values="95;35" keyTimes="0;1" dur="1" begin="-0.33s" repeatCount="indefinite"></animate>
                        <animate attributeName="fill-opacity" calcMode="linear" values="0;1;1" keyTimes="0;0.2;1" dur="1" begin="-0.33s" repeatCount="indefinite"></animate>
                    </circle>
                    <circle cx="84.0628" cy="50" r="4" fill="#376888">
                        <animate attributeName="cx" calcMode="linear" values="95;35" keyTimes="0;1" dur="1" begin="0s" repeatCount="indefinite"></animate>
                        <animate attributeName="fill-opacity" calcMode="linear" values="0;1;1" keyTimes="0;0.2;1" dur="1" begin="0s" repeatCount="indefinite"></animate>
                    </circle>
                </g>
                <g transform="translate(-15 0)">
                    <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#8cd0e5" transform="rotate(16.4057 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;45 50 50;0 50 50" keyTimes="0;0.5;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
                    </path>
                    <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#8cd0e5" transform="rotate(-16.4057 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;-45 50 50;0 50 50" keyTimes="0;0.5;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
                    </path>
                </g>
            </svg>
        </div>

        <div style="width: 60px;height: 60px;">
            <svg class="lds-microsoft" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <g transform="rotate(0)">
                    <circle cx="73.801" cy="68.263" fill="#eca611" r="3" transform="rotate(352.096 50.0001 50.0001)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="0s"></animateTransform>
                    </circle>
                    <circle cx="68.263" cy="73.801" fill="#fdc823" r="3" transform="rotate(356.645 50.0003 50.0003)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.062s"></animateTransform>
                    </circle>
                    <circle cx="61.481" cy="77.716" fill="#fff36a" r="3" transform="rotate(359.239 50.0017 50.0017)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.125s"></animateTransform>
                    </circle>
                    <circle cx="53.916" cy="79.743" fill="#fffeaf" r="3" transform="rotate(0.00426266 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.187s"></animateTransform>
                    </circle>
                    <circle cx="46.084" cy="79.743" fill="#fffbd6" r="3" transform="rotate(0.954418 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.25s"></animateTransform>
                    </circle>
                    <circle cx="38.519" cy="77.716" fill="#eca611" r="3" transform="rotate(3.70284 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.312s"></animateTransform>
                    </circle>
                    <circle cx="31.737" cy="73.801" fill="#fdc823" r="3" transform="rotate(8.54951 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.375s"></animateTransform>
                    </circle>
                    <circle cx="26.199" cy="68.263" fill="#fff36a" r="3" transform="rotate(15.6138 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.437s"></animateTransform>
                    </circle>
                    <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;0 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s"></animateTransform>
                </g>
            </svg>
        </div>

        <div style="width: 60px;height: 60px;">
            <svg class="lds-microsoft" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <g transform="rotate(0)">
                    <circle cx="73.801" cy="68.263" fill="#93dbe9" r="4" transform="rotate(173.408 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="0s"></animateTransform>
                    </circle>
                    <circle cx="68.263" cy="73.801" fill="#689cc5" r="4" transform="rotate(200.891 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.062s"></animateTransform>
                    </circle>
                    <circle cx="61.481" cy="77.716" fill="#5e6fa3" r="4" transform="rotate(230.105 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.125s"></animateTransform>
                    </circle>
                    <circle cx="53.916" cy="79.743" fill="#3b4368" r="4" transform="rotate(256.763 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.187s"></animateTransform>
                    </circle>
                    <circle cx="46.084" cy="79.743" fill="#191d3a" r="4" transform="rotate(280.862 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.25s"></animateTransform>
                    </circle>
                    <circle cx="38.519" cy="77.716" fill="#d9dbee" r="4" transform="rotate(301.177 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.312s"></animateTransform>
                    </circle>
                    <circle cx="31.737" cy="73.801" fill="#b3b7e2" r="4" transform="rotate(318.253 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.375s"></animateTransform>
                    </circle>
                    <circle cx="26.199" cy="68.263" fill="#93dbe9" r="4" transform="rotate(331.698 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.437s"></animateTransform>
                    </circle>
                    <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;0 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s"></animateTransform>
                </g>
            </svg>
        </div>

    </div>
</template>

<script>
    export default {
        name: "loading-style"
    }
</script>

<style scoped>

</style>