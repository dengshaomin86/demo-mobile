<template>
    <div class="tl-con">
        <h1>translate</h1>

        <ul class="list">
            <li>
                <input type="text" placeholder="请输入搜索内容" @input="search" v-model="searchText">
            </li>
        </ul>

        <router-link to="/login">login</router-link>
        <router-link to="/mine">mine</router-link>

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
    let md5 = require('js-md5');

    export default {
        name: "translate",
        methods: {
            // 节流
            search: lodash.debounce(function () {
                console.log(this.searchText);
                this.searchText && this.translate(this.searchText);
            }, 500),

            // 百度翻译
            translate(text) {
                let q = text || '你好';
                let appID = '20190214000266633';
                let salt = Math.random();
                let key = 'dQz1WyRWp2TLzkZOSEOb';
                let sign = appID + q + salt + key;

                axios.get('/api/trans/vip/translate', {
                    params: {
                        q: q,  // 请求翻译query
                        from: 'zh',  // 翻译源语言
                        to: 'en',  // 译文语言
                        appid: appID,  // APP ID
                        salt: salt,  // 随机数
                        sign: md5(sign),  // 签名 appid+q+salt+密钥 的MD5值
                    },
                }).then(function (res) {
                    console.log(res);
                }).catch(function (error) {
                    console.log('error', error);
                });

            },

        },
        data() {
            return {
                searchText: '',
            }
        },
        mounted() {
        },
        activated() {
        },
    }
</script>
