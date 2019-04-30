<template>
    <div class="tl-con">
        <v-header>
            <h1>scroll</h1>
        </v-header>

        <main>
            <input type="text">
        </main>

    </div>
</template>

<style scoped lang="scss">
    main {
        padding: 15px;
        background-color: rebeccapurple;
    }
</style>

<script>
    export default {
        name: "v-scroll",
        methods: {
            pageInit() {
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
