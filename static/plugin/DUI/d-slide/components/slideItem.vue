<template>
    <div class="d-slide-item">
        <slot>
        </slot>
    </div>
</template>

<style scoped lang="scss">
    .d-slide-item {
        width: 100%;
        height: 100%;
        float: left;
    }
</style>

<script>
    export default {
        name: "d-slide-item",
        methods: {},
        props: [],
        data: function () {
            return {}
        },
        mounted() {
        },
    }
</script>
