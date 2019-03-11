<template>
    <div class="tl-con">
        <h1>computed</h1>

        <router-link to="/mine">mine</router-link>
        <a @click="$back">back</a>

        <div>
            <input type="text" v-model="amount">
            <input type="text" v-model="amountCalc">
        </div>

    </div>
</template>

<style scoped lang="scss">

</style>

<script>
    export default {
        name: "computed",
        methods: {},
        data() {
            return {
                amount: '',
            }
        },
        mounted() {
        },
        activated() {
        },
        computed: {
            amountCalc: function () {
                return this.amount + 'aaaaaaaa'
            }
        },
    }
</script>
