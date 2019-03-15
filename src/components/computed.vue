<template>
    <div class="tl-con">
        <v-header>
            <h1>computed</h1>
        </v-header>

        <main>
            <div>
                <input type="text" v-model="amount">
                <input type="text" v-model="amountCalc" disabled>
            </div>
        </main>

    </div>
</template>

<style scoped lang="scss">
    input {
        border: 1px solid #ccc;
        &:focus {
            border-color: #ffb516;
        }
    }

    main {
        padding: 15px;
    }
</style>

<script>
    export default {
        name: "computed",
        methods: {},
        data() {
            return {
                amount: '',
                list: [],
            }
        },
        mounted() {
        },
        activated() {
        },
        computed: {
            amountCalc: function () {
                return this.amount + 'computed'
            }
        },
    }
</script>
