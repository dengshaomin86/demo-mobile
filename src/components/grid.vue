<template>
    <div class="tl-con">
        <v-header>
            <h1>grid</h1>
        </v-header>

        <div class="con">
            <div class="t"></div>
            <div class="b">
                <ul>
                    <li>123456</li>
                </ul>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
    .tl-con {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .con {
        width: 100%;
        height: 100%;
        background-color: cadetblue;
        overflow-x: hidden;
        display: grid;
        grid-gap: 0.4rem;

        .t {
            width: 100%;
            min-height: 2rem;
            background-color: blue;
        }
        .b {
            width: 100%;
            min-height: 2rem;
            background-color: rebeccapurple;
        }
    }

</style>

<script>
    export default {
        name: "grid",
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
