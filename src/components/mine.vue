<template>
    <div class="tl-con">
        <h1>mine</h1>

        <ul class="list">
            <li v-for="item in list" @click="share(item)">{{item}}</li>
            <li><i class="fas fa-sort-down"></i></li>
            <li>
                <input type="text" placeholder="请输入搜索内容" @input="search" v-model="searchText">
            </li>
        </ul>

        <router-link to="/login">login</router-link>
        <router-link to="/index">index</router-link>

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
    let lodash = require('lodash');

    export default {
        name: "mine",
        methods: {
            share(key) {
                console.log(key);
                switch (key) {
                    case 'twitter':
                        window.open("http://twitter.com/home?status=" + encodeURIComponent(location.href) + "" + encodeURIComponent('shareTitle'), "sharer", "toolbar=0,status=0,width=626,height=436");
                        break;
                    case 'facebook':
                        window.open("http://www.facebook.com/sharer.php?u=" + encodeURIComponent(location.href));
                        break;
                    case 'google':
                        window.open("https://plus.google.com/share?url=" + encodeURIComponent(location.href), "sharer", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
                        break;
                    case 'linkedIn':
                        window.open("http://www.linkedin.com/shareArticle?url=" + encodeURIComponent(location.href), "sharer", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
                        break;
                }
            },

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

            translate() {
                axios.get('http://api.fanyi.baidu.com/api/trans/vip/translate', {
                    params: {
                        q: '你好',  // 请求翻译query
                        from: 'zh',  // 翻译源语言
                        to: 'en',  // 译文语言
                        appid: '',  // APP ID
                        salt: '',  // 随机数
                        sign: '',  // 签名 appid+q+salt+密钥 的MD5值
                    },
                }).then(function (res) {
                    console.log(res);
                }).catch(function (error) {
                    console.log('error', error);
                });

            },

            // 节流
            search: lodash.debounce(function () {
                console.log(this.searchText);
            }, 500),

        },
        data() {
            return {
                list: ['twitter', 'facebook', 'google', 'linkedIn'],
                searchText: '',
            }
        },
        mounted() {
            this.languageApi();
        },
        activated() {
        },
    }
</script>
