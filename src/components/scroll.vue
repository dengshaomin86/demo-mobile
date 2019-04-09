<template>
    <div class="tl-con">
        <v-header>
            <h1>scroll</h1>
        </v-header>

        <main>
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
