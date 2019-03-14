<template>
    <div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: "tab"
    }
</script>

<style scoped lang="scss">
    div {
        width: 100%;
        height: 100%;
    }
</style>