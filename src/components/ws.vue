<template>
    <div class="tl-con">
        <v-header>
            <h1>ws</h1>
        </v-header>

        <main>

        </main>

    </div>
</template>

<style scoped lang="scss">

</style>

<script>
    import ws from './../ws'

    export default {
        name: "ws",
        methods: {
            pageInit() {
                ws.connect();
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
