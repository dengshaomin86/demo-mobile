<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<style scoped lang="scss">
    #app {
        width: 100%;
        height: 100%;
    }
</style>

<script>
    export default {
        name: 'app',
        methods: {},
        data() {
            return {}
        },
        mounted() {
        },
    }
</script>
