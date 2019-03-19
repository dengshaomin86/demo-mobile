<template>
    <div class="tl-con">
        <h1>index</h1>

        <v-slide class="slide"></v-slide>

        <div class="btnBox">
            <button @click="submit" ref="btn">submit</button>
        </div>

        <router-link to="/login">login</router-link>
        <router-link to="/mine">mine</router-link>

    </div>
</template>

<style scoped lang="scss">
    .slide {
        width: 300px;
        height: 200px;
    }

    .btnBox {
        button {
            display: block;
            margin: 30px auto;
            width: 70%;
            height: 50px;
            background-color: #1d1d41;
            text-transform: uppercase;
        }
    }

</style>

<script>
    export default {
        name: "index",
        methods: {
            submit() {
                axios.get('http://218.93.127.26:1111/api/v1/languageApi', {
                    params: {
                        cmd: 'getIsChineseNow',
                        AppName: 'Web',
                        _isAjax: true,
                        LangID: 2,
                        ScopeIDEq: 1,
                        _: new Date().getTime(),
                    },
                    btn: this.$refs.btn,
                    toast: true,
                }).then(function (res) {
                }).catch(function (error) {
                });
            },

        },
        data() {
            return {}
        },
        mounted() {
        },
        activated() {
        },
    }
</script>
