<template>
    <div class="tl-con">
        <h1>mine</h1>

        <ul class="list">
            <router-link to="/translate" tag="li">translate</router-link>
            <router-link to="/indexedDB" tag="li">indexedDB</router-link>
            <router-link to="/share" tag="li">share</router-link>
            <router-link to="/imgLoad" tag="li">imgLoad</router-link>
            <router-link to="/baiduMap" tag="li">baiduMap</router-link>
        </ul>

        <router-link to="/index">index</router-link>
        <router-link to="/login">login</router-link>
    </div>
</template>

<style scoped lang="scss">
    .list {
        li {
            cursor: pointer;
            line-height: 1rem;
            margin-left: 1rem;
        }
    }

    a {
        line-height: 1rem;
        margin-left: 1rem;
    }

</style>

<script>
    export default {
        name: "mine",
        methods: {
            languageApi() {
                axios.get('http://218.93.127.26:1111/api/v1/languageApi', {
                    params: {
                        cmd: 'getIsChineseNow',
                        AppName: 'Web',
                        _isAjax: true,
                        LangID: 2,
                        ScopeIDEq: 1,
                        _: new Date().getTime(),
                    },
                    // loading: false,
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
