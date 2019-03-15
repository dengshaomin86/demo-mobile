<template>
    <div class="tl-con">
        <v-header>
            <h1>svg</h1>
        </v-header>

        <router-link to="/mine">mine</router-link>

    </div>
</template>

<style scoped lang="scss">

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
            console.log(this.transition);
        },
    }
</script>
