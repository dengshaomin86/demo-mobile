<template>
    <div class="tl-con">
        <h1>mine</h1>

        <ul class="list fa-ul">
            <router-link tag="li" to="/translate"><i class="fa fa-globe fa-fw fa-li"></i>translate</router-link>
            <router-link tag="li" to="/indexedDB"><i class="fa fa-database fa-fw fa-li"></i>indexedDB</router-link>
            <router-link tag="li" to="/share"><i class="fa fa-share-alt fa-fw fa-li"></i>share</router-link>
            <router-link tag="li" to="/imgLoad"><i class="fa fa-file-image-o fa-fw fa-li"></i>imgLoad</router-link>
            <router-link tag="li" to="/BMap"><i class="fa fa-location-arrow fa-fw fa-li"></i>BMap</router-link>
            <router-link tag="li" to="/transform"><i class="fa fa-cube fa-fw fa-li"></i>transform</router-link>
            <router-link tag="li" to="/loadingStyle"><i class="fa fa-cube fa-fw fa-li"></i>loadingStyle</router-link>
        </ul>

        <router-link to="/index">index</router-link>
        <router-link to="/login">login</router-link>
    </div>
</template>

<style scoped lang="scss">
    .list {
        margin: 0;
        li {
            cursor: pointer;
            line-height: 1rem;
            margin-left: 0.5rem;
            display: flex;
            align-items: center;
            .fa {
                position: relative;
                top: 0;
                left: 0;
            }
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
            this.languageApi();
        },
    }
</script>
