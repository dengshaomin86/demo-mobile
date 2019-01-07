<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome'
            }
        },
        mounted() {
        },
    }
</script>

<style scoped lang="scss">
    h1 {
        color: blue;
    }
</style>
