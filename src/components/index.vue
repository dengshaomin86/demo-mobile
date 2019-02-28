<template>
    <div class="tl-con">
        <h1>index</h1>

        <div class="slideBox">
            <d-slide>
                <d-slide-item v-for="(item, idx) in 3" :key="idx">{{item}}</d-slide-item>
            </d-slide>
        </div>

        <router-link to="/login">login</router-link>
        <router-link to="/mine">mine</router-link>

    </div>
</template>

<style scoped lang="scss">
    a {
        line-height: 1rem;
        margin-left: 1rem;
    }

    .slideBox {
        width: 100%;
        height: 200px;
    }

</style>

<script>
    export default {
        name: "index",
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
