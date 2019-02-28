<template>
    <div class="tl-con">
        <h1>index</h1>

        <div class="slideBox">
            <d-slide>
                <d-slide-item v-for="(item, idx) in 3" :key="idx">{{item}}</d-slide-item>
            </d-slide>
        </div>

        <div class="btnBox">
            <button @click="submit" ref="btn">submit</button>
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
                }).then(function (res) {
                    console.log(res);
                }).catch(function (error) {
                    console.log('error', error);
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
